
import { motion } from "framer-motion";
import { Hand, Monitor, Cpu, MessageSquare, Users, GraduationCap, Briefcase, Heart, ArrowRight, Zap, Shield, Brain, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const howItWorks = [
  {
    step: 1,
    icon: Hand,
    title: "Gesture Capture",
    description: "Our advanced camera system captures hand gestures and movements in real-time with high precision.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    icon: Cpu,
    title: "AI Processing",
    description: "Sophisticated machine learning algorithms analyze the gestures and identify sign language patterns.",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "Translation",
    description: "The recognized signs are instantly translated to text or speech, enabling seamless communication.",
    color: "from-green-500 to-emerald-500",
  },
  {
    step: 4,
    icon: Monitor,
    title: "Output Display",
    description: "Translations appear on screen in real-time, with options for audio output and multiple languages.",
    color: "from-orange-500 to-red-500",
  },
];

const technologies = [
  {
    icon: Brain,
    title: "Computer Vision",
    description: "Advanced image recognition and motion tracking for accurate gesture detection.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Deep Learning",
    description: "Neural networks trained on thousands of sign language examples for high accuracy.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Contextual understanding to produce natural, grammatically correct translations.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Edge Computing",
    description: "Local processing options for privacy-conscious users and offline functionality.",
    color: "from-orange-500 to-red-500",
  },
];

const targetUsers = [
  {
    icon: Users,
    title: "Individuals",
    description: "Deaf and hard-of-hearing individuals seeking easier communication in daily life.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools and universities providing inclusive learning environments.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Workplaces",
    description: "Companies creating accessible and inclusive work environments.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Medical facilities ensuring clear communication with all patients.",
    color: "from-red-500 to-pink-500",
  },
];

const features = [
  { label: "Real-time Translation", value: "< 100ms latency" },
  { label: "Accuracy Rate", value: "98%" },
  { label: "Sign Languages", value: "15+" },
  { label: "Offline Mode", value: "Available" },
];

const Information = () => {
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
              <Cpu className="w-4 h-4" />
              How It Works
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              The Technology Behind <span className="gradient-text">HandsOn</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Discover how our cutting-edge AI technology transforms sign language 
              into seamless communication.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <SectionHeading
            badge="Process"
            title="Step-by-Step Guide"
            description="Understanding how HandsOn Communicator works, from gesture to translation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connecting line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      {step.step}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 mix-blend-overlay z-10" />
              {/* Replace with: <img src="/workflow-diagram.jpg" alt="Product Workflow" className="w-full h-full object-cover" /> */}
              <ImagePlaceholder
                aspectRatio="wide"
                label="Product Workflow Diagram"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 text-sm font-semibold border border-primary/20">
                <Brain className="w-4 h-4" />
                Technology Stack
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Powered by Advanced <span className="gradient-text">AI</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our technology stack combines the latest advances in artificial intelligence, 
                computer vision, and natural language processing to deliver accurate, 
                real-time sign language translation.
              </p>

              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-all border border-border group-hover:border-primary/30 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {tech.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10" />
                {/* Replace with: <img src="/ai-tech-diagram.jpg" alt="AI Technology" className="w-full h-full object-cover" /> */}
                <ImagePlaceholder
                  aspectRatio="square"
                  label="AI Technology Diagram"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 blur-3xl -z-10" />

              {/* Feature Cards */}
              <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-3 z-20">
                {features.slice(0, 2).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="bg-card/90 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-white/20"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{feature.label}</p>
                    <p className="text-sm font-bold text-primary">{feature.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="section-container">
          <SectionHeading
            badge="Who We Serve"
            title="Target Users & Impact"
            description="HandsOn Communicator is designed for diverse users and environments."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {targetUsers.map((user, index) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30 group-hover:-translate-y-2 text-center h-full">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${user.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <user.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {user.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {user.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
            >
              Real results from real users around the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Active Users", icon: Users },
              { value: "2M+", label: "Translations Daily", icon: MessageSquare },
              { value: "98%", label: "Accuracy Rate", icon: TrendingUp },
              { value: "15+", label: "Sign Languages", icon: Hand },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-xl">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Want to Learn More?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
              Get in touch with our team to learn more about how HandsOn Communicator 
              can work for you or your organization.
            </p>
            <Button size="lg" className="shadow-lg hover:shadow-xl group" asChild>
              <Link to="/contact">
                Contact Us 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Information;