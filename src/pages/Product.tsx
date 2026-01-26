// ============================================
// PRODUCT PAGE - COMPLETE
// Create new file: src/pages/Product.tsx
// ============================================

import { motion } from "framer-motion";
import { 
  Check, X, Zap, Shield, Users, Globe, Sparkles, ArrowRight, 
  Hand, Brain, MessageSquare, Wifi, Battery, Smartphone, 
  Headphones, Settings, Cloud, Lock, Award, TrendingUp
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const pricingPlans = [
  {
    name: "Personal",
    price: "$99",
    period: "/month",
    description: "Perfect for individuals starting their communication journey",
    features: [
      "Real-time sign language translation",
      "Up to 5 hours of usage per day",
      "Basic gesture library (500+ signs)",
      "Mobile app access",
      "Email support",
      "1 connected device",
      "Offline mode (limited)",
      "Community access",
    ],
    notIncluded: [
      "Advanced AI customization",
      "Priority support",
      "Custom gesture training",
      "API access",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    price: "$249",
    period: "/month",
    description: "For professionals and small teams requiring advanced features",
    features: [
      "Everything in Personal",
      "Unlimited daily usage",
      "Advanced gesture library (2000+ signs)",
      "Multi-language support (15+ languages)",
      "Priority email & chat support",
      "Up to 5 connected devices",
      "Full offline mode",
      "Custom gesture training",
      "Advanced analytics",
      "Team collaboration tools",
    ],
    notIncluded: [
      "Dedicated account manager",
      "API access",
      "White-label options",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for organizations and institutions",
    features: [
      "Everything in Professional",
      "Unlimited devices",
      "Custom AI model training",
      "Dedicated account manager",
      "24/7 priority support",
      "API access with documentation",
      "White-label options",
      "Custom integrations",
      "On-premise deployment option",
      "SLA guarantee (99.9% uptime)",
      "Security & compliance certifications",
      "Training & onboarding sessions",
    ],
    notIncluded: [],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
];

const productComponents = [
  {
    icon: Hand,
    name: "Smart Glove",
    description: "Advanced gesture-sensing glove with precision sensors",
    features: [
      "15+ high-precision sensors",
      "Ergonomic, breathable design",
      "Washable fabric",
      "Universal sizing (S, M, L, XL)",
      "USB-C charging",
      "12-hour battery life",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    name: "AI Processing Unit",
    description: "Compact neural processing device for real-time translation",
    features: [
      "Edge AI processing",
      "Sub-100ms latency",
      "Offline capability",
      "Cloud sync option",
      "Automatic updates",
      "Encrypted data storage",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    name: "Mobile App",
    description: "Intuitive companion app for iOS and Android",
    features: [
      "Real-time translation display",
      "Voice output option",
      "History & favorites",
      "Custom gesture library",
      "Progress tracking",
      "Multi-language support",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    name: "Cloud Platform",
    description: "Secure cloud infrastructure for seamless experience",
    features: [
      "Cross-device sync",
      "Backup & restore",
      "Analytics dashboard",
      "API access (Pro+)",
      "99.9% uptime",
      "Enterprise-grade security",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const specifications = [
  {
    category: "Hardware",
    items: [
      { label: "Sensors", value: "15x High-precision flex sensors" },
      { label: "Connectivity", value: "Bluetooth 5.2, USB-C" },
      { label: "Battery", value: "1200mAh Li-ion, 12h runtime" },
      { label: "Charging", value: "USB-C, 2h full charge" },
      { label: "Weight", value: "85g per glove" },
      { label: "Compatibility", value: "iOS 14+, Android 10+" },
    ],
  },
  {
    category: "Software",
    items: [
      { label: "AI Model", value: "Custom neural network" },
      { label: "Accuracy", value: "98% gesture recognition" },
      { label: "Latency", value: "< 100ms real-time" },
      { label: "Languages", value: "15+ sign languages" },
      { label: "Gesture Library", value: "2000+ signs (expandable)" },
      { label: "Updates", value: "OTA automatic updates" },
    ],
  },
];

const faqs = [
  {
    question: "How accurate is the sign language recognition?",
    answer: "Our AI achieves 98% accuracy across 15+ sign languages, continuously improving through machine learning and user feedback.",
  },
  {
    question: "Can I use HandsOn Communicator offline?",
    answer: "Yes! Professional and Enterprise plans include full offline mode. Personal plan has limited offline capability for basic gestures.",
  },
  {
    question: "How long does the battery last?",
    answer: "The smart glove battery lasts up to 12 hours on a single charge with typical usage. Charging takes approximately 2 hours via USB-C.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for Personal and Professional plans. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your subscription at any time. Your service will continue until the end of your billing period.",
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes, we provide special pricing for students, educators, and educational institutions. Contact our sales team for details.",
  },
];

const Product = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 border border-primary/20 text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Product & Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Everything You Need to <span className="gradient-text">Communicate</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Choose the perfect plan for your needs. All plans include our cutting-edge 
              AI-powered sign language translation technology.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 p-1.5 bg-secondary rounded-full border border-border"
            >
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${
                  billingCycle === "annual"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all border-2 h-full flex flex-col ${
                  plan.popular ? 'border-primary' : 'border-border hover:border-primary/30'
                }`}>
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {index === 0 && <Users className="w-7 h-7 text-white" />}
                      {index === 1 && <Zap className="w-7 h-7 text-white" />}
                      {index === 2 && <Award className="w-7 h-7 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    {billingCycle === "annual" && plan.price !== "Custom" && (
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Save ${parseInt(plan.price.replace('$', '')) * 12 * 0.2}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full h-12 text-base shadow-lg hover:shadow-xl group/btn ${
                      plan.popular ? 'bg-gradient-to-r from-primary to-accent' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Components Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <SectionHeading
            badge="Product Components"
            title="What's in the Box"
            description="A complete ecosystem designed to work seamlessly together."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {productComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all border border-border group-hover:border-primary/30">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${component.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <component.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {component.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{component.description}</p>
                      <ul className="space-y-2">
                        {component.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="section-container">
          <SectionHeading
            badge="Technical Specs"
            title="Product Specifications"
            description="Detailed technical information about HandsOn Communicator."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-card border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  {spec.category}
                </h3>
                <div className="space-y-4">
                  {spec.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 pb-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                      <span className="text-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-foreground font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Join thousands of users transforming communication. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl" asChild>
                <Link to="/contact">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm" 
                asChild
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;