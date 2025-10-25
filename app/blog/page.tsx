"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 WhatsApp Marketing Strategies That Actually Work in India",
      excerpt: "Discover proven WhatsApp marketing strategies that Indian businesses are using to boost customer engagement and increase sales.",
      category: "WhatsApp Marketing",
      readTime: "5 min read",
      date: "2024-01-15",
      slug: "whatsapp-marketing-strategies-india"
    },
    {
      title: "How to Improve Customer Retention in Andhra Pradesh Businesses",
      excerpt: "Learn effective customer retention strategies specifically designed for businesses in Andhra Pradesh, including local market insights.",
      category: "Customer Retention",
      readTime: "7 min read", 
      date: "2024-01-10",
      slug: "customer-retention-andhra-pradesh"
    },
    {
      title: "AI-Powered Customer Engagement: The Future of Indian Business",
      excerpt: "Explore how AI is revolutionizing customer engagement in India and why businesses in Telangana and Bengaluru are adopting these technologies.",
      category: "AI & Automation",
      readTime: "6 min read",
      date: "2024-01-05",
      slug: "ai-customer-engagement-india"
    },
    {
      title: "Marketing Automation for Healthcare Clinics in India",
      excerpt: "Complete guide to marketing automation for dental clinics, dermatology centers, and healthcare providers across India.",
      category: "Healthcare Marketing",
      readTime: "8 min read",
      date: "2024-01-01",
      slug: "healthcare-marketing-automation-india"
    },
    {
      title: "WhatsApp Business API: Complete Setup Guide for Indian Businesses",
      excerpt: "Step-by-step guide to setting up WhatsApp Business API for businesses in Bengaluru, Hyderabad, and other Indian cities.",
      category: "Technical Guide",
      readTime: "10 min read",
      date: "2023-12-28",
      slug: "whatsapp-business-api-setup-india"
    },
    {
      title: "Customer Data Management: Best Practices for Indian Businesses",
      excerpt: "Learn how to effectively manage customer data while complying with Indian regulations and improving engagement.",
      category: "Data Management",
      readTime: "6 min read",
      date: "2023-12-25",
      slug: "customer-data-management-india"
    }
  ];

  const categories = [
    "All",
    "WhatsApp Marketing", 
    "Customer Retention",
    "AI & Automation",
    "Healthcare Marketing",
    "Technical Guide",
    "Data Management"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tribly Blog",
    "description": "Expert insights on customer engagement, WhatsApp marketing, and business growth in India",
    "url": "https://tribly.ai/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Tribly",
      "url": "https://tribly.ai"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Tribly Team"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Tribly"
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f7f1ff] via-[#f7f1ff] to-[#ffffff] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#9747ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#862ef8]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[900px] mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8">
              <span className="text-[#9747ff] font-semibold text-sm">Tribly Blog</span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6">
              Customer Engagement
              <span className="text-[#9747ff]"> Insights</span>
            </h1>

            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
              Expert insights on WhatsApp marketing, customer retention, AI automation, and business growth strategies for Indian businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  category === "All" 
                    ? "bg-[#9747ff] text-white" 
                    : "bg-[#f7f1ff] text-[#9747ff] hover:bg-[#9747ff] hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[24px] p-8 border border-[#9747ff]/20 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <span className="bg-[#9747ff]/10 text-[#9747ff] px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-[24px] font-semibold text-black mb-4 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-[#9747ff] font-medium hover:text-[#862ef8] transition-colors"
                  >
                    Read More
                    <Image alt="Arrow" src={imgFrame} width={16} height={16} />
                  </motion.button>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#f7f1ff]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-[20px] md:text-[24px] mb-10 text-gray-700">
              Get expert tips on customer engagement, WhatsApp marketing, and business growth delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-[#9747ff]/20 focus:outline-none focus:border-[#9747ff]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
