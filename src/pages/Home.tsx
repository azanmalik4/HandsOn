import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
  Zap,
  Shield,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layout } from "@/components/layout/Layout";

const features = [
  {
    icon: MessageSquare,
    title: "Real-Time Translation",
    description:
      "Instantly translate sign language to text and speech, enabling seamless conversations.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Recognition",
    description:
      "Advanced machine learning algorithms ensure accurate gesture interpretation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Universal Access",
    description:
      "Designed for everyone, from individuals to educational institutions and workplaces.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays secure with end-to-end encryption and local processing options.",
    gradient: "from-orange-500 to-red-500",
  },
];

const stats = [
  { value: "100+", label: "Active Users", icon: Users },
  { value: "98%", label: "Accuracy Rate", icon: TrendingUp },
  { value: "5+", label: "Languages", icon: Globe },
  { value: "24/7", label: "Support", icon: Heart },
];
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/handsoncommunicator/?viewAsMember=true",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/handsoncommunicator/?hl=en",
    label: "Instagram",
    color: "hover:bg-pink-500",
  },
  // { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-500" },
  // { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
];

const testimonials = [
  {
    quote:
      "HandsOn Communicator has the potential to transforme how deaf communicate forever.",
    author: "Umair Ahmed khan",
    role: "Incubation head at IU Core",
  },
  {
    quote:
      "Finally, technology that truly understands the needs of the deaf community.",
    author: "Faiza Javaid",
    role: "Teacher",
  },
  {
    quote:
      "The real-time translation is seamless. This is the future of accessibility.",
    author: "Dr. Zubair Ahmed",
    role: "Healthcare Professional",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="section-container py-12 md:py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 border border-primary/20"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  AI-Powered Communication
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
                Breaking Barriers in{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Communication</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                HandsOn Communicator bridges the gap between sign language and
                spoken language, empowering seamless connections for the deaf
                and hard-of-hearing community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2"
                  asChild
                >
                  <Link to="/information">Learn More</Link>
                </Button>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`group relative w-10 h-10 rounded-xl bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                    >
                      <social.icon className="w-4 h-4 relative z-10" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                      />
                    ))}
                  </div>
                  <span>100+ users trust us</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  <span className="ml-1">4.9/5 rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10" />

                <img
                  src="/Glove1.jpg"
                  alt="HandsOn Communicator Glove"
                  className="w-[80rem] h-[40rem] object-cover rounded-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        Real-Time Translation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        98% accuracy • Instant results
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-50 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

    {/* Stats Section */}
<section className="relative py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-gray-50 dark:to-gray-100 text-white dark:text-gray-900 overflow-hidden">
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
  </div>
  
  <div className="section-container relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center group"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 dark:bg-primary/30 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
            <stat.icon className="w-7 h-7 text-primary" />
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="text-gray-300 dark:text-gray-600 text-sm md:text-base font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
 

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <SectionHeading
            badge="Features"
            title="Empowering Communication"
            description="Our innovative technology makes communication accessible for everyone, everywhere."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10" />

                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 h-full border border-border group-hover:border-primary/50 group-hover:-translate-y-2">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* mission image */}
                <img
                  src="/Mission and Vission.png"
                  alt="HandsOn Communicator Glove"
                  className="w-[80rem] h-[40rem] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 text-sm font-semibold border border-primary/20">
                <Heart className="w-4 h-4" />
                Our Mission
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Creating an Inclusive World Through{" "}
                <span className="gradient-text">Technology</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We believe communication is a fundamental human right. Our
                mission is to leverage cutting-edge AI technology to break down
                communication barriers and create meaningful connections for the
                deaf and hard-of-hearing community.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Heart, text: "Accessibility First" },
                  { icon: Globe, text: "Global Reach" },
                  { icon: Zap, text: "Innovation Driven" },
                  { icon: Users, text: "Community Focused" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link to="/about">
                  Learn Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Testimonials"
            title="Loved by Our Community"
            description="See what our users have to say about their experience."
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Communication?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Join thousands of users who are already experiencing seamless
              communication with HandsOn Communicator.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-xl hover:shadow-2xl"
                asChild
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
                asChild
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
