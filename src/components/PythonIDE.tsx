'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaTerminal, FaPython, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaShieldAlt } from 'react-icons/fa';

interface Command {
  input: string;
  output: string;
  timestamp: Date;
}

const PythonIDE = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = async (cmd: string) => {
    setIsProcessing(true);
    const newCommand: Command = {
      input: cmd,
      output: '',
      timestamp: new Date(),
    };

    // Process different commands
    switch (cmd.toLowerCase()) {
      case 'about.py':
        newCommand.output = `Name: Kartik Tripathi
Role: Python Developer & Cybersecurity Engineer
Location: Your Location
Experience: 5+ years in Python development and cybersecurity
Skills: Python, Django, Flask, Security Testing, Network Security
Education: Your Education Details
Languages: English, Hindi

Type 'skills.py' to see detailed skills
Type 'experience.py' to see work history`;
        break;

      case 'skills.py':
        newCommand.output = `Technical Skills:
- Python Development
  * Django & Flask
  * REST APIs
  * Automation
  * Data Analysis
  * Machine Learning Basics

- Cybersecurity
  * Penetration Testing
  * Network Security
  * Security Architecture
  * Vulnerability Assessment
  * Security Auditing

- DevOps
  * CI/CD
  * Docker
  * Cloud Platforms
  * Git
  * Linux Administration

Type 'certifications.py' to see professional certifications`;
        break;

      case 'experience.py':
        newCommand.output = `Work Experience:

1. Senior Python Developer (2021 - Present)
   Company: Tech Company Name
   Key Achievements:
   - Led development of secure API endpoints
   - Implemented automated security testing
   - Mentored junior developers
   - Reduced security vulnerabilities by 40%

2. Cybersecurity Engineer (2019 - 2021)
   Company: Security Firm Name
   Key Achievements:
   - Conducted 50+ security assessments
   - Developed custom security tools
   - Implemented security policies
   - Reduced incident response time by 60%

Type 'projects.py' to see detailed project information`;
        break;

      case 'projects.py':
        newCommand.output = `Featured Projects:

1. Secure API Gateway
   Tech Stack: Python, Django, Redis
   Features:
   - Rate limiting
   - JWT authentication
   - Request validation
   - Real-time monitoring
   GitHub: github.com/yourusername/project

2. Network Monitoring Tool
   Tech Stack: Python, Scapy, Elasticsearch
   Features:
   - Real-time traffic analysis
   - Anomaly detection
   - Automated alerts
   - Custom dashboards
   GitHub: github.com/yourusername/project

3. Security Automation Framework
   Tech Stack: Python, Docker, AWS
   Features:
   - Automated security testing
   - Vulnerability scanning
   - Compliance checking
   - Report generation
   GitHub: github.com/yourusername/project

Type 'contact.py' to get in touch`;
        break;

      case 'certifications.py':
        newCommand.output = `Professional Certifications:

1. Certified Information Systems Security Professional (CISSP)
   Issuer: (ISC)²
   Year: 2022

2. AWS Certified Security - Specialty
   Issuer: Amazon Web Services
   Year: 2021

3. Certified Ethical Hacker (CEH)
   Issuer: EC-Council
   Year: 2020

4. Python Developer Certification
   Issuer: Python Institute
   Year: 2019

Type 'education.py' to see academic background`;
        break;

      case 'education.py':
        newCommand.output = `Education:

1. Master's in Computer Science
   University: Your University
   Year: 2019
   Specialization: Cybersecurity

2. Bachelor's in Computer Science
   University: Your University
   Year: 2017
   Specialization: Software Engineering

Type 'contact.py' to get in touch`;
        break;

      case 'contact.py':
        newCommand.output = `Contact Information:

Email: your.email@example.com
Phone: +1 (234) 567-890
Location: Your Location, City, Country

Social Media:
- GitHub: github.com/yourusername
- LinkedIn: linkedin.com/in/yourusername

Available for:
- Full-time positions
- Contract work
- Security consulting
- Technical mentoring

Type 'social.py' to connect on social media`;
        break;

      case 'social.py':
        newCommand.output = `Social Media Links:

GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername
Twitter: twitter.com/yourusername
Medium: medium.com/@yourusername

Type 'help' to see all available commands`;
        break;

      case 'help':
        newCommand.output = `Available commands:
- about.py: Display personal information
- skills.py: Show technical skills
- experience.py: Show work history
- projects.py: List featured projects
- certifications.py: Show professional certifications
- education.py: Show academic background
- contact.py: Display contact information
- social.py: Show social media links
- help: Show this help message
- clear: Clear the terminal

Tip: Try running 'about.py' to start!`;
        break;

      case 'clear':
        setCommands([]);
        setIsProcessing(false);
        return;

      default:
        newCommand.output = `Command not found: ${cmd}
Type 'help' to see available commands.`;
    }

    setCommands(prev => [...prev, newCommand]);
    setIsProcessing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      handleCommand(input.trim());
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        <FaPython className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold">Python Terminal</h3>
      </div>
      
      <div 
        ref={terminalRef}
        className="bg-black/50 rounded-lg p-4 h-[400px] overflow-y-auto font-mono text-sm mb-4"
      >
        <div className="text-green-400 mb-2">Welcome to Kartik's Python Terminal!</div>
        <div className="text-gray-400 mb-4">Type 'help' to see available commands.</div>
        
        {commands.map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-2 text-blue-400">
              <FaTerminal className="w-4 h-4" />
              <span>{cmd.input}</span>
            </div>
            <div className="mt-2 text-gray-300 whitespace-pre-wrap">
              {cmd.output}
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="text-yellow-400 animate-pulse">
            Processing command...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command (e.g., about.py)"
          className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white font-mono"
        />
        <button
          type="submit"
          disabled={isProcessing}
          className="px-4 py-2 bg-blue-500/50 text-white rounded-lg hover:bg-blue-600/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <FaPlay className="w-4 h-4" />
          Run
        </button>
      </form>
    </div>
  );
};

export default PythonIDE;