'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaTerminal, FaPython, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaShieldAlt } from 'react-icons/fa';

interface Command {
  input: string;
  output: string;
  timestamp: Date;
  status: 'success' | 'error' | 'processing';
}

const AVAILABLE_COMMANDS = [
  'about.py',
  'skills.py',
  'experience.py',
  'projects.py',
  'certifications.py',
  'education.py',
  'contact.py',
  'social.py',
  'help',
  'clear'
] as const;

const PythonIDE: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = async (cmd: string) => {
    setIsProcessing(true);
    const newCommand: Command = {
      input: cmd,
      output: '',
      timestamp: new Date(),
      status: 'processing'
    };

    try {
      // Process different commands
      switch (cmd.toLowerCase()) {
        case 'about.py':
          newCommand.output = `Name: Kartik Tripathi
Role: Python Developer & Cybersecurity Engineer
Location: Chennai, India
Experience: 1+ years in Python development and cybersecurity
Skills: Python, Django, Flask, Security Testing, Network Security
Education: B.Tech in Computer Science and Engineering with specialization in Cybersecurity from SRM Institute of Science and Technology.
Languages: English, Hindi

Type 'skills.py' to see detailed skills
Type 'experience.py' to see work history`;
          newCommand.status = 'success';
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
          newCommand.status = 'success';
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
          newCommand.status = 'success';
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
          newCommand.status = 'success';
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
          newCommand.status = 'success';
          break;

        case 'education.py':
          newCommand.output = `Education:

1. Bachelor's in Computer Science
   University: SRM Institute of Science and Technology
   Year: 2024
   Specialization: Cybersecurity

Type 'contact.py' to get in touch`;
          newCommand.status = 'success';
          break;

        case 'contact.py':
          newCommand.output = `Contact Information:

Email: kartiktripathi.1100@gmail.com
Phone: +91-7380335664
Location: Chennai, India

Social Media:
- GitHub: https://github.com/kaarrtik1100
- LinkedIn: https://www.linkedin.com/in/kartiktripathi-

Available for:
- Full-time positions
- Contract work
- Security consulting
- Technical mentoring

Type 'social.py' to connect on social media`;
          newCommand.status = 'success';
          break;

        case 'social.py':
          newCommand.output = `Social Media Links:

GitHub: https://github.com/kaarrtik1100
LinkedIn: https://www.linkedin.com/in/kartiktripathi-


Type 'help' to see all available commands`;
          newCommand.status = 'success';
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
          newCommand.status = 'success';
          break;

        case 'clear':
          setCommands([]);
          setIsProcessing(false);
          return;

        default:
          newCommand.output = `Command not found: ${cmd}
Type 'help' to see available commands.`;
          newCommand.status = 'error';
      }

      // Add command to history
      setCommandHistory((prev: string[]) => [cmd, ...prev]);
      setHistoryIndex(-1);
    } catch (error) {
      newCommand.output = `Error executing command: ${error instanceof Error ? error.message : 'Unknown error'}`;
      newCommand.status = 'error';
    }

    setCommands((prev: Command[]) => [...prev, newCommand]);
    setIsProcessing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      handleCommand(input.trim());
      setInput('');
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    // Update suggestions based on input
    if (value.trim()) {
      const filtered = AVAILABLE_COMMANDS.filter(cmd => 
        cmd.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
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
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <span className="text-white">{cmd.input}</span>
              {cmd.status === 'processing' && (
                <span className="text-yellow-400 animate-pulse">...</span>
              )}
            </div>
            <div className={`mt-2 whitespace-pre-wrap ${
              cmd.status === 'error' ? 'text-red-400' : 'text-gray-300'
            }`}>
              {cmd.output}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono"
            placeholder="Type a command..."
          />
          {isProcessing && (
            <div className="text-yellow-400 animate-pulse">Processing...</div>
          )}
        </div>

        {suggestions.length > 0 && (
          <div className="absolute bottom-full left-0 w-full bg-black/80 rounded-lg p-2 mb-2">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="text-gray-300 hover:bg-blue-500/20 cursor-pointer p-1 rounded"
                onClick={() => {
                  setInput(suggestion);
                  setSuggestions([]);
                  inputRef.current?.focus();
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default PythonIDE;