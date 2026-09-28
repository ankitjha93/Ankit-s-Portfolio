import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../constants.js";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_buk8qo9", // Your EmailJS Service ID
        "template_nm0vso5", // Your EmailJS Template ID
        form.current,
        "tj7ZCWjw8A6nc_z5w" // Your EmailJS Public Key
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">GET IN TOUCH</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Have an exciting project, career opportunity, or idea? Let's connect and build something extraordinary!
        </p>
      </div>

      {/* Responsive Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info & Social Hub */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Status Card */}
          <div className="bg-gradient-to-br from-[#120e29]/95 to-[#1c143d]/90 p-6 rounded-2xl border border-purple-500/30 shadow-xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire & Internships</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's talk!</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I am actively seeking Full-Stack Developer, Frontend Engineer, and Backend roles. Feel free to reach out via the form or through my direct contacts.
            </p>

            {/* Direct Contact Items */}
            <div className="space-y-4">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c091f] border border-purple-500/20 group hover:border-purple-400 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-purple-900/40 text-purple-400 shrink-0">
                    <FiMail className="text-lg" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white text-sm font-medium hover:text-purple-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  title="Copy Email"
                  className="p-2 text-gray-400 hover:text-purple-300 hover:bg-purple-900/30 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? <FiCheck className="text-emerald-400 text-base" /> : <FiCopy className="text-base" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0c091f] border border-purple-500/20">
                <div className="p-2.5 rounded-lg bg-pink-900/40 text-pink-400 shrink-0">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-white text-sm font-medium hover:text-pink-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0c091f] border border-purple-500/20">
                <div className="p-2.5 rounded-lg bg-indigo-900/40 text-indigo-400 shrink-0">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Location</div>
                  <span className="text-white text-sm font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="mt-6 pt-5 border-t border-purple-500/20">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Social & Developer Profiles
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0c091f] border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 hover:scale-110 rounded-xl transition-all shadow-md"
                  title="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0c091f] border border-purple-500/30 text-gray-300 hover:text-[#0a66c2] hover:border-blue-400 hover:scale-110 rounded-xl transition-all shadow-md"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0c091f] border border-purple-500/30 text-gray-300 hover:text-amber-400 hover:border-amber-400 hover:scale-110 rounded-xl transition-all shadow-md"
                  title="LeetCode"
                >
                  <SiLeetcode className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#0f0c29]/95 to-[#19133b]/95 p-7 sm:p-9 rounded-2xl shadow-2xl border border-purple-500/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              Send a Direct Message <span className="ml-1">🚀</span>
            </h3>
            <span className="text-xs text-purple-400 font-medium">Quick Response</span>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Your Email <span className="text-pink-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="name@example.com"
                required
                className="w-full p-3.5 rounded-xl bg-[#0c091f] text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Your Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#0c091f] text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Subject <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration / Job Inquiry"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#0c091f] text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Your Message <span className="text-pink-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Write your message or inquiry here..."
                rows="5"
                required
                className="w-full p-3.5 rounded-xl bg-[#0c091f] text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-white text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                isSending
                  ? "bg-purple-800 opacity-70 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:shadow-purple-500/40 hover:scale-[1.01]"
              }`}
            >
              {isSending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="text-lg" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;