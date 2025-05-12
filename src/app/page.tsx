'use client';

import { FaPython, FaShieldAlt, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PythonIDE from '@/components/PythonIDE';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Kartik Tripathi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Python Developer & Cybersecurity Engineer
            </h2>
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/yourusername" className="nav-link hover:text-blue-400">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="nav-link hover:text-blue-400">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Python IDE Section */}
        <section className="py-16">
          <h2 className="section-title">Interactive Terminal</h2>
          <div className="max-w-4xl mx-auto">
            <PythonIDE />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <h2 className="section-title">About Me</h2>
          <div className="max-w-3xl mx-auto text-center backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
            <p className="text-lg text-gray-300 mb-6">
              I am a passionate Python developer and cybersecurity engineer with expertise in building secure applications
              and implementing robust security measures. My focus is on creating efficient, scalable solutions while
              maintaining the highest standards of security.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <h2 className="section-title">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Senior Python Developer</h3>
                  <p className="text-gray-400">Tech Company Name</p>
                </div>
                <span className="text-gray-400">2021 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained secure API endpoints using Django REST framework</li>
                <li>Implemented automated security testing and vulnerability scanning</li>
                <li>Led a team of 5 developers in implementing security best practices</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Cybersecurity Engineer</h3>
                  <p className="text-gray-400">Security Firm Name</p>
                </div>
                <span className="text-gray-400">2019 - 2021</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Conducted penetration testing and security assessments</li>
                <li>Developed security tools and automation scripts in Python</li>
                <li>Implemented security policies and procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card backdrop-blur-sm bg-black/30">
              <FaPython className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Python Development</h3>
              <p className="text-gray-300">
                Expert in Python programming, web frameworks (Django, Flask), and automation scripts.
              </p>
            </div>
            <div className="card backdrop-blur-sm bg-black/30">
              <FaShieldAlt className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-300">
                Specialized in network security, penetration testing, and security architecture.
              </p>
            </div>
            <div className="card backdrop-blur-sm bg-black/30">
              <FaGithub className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">DevOps</h3>
              <p className="text-gray-300">
                Experience with CI/CD, containerization, and cloud platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card backdrop-blur-sm bg-black/30">
              <h3 className="text-xl font-bold mb-2">Secure API Gateway</h3>
              <p className="text-gray-300 mb-4">
                A Python-based API gateway with advanced security features and rate limiting.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-500/50 rounded-full text-sm">Security</span>
              </div>
              <a 
                href="https://github.com/yourusername/project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
            <div className="card backdrop-blur-sm bg-black/30">
              <h3 className="text-xl font-bold mb-2">Network Monitoring Tool</h3>
              <p className="text-gray-300 mb-4">
                Real-time network traffic analysis and security monitoring solution.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-red-500/50 rounded-full text-sm">Networking</span>
              </div>
              <a 
                href="https://github.com/yourusername/project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="w-6 h-6 text-blue-400" />
                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-400">
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhone className="w-6 h-6 text-blue-400" />
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Your Location, City, Country</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500/50 text-white px-8 py-3 rounded-lg hover:bg-blue-600/50 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
