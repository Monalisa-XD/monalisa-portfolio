import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        console.error(
          "Web3Forms access key is missing. Set VITE_WEB3FORMS_ACCESS_KEY in your environment."
        );
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full" />

      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] bg-violet-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-[35%] w-[450px] h-[450px] bg-fuchsia-500/20 blur-[150px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#FF4FD8] to-[#B16CFF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,79,216,0.35)]">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Let's build something amazing together. Feel free to reach out for
            opportunities, collaborations, freelance projects, or simply to say
            hello.
          </p>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-[#FF4FD8] to-[#B16CFF] shadow-[0_0_30px_rgba(255,79,216,0.5)]" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Side */}
          <div>
            <p className="text-gray-300 text-lg leading-9 mb-10">
              I’m always open to discussing new opportunities,
              collaborations, freelance projects, or creative ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:monalishaj975@gmail.com"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-[#FF4FD8]/40 hover:shadow-[0_20px_60px_rgba(255,79,216,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>

                  <p className="text-gray-400 break-all">
                    monalishaj975@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/monalisa--jena"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaLinkedin />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">LinkedIn</h3>

                  <p className="text-gray-400">
                    Connect with me professionally
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Monalisa-XD"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 text-2xl">
                  <FaGithub />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">GitHub</h3>

                  <p className="text-gray-400">
                    View my projects & repositories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-6 sm:p-10 shadow-[0_20px_80px_rgba(139,92,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-50" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div>
                <label className="block text-gray-300 mb-3">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full bg-white/5 backdrop-blur-xl border rounded-2xl px-5 py-4 text-white outline-none transition-all duration-300 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                      : "border-white/10 focus:border-[#FF4FD8] focus:shadow-[0_0_25px_rgba(255,79,216,0.25)]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-3">
                  Your Email
                </label>

                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full bg-white/5 backdrop-blur-xl border rounded-2xl px-5 py-4 text-white outline-none transition-all duration-300 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                      : "border-white/10 focus:border-[#FF4FD8] focus:shadow-[0_0_25px_rgba(255,79,216,0.25)]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full bg-white/5 backdrop-blur-xl border rounded-2xl px-5 py-4 text-white outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                      : "border-white/10 focus:border-[#FF4FD8] focus:shadow-[0_0_25px_rgba(255,79,216,0.25)]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-[#FF4FD8] via-violet-500 to-[#B16CFF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_35px_rgba(255,79,216,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-center font-medium">
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;