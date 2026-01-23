// ============================================
// ENHANCED ABOUT.TSX
// Copy this to: src/pages/About.tsx
// ============================================

import { motion } from "framer-motion";
import { Target, Lightbulb, CheckCircle, Users, Award, TrendingUp, Heart, Zap, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

const teamValues = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our commitment to accessibility and inclusion.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with assistive technology.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We work closely with the deaf community to ensure our solutions meet real needs.",
    color: "from-green-500 to-emerald-500",
  },
];

const problemPoints = [
  "Over 70 million deaf people worldwide face daily communication barriers",
  "Sign language interpreters are scarce and expensive",
  "Real-time translation technology has been unreliable and inaccessible",
  "Educational and workplace opportunities are limited by communication gaps",
];

const solutionPoints = [
  "AI-powered real-time sign language recognition and translation",
  "Affordable, accessible technology for individuals and organizations",
  "Continuous learning from user feedback to improve accuracy",
  "Multi-platform support for seamless integration into daily life",
];

const stats = [
  { value: "2022", label: "Founded", icon: Award },
  { value: "50K+", label: "Users", icon: Users },
  { value: "98%", label: "Accuracy", icon: TrendingUp },
  { value: "15+", label: "Languages", icon: Zap },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 md:py-24 overflow-hidden">
        {/* Animated background */}
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
              <Heart className="w-4 h-4" />
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Our Story & <span className="gradient-text">Vision</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              HandsOn Communicator was born from a simple belief: everyone deserves 
              the ability to communicate freely and be understood.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 text-sm font-semibold border border-primary/20">
                Our Beginning
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Pioneering Assistive <span className="gradient-text">Communication</span> Technology
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                HandsOn Communicator is an innovative startup focused on developing 
                cutting-edge assistive technology solutions. Our flagship product bridges 
                the communication gap between sign language users and the hearing world.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by a diverse team of engineers, accessibility advocates, and 
                members of the deaf community, we bring together unique perspectives 
                and expertise to create solutions that truly make a difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 group hover:border-primary/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-semibold">Award Winning</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 group hover:border-primary/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-semibold">Fast Growing</span>
                </div>
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
                {/* Replace with: <img src="/team-photo.jpg" alt="Our Team" className="w-full h-full object-cover" /> */}
                <ImagePlaceholder
                  aspectRatio="square"
                  label="Team Photo"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <SectionHeading
            badge="The Challenge"
            title="Understanding the Problem"
            description="Before we built our solution, we deeply understood the challenges faced by the deaf community."
          />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border group-hover:border-red-500/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Problem</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Communication barriers create significant challenges for the deaf and 
                  hard-of-hearing community in education, employment, and daily life.
                </p>
                <ul className="space-y-4">
                  {problemPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border group-hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Solution</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  HandsOn Communicator provides real-time, AI-powered translation that 
                  makes communication accessible, affordable, and seamless.
                </p>
                <ul className="space-y-4">
                  {solutionPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="section-container">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="These core principles guide everything we do at HandsOn Communicator."
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border group-hover:border-primary/30 transition-all text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Our Team"
            title="Meet the Innovators"
            description="A passionate team dedicated to making communication accessible for everyone."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 mix-blend-overlay z-10" />
              {/* Replace with: <img src="/team-group.jpg" alt="Our Full Team" className="w-full h-full object-cover" /> */}
              <ImagePlaceholder
                aspectRatio="wide"
                label="Team Group Photo"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;