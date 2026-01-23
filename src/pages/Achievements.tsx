
import { motion } from "framer-motion";
import { Trophy, Rocket, Users, Award, Star, Zap, Target, CheckCircle, Sparkles, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

const milestones = [
  {
    icon: Rocket,
    year: "2022",
    title: "Startup Founded",
    description: "HandsOn Communicator was founded with a mission to break communication barriers through innovative technology.",
    status: "completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    year: "2022",
    title: "Prototype Development",
    description: "Developed our first working prototype demonstrating real-time sign language recognition capabilities.",
    status: "completed",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    year: "2023",
    title: "Beta Testing",
    description: "Launched beta testing with 500+ users from the deaf community, gathering valuable feedback.",
    status: "completed",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    year: "2023",
    title: "Incubator Program",
    description: "Selected for a prestigious tech incubator, receiving mentorship and funding to accelerate development.",
    status: "completed",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Star,
    year: "2024",
    title: "Product Launch",
    description: "Official product launch with improved AI accuracy and expanded language support.",
    status: "completed",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    year: "2025",
    title: "Global Expansion",
    description: "Expanding to international markets with support for multiple sign language variants.",
    status: "in-progress",
    color: "from-indigo-500 to-purple-500",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Innovation Award 2023",
    organization: "Tech for Good Foundation",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Best Accessibility Solution",
    organization: "Assistive Technology Summit",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Startup of the Year",
    organization: "Social Impact Awards",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "FDA Recognition",
    organization: "Medical Device Certification",
    color: "from-green-500 to-emerald-500",
  },
];

const Achievements = () => {
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
              <Trophy className="w-4 h-4" />
              Our Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Milestones & <span className="gradient-text">Achievements</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              From a bold idea to a transformative product—explore our journey 
              of innovation and impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <SectionHeading
            badge="Timeline"
            title="Our Journey So Far"
            description="Key milestones that have shaped HandsOn Communicator's growth and impact."
          />

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 rounded-full" />
            
            {/* Timeline Line - Mobile */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-xl hover:scale-110 transition-transform group`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                    {milestone.status === "completed" && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border hover:border-primary/30 group">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-bold rounded-full mb-4 border border-primary/20">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                    {milestone.status === "in-progress" && (
                      <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </div>
                        In Progress
                      </div>
                    )}
                    {milestone.status === "completed" && (
                      <div className="inline-flex items-center gap-2 text-green-500 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <SectionHeading
            badge="Recognition"
            title="Awards & Accolades"
            description="Recognized by industry leaders for our commitment to accessibility and innovation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30 group-hover:-translate-y-2 text-center h-full">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <achievement.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.organization}
                  </p>
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact in Numbers
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Real results from our journey of innovation and dedication.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "3", label: "Years of Innovation", icon: Rocket },
              { value: "50K+", label: "Active Users", icon: Users },
              { value: "4", label: "Major Awards", icon: Trophy },
              { value: "98%", label: "User Satisfaction", icon: TrendingUp },
            ].map((stat, index) => (
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
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="section-container">
          <SectionHeading
            badge="Certifications"
            title="Certificates & Recognition"
            description="Official certifications and partnerships that validate our commitment to quality."
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {['Certificate 1', 'Certificate 2', 'Certificate 3'].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30">
                  {/* Replace with: <img src={`/certificate-${i + 1}.jpg`} alt={label} className="w-full h-full object-cover" /> */}
                  <ImagePlaceholder
                    aspectRatio="video"
                    label={label}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <p className="font-semibold text-lg">{label}</p>
                      <p className="text-sm text-white/80">Official Recognition</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;