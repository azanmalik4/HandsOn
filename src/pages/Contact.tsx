
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "handsoncommunicator@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Monday to Friday, 9am - 6pm EST",
    value: "+923178889860",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Power House Chowrangi North Karachi, Pakistan",
    color: "from-green-500 to-emerald-500",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 border border-primary/20 text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Contact <span className="gradient-text">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Have questions or want to learn more? We'd love to hear from you. 
              Reach out and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
                <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Send us a Message
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Fill out the form below
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-destructive" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-destructive" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-destructive" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base shadow-lg hover:shadow-xl group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message 
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {info.description}
                        </p>
                        <p className="text-foreground font-medium break-all">{info.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-secondary to-secondary/50 rounded-3xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-card/50 border border-border">
                      <span className="text-muted-foreground font-medium">Monday - Friday</span>
                      <span className="text-foreground font-semibold">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-card/50 border border-border">
                      <span className="text-muted-foreground font-medium">Saturday</span>
                      <span className="text-foreground font-semibold">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-card/50 border border-border">
                      <span className="text-muted-foreground font-medium">Sunday</span>
                      <span className="text-foreground font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Response Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-foreground font-semibold">Quick Response</p>
                  <p className="text-sm text-muted-foreground">Average reply time: 2 hours</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
     <section className="pb-16 md:pb-24">
  <div className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-border"
    >
      {/* Styled Google Maps - Add &style parameters for custom colors */}
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3040.98454767249!2d67.06033300319046!3d24.98786480823706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1769584507413!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HandsOn Communicator Location"
        className="w-full h-96 md:h-[450px] grayscale hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Floating Action Buttons */}
      <div className="absolute top-6 right-6 flex flex-col gap-3">
        <a
          href="https://maps.app.goo.gl/jNfWXArtkz3DnDa9A"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-card/95 backdrop-blur-xl border border-border hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all shadow-lg group"
          title="Open in Google Maps"
        >
          <MapPin className="w-5 h-5" />
        </a>
        <button
          onClick={() => navigator.clipboard.writeText('123 Innovation Drive, Tech City, TC 12345')}
          className="w-12 h-12 rounded-xl bg-card/95 backdrop-blur-xl border border-border hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all shadow-lg group"
          title="Copy Address"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </motion.div>
  </div>
</section>
    </Layout>
  );
};

export default Contact;

