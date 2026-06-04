"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contact Info
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "upasanapatilofficial@gmail.com",
      link: "mailto:upasanapatilofficial@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9529274810",
      link: "tel:+919529274810",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Mumbai, India",
      link: "#",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/upasana-patil",
      link: "https://linkedin.com/in/upasana-patil",
    },
  ];

  // Social Links
  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      link: "https://github.com/",
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      link: "https://linkedin.com/",
    },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("Sending message...");

    // EmailJS Credentials
    const serviceID = "service_ids3k8p";
    const templateID = "template_53q8p0b";
    const publicKey = "BcjOswRbxsBq-UDSC";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-16 md:py-20 overflow-hidden bg-[#090820]"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Get In Touch
            </span>
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have a question or want to work together? I’d love to hear from
            you!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          
          {/* Left Side */}
          <div className="space-y-5 md:space-y-6 order-2 md:order-1">
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6 text-white flex items-center gap-2">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-sm">
                  📬
                </span>

                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.label === "LinkedIn" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#7030EF]/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm text-white/40 group-hover:text-white/60 transition-colors">
                        {item.label}
                      </p>

                      <p className="text-sm md:text-base text-white/80 group-hover:text-white font-medium transition-colors break-words">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6 text-white flex items-center gap-2">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-sm">
                  🌐
                </span>

                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#7030EF]/30 hover:bg-white/10 transition-all duration-300 text-center group"
                  >
                    <span className="text-xl md:text-2xl block mb-1 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>

                    <span className="text-white/60 group-hover:text-white text-xs md:text-sm font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                <span className="text-white/80 text-xs md:text-sm font-medium">
                  Available for work
                </span>
              </div>

              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                I’m currently available for freelance work and full-time
                opportunities.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6 text-white flex items-center gap-2">
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-sm">
                ✉️
              </span>

              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all text-sm md:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all text-sm md:text-base"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all text-sm md:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all resize-none text-sm md:text-base"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] text-white py-3.5 md:py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-[#7030EF]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
              {statusMessage && (
                <div
                  className={`mt-4 p-3 md:p-4 rounded-xl text-center text-sm md:text-base ${
                    submitStatus === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : submitStatus === "error"
                      ? "bg-red-500/10 border border-red-500/30 text-red-400"
                      : "bg-white/5 border border-white/10 text-white/60"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-block max-w-full bg-white/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/10">
            <p className="text-white/40 text-xs md:text-sm break-words px-2">
              📬 Feel free to reach out anytime — I’ll get back to you within
              24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .animate-gradient {
              animation: gradient 3s ease infinite;
            }
          `,
        }}
      />
    </section>
  );
}
