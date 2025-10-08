import React, { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Loader } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-justify">
              Whether you have a project idea, a question, or just want to chat
              tech—my inbox is always open! I'm currently open to freelance
              work, internships, and collaborative opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Email</p>
                  <a
                    href="mailto:gillianrpunzal@gmail.com"
                    className="text-gray-400 break-words hover:text-white transition-colors"
                  >
                    gillianrpunzal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MessageCircle size={24} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Messenger</p>
                  <a
                    href="https://m.me/gillianreyespunzal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    m.me/gillianreyespunzal
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/PunzalGillian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={24} className="text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/gillianrpunzal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Right Contact Form - Using Formspree */}
          <div className="glass-card p-8">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
