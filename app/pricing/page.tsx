"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ExpertCallModal from "@/components/ExpertCallModal";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState(500);

  // Calculate pricing based on customer count
  const calculatePricing = (customerCount: number) => {
    const baseFee = 2999; // Monthly platform fee
    const perCustomerCost = 8; // ₹8 per customer per month
    const totalCustomerCost = customerCount * perCustomerCost;
    const totalMonthly = baseFee + totalCustomerCost;
    const costPerCustomer = totalMonthly / customerCount;
    
    return {
      baseFee,
      perCustomerCost,
      totalCustomerCost,
      totalMonthly,
      costPerCustomer: costPerCustomer.toFixed(2),
    };
  };

  const pricing = calculatePricing(customers);

  const features = [
    {
      title: "Unlimited Campaigns",
      description: "Create and run as many automated campaigns as you need",
      icon: "🚀"
    },
    {
      title: "WhatsApp & SMS",
      description: "Engage customers on their preferred channels",
      icon: "💬"
    },
    {
      title: "Customer Data Hub",
      description: "Centralized database for all customer information",
      icon: "📊"
    },
    {
      title: "AI-Powered Automation",
      description: "Smart automation that learns and improves over time",
      icon: "🤖"
    },
    {
      title: "Analytics & Insights",
      description: "Track performance and optimize your campaigns",
      icon: "📈"
    },
    {
      title: "Priority Support",
      description: "Get help when you need it with dedicated support",
      icon: "🎯"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f1ff] to-[#ffffff]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#9747ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#862ef8]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative py-20">
          <div className="text-center max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8"
            >
              <span className="text-[#9747ff] font-semibold text-sm">Simple & Transparent Pricing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6"
            >
              Pay Only for What You{" "}
              <span className="text-[#9747ff]">Use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10"
            >
              No hidden fees. No long-term contracts. Just straightforward pricing that scales with your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#f7f1ff] to-[#ffffff] rounded-[40px] p-12"
          >
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-[48px] font-semibold text-center mb-4 text-black">
                Pricing Calculator
              </h2>
              <p className="text-[20px] text-gray-700 text-center mb-12">
                Adjust the slider to see how affordable Tribly is for your business
              </p>

              {/* Customer Count Slider */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[18px] font-medium text-black">Number of Customers</label>
                  <div className="bg-[#9747ff]/10 backdrop-blur-sm rounded-full px-6 py-3">
                    <span className="text-[24px] font-semibold text-[#9747ff]">{customers.toLocaleString()}</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={customers}
                  onChange={(e) => setCustomers(parseInt(e.target.value))}
                  className="w-full h-3 bg-[#9747ff]/20 rounded-lg appearance-none cursor-pointer accent-[#9747ff]"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white backdrop-blur-sm rounded-[24px] p-8 border border-[#9747ff]/20">
                  <div className="text-[16px] text-gray-600 mb-2">Base Platform Fee</div>
                  <div className="text-[40px] font-semibold text-[#9747ff]">₹{pricing.baseFee.toLocaleString()}</div>
                  <div className="text-[14px] text-gray-500">per month</div>
                </div>

                <div className="bg-white backdrop-blur-sm rounded-[24px] p-8 border border-[#9747ff]/20">
                  <div className="text-[16px] text-gray-600 mb-2">Per Customer Cost</div>
                  <div className="text-[40px] font-semibold text-[#9747ff]">₹{pricing.perCustomerCost}</div>
                  <div className="text-[14px] text-gray-500">per customer per month</div>
                </div>
              </div>

              {/* Total Cost */}
              <div className="bg-white rounded-[32px] p-10 text-center">
                <div className="text-[18px] text-gray-600 mb-3">Your Monthly Total</div>
                <div className="text-[64px] font-bold text-[#9747ff] mb-2">
                  ₹{pricing.totalMonthly.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-[20px] text-gray-600">
                    Only <span className="font-semibold text-[#9747ff]">₹{pricing.costPerCustomer}</span> per customer
                  </div>
                  {parseFloat(pricing.costPerCustomer) < 10 && (
                    <div className="bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
                      Under ₹10 per customer! 🎉
                    </div>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#9747ff] text-white text-[20px] font-semibold px-12 py-4 rounded-full hover:bg-[#862ef8] transition-colors"
                >
                  Get Started Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Everything Included
            </h2>
            <p className="text-[20px] text-gray-700">
              No tiers, no upsells. Get access to all features from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[32px] p-8 border border-[#9747ff]/20"
              >
                <div className="text-[48px] mb-4">{feature.icon}</div>
                <h3 className="text-[24px] font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How is a 'customer' counted?",
                a: "A customer is counted as any unique contact in your database who receives at least one communication from Tribly during the month. Inactive contacts are not charged."
              },
              {
                q: "Are there any setup fees?",
                a: "No setup fees. No hidden costs. You only pay the ₹2,999 monthly platform fee plus ₹8 per active customer based on your usage each month."
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely! We don't believe in long-term contracts. You can cancel anytime with no penalties or cancellation fees."
              },
              {
                q: "What happens if I exceed my estimated customer count?",
                a: "Your billing automatically adjusts based on your actual customer count. You'll only pay for what you use - ₹8 per customer per month."
              },
              {
                q: "Do you offer discounts for larger businesses?",
                a: "Yes! For businesses with over 5,000 customers, we offer custom enterprise pricing. Contact our team to discuss volume discounts."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, net banking, and can set up automated billing for your convenience."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#f7f1ff] rounded-[24px] p-8 border border-[#9747ff]/10"
              >
                <h3 className="text-[20px] font-semibold text-black mb-3">
                  {faq.q}
                </h3>
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#9747ff] to-[#862ef8]">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] md:text-[56px] font-semibold text-white leading-tight mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-[20px] text-white/80 leading-relaxed mb-10">
              Start with Tribly today and pay only for what you use. No surprises, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#9747ff] text-[20px] font-semibold px-12 py-4 rounded-full transition-all"
              >
                Talk to an Expert
              </motion.button>
              <a href="https://calendly.com/connect-tribly/new-meeting" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white text-[20px] font-semibold px-12 py-4 rounded-full hover:bg-white/10 transition-all"
                >
                  Book a Demo
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[164px]" />

      <Footer />
      
      {/* Expert Call Modal */}
      <ExpertCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

