import { 
  SiPython, SiCplusplus, SiJavascript, SiGnubash, 
  SiReact, SiTailwindcss, SiHtml5, SiNodedotjs,
  SiLinux, SiGit, SiBurpsuite, SiWireshark
} from 'react-icons/si';
import { FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';
import { SiOwasp } from 'react-icons/si';

export const personalInfo = {
  name: "Sumit Sulabh",
  role: "A Full-Stack Developer with a strong interest in Cyber Security",
  summary: "Focused on building secure, scalable applications with clean code and effective problem-solving",
  email: "sulabhsumit8@gmail.com",
  socials: {
    github: "https://github.com/sumitsulabh23",
    linkedin: "https://www.linkedin.com/in/sumit-sulabh/",
    leetcode: "https://leetcode.com/u/sumitsulabh/",
    instagram: "https://instagram.com/"
  },
  metrics: [
    { label: "YEARS CODING", value: "2+" },
    { label: "AUTOMATION COVERAGE", value: "95%" },
    { label: "PARALLEL TEST RUNS", value: "20+" },
    { label: "CGPA — LPU", value: "6.5" }
  ]
};

export const aboutMe = {
  intro: "I’m Sumit Sulabh, a Computer Science and Engineering student at Lovely Professional University, Punjab, with a strong interest in building scalable full-stack applications and automation-driven solutions.",
  background: "My experience includes working with the MERN stack (MongoDB, Express.js, React, Node.js) to develop dynamic and responsive web applications. I enjoy building end-to-end solutions, from designing intuitive user interfaces in React to developing robust backend services and APIs.",
  passion: "Beyond development, I’ve explored Cyber Security and Ethical Hacking through hands-on workshops using Kali Linux, and earned certifications in Generative AI. I bring a collaborative mindset, leadership ability, and a constant drive to improve and learn."
};

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
    ]
  },
  {
    category: "Web Tech",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ]
  },
  {
    category: "Cyber Security",
    items: [
      { name: "Pen Testing", Icon: FaShieldAlt, color: "#FF0000" },
      { name: "OWASP", Icon: SiOwasp, color: "#3776AB" },
      { name: "Cryptography", Icon: FaLock, color: "#F7931A" },
      { name: "Network Security", Icon: FaNetworkWired, color: "#00AEEF" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Burp Suite", Icon: SiBurpsuite, color: "#FF6633" },
      { name: "Wireshark", Icon: SiWireshark, color: "#1679A7" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Phishing Email Analyzer",
    description: "A specialized web-based tool for analyzing potential phishing emails, detecting malicious links, and identifying security threats.",
    image: "/assets/projects/phishing-analyzer.png",
    techStack: ["React", "Security APIs", "Vite", "Tailwind CSS"],
    liveDemo: "https://phishing-email-analyzer-web-git-main-vingok38-6851s-projects.vercel.app/",
    github: "https://github.com/sumitsulabh"
  },
  {
    id: 2,
    title: "BookMyDoc",
    description: "A comprehensive medical appointment booking system with a focus on ease of use and secure patient-doctor interactions.",
    image: "/assets/projects/bookmydoc.png",
    techStack: ["React", "Firebase", "Tailwind CSS", "Vite"],
    liveDemo: "https://bookmydoc-woad.vercel.app/",
    github: "https://github.com/sumitsulabh"
  },
  {
    id: 3,
    title: "CraveCart",
    description: "A premium food delivery platform designed for high performance and a seamless user experience, featuring real-time restaurant discovery.",
    image: "/assets/projects/cravecart.png",
    techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    liveDemo: "https://cravecart-rose.vercel.app/",
    github: "https://github.com/sumitsulabh"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    image: "/assets/certificates/responsive.jpg"
  },
  {
    id: 2,
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    image: "/assets/certificates/prompt.jpg"
  },
  {
    id: 3,
    title: "Computational Theory",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    image: "/assets/certificates/computational.jpg"
  },
  {
    id: 4,
    title: "Social Networks",
    issuer: "NPTEL (IIT Madras)",
    date: "Jan-Apr 2025",
    image: "/assets/certificates/social.jpg"
  },
  {
    id: 5,
    title: "Data Structures Algorithms",
    issuer: "CipherSchools",
    date: "July 2025",
    image: "/assets/certificates/dsa.jpg"
  },
  {
    id: 6,
    title: "Master Generative AI",
    issuer: "Udemy",
    date: "Aug 2025",
    image: "/assets/certificates/master-genai.jpg"
  },
  {
    id: 7,
    title: "Build Generative AI Apps",
    issuer: "Udemy",
    date: "Aug 2025",
    image: "/assets/certificates/build-genai-apps.jpg"
  },
  {
    id: 8,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "Sep 2024",
    image: "/assets/certificates/bits-bytes-networking.jpg"
  },
  {
    id: 9,
    title: "Interpersonal Communication for Engineering Leaders",
    issuer: "Rice University (Coursera)",
    date: "Mar 2026",
    image: "/assets/certificates/interpersonal-communication.jpg"
  },
  {
    id: 10,
    title: "Master C++ Programming",
    issuer: "Udemy",
    date: "Nov 2025",
    image: "/assets/certificates/master-cpp.jpg"
  },
  {
    id: 11,
    title: "Packet Switching Networks and Algorithms",
    issuer: "University of Colorado (Coursera)",
    date: "Oct 2024",
    image: "/assets/certificates/packet-switching.jpg"
  },
  {
    id: 12,
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM (Coursera)",
    date: "Sep 2024",
    image: "/assets/certificates/hardware-os.jpg"
  },
  {
    id: 13,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University of Colorado (Coursera)",
    date: "Oct 2024",
    image: "/assets/certificates/p2p-protocols.jpg"
  },
  {
    id: 14,
    title: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado (Coursera)",
    date: "Oct 2024",
    image: "/assets/certificates/tcp-ip.jpg"
  },
  {
    id: 15,
    title: "Oracle Certified Foundations Associate (AI Foundations)",
    issuer: "Oracle University",
    date: "Sep 2025",
    image: "/assets/certificates/oracle-ai-foundations.jpg"
  }
];

export const achievements = [
  {
    title: "DSA Summer Training",
    description: "Completed intensive training in Data Structures and Algorithms, mastering complex problem-solving techniques.",
    icon: "HiOutlineAcademicCap",
    date: "Summer 2024"
  },
  {
    title: "LeetCode Milestone",
    description: "Successfully solved 150+ challenges on LeetCode, demonstrating strong algorithmic thinking and coding proficiency.",
    icon: "SiLeetcode",
    date: "Ongoing"
  },
  {
    title: "24-Hour CTF Hackathon",
    description: "Participated in an intensive 24-hour Capture The Flag competition, solving complex security challenges and vulnerability exploits.",
    icon: "FaShieldAlt",
    date: "2024"
  }
];
