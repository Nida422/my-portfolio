import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react"; 

const projects = [
  {
    id: 1,
    title: "Employee Management System with Code Collaboration",
    tech: "Python, Flask, HTML, CSS, JavaScript, Git/GitHub for collaboration",
    description:
      "Developed a web-based Employee Management System to automate HR operations, including employee data management, attendance tracking, and task assignments. Implemented real-time code collaboration features for team-based coding projects.",
    achievements: [
      "Reduced manual HR workload by automating employee data handling.",
      "Enabled multiple users to collaborate efficiently on coding tasks in real-time",
    ],
    videoUrl: "https://www.youtube.com/embed/LXDPCvwkwSk?si=_tsuyf3f_pyJ2T2G",
  },
  {
    id: 2,
    title: "Mental Wellness System",
    tech: "HTML, CSS, JavaScript, ReactJs",
    description:
      "Designed a Mental Wellness System to help users monitor and improve their mental health through mood tracking, guided exercises, and mindfulness activities.",
    achievements: [
      "Provided personalized recommendations to improve mental health.",
      "Integrated interactive exercises that enhanced user engagement.",
    ],
    videoUrl: "https://www.youtube.com/embed/KZi3c7rdquE?si=Y0OSSa97R1-w70gM",
  },
  {
    id: 3,
    title: "Website Blocker",
    tech: "Python, Flask, JavaScript, HTML, CSS.",
    description:
      "Developed a Website Blocker Chrome extension to help users focus and increase productivity by blocking distracting websites during work or study hours.",
    achievements: [
      "Customizable block lists with scheduling functionality.",
      "Improved user productivity by restricting access to distracting websites.",
    ],
    videoUrl: "https://www.youtube.com/embed/aSdTBnGkJqU?si=t3_yscAaYixMZ6lI",
  },
  {
    id: 4,
    title: "AI Trip Planner (Final Year Project)",
    tech: "Python, React, Flask, Tailwind, JavaScript.",
    description:
      "Developing an AI-powered Trip Planner that generates personalized travel itineraries based on user preferences, location data, and popular attractions. Integrates machine learning for optimized routing and recommendations.",
    achievements: [
      "AI-driven personalized recommendations for travelers.",
      "Dynamic itinerary planning based on user inputs and preferences.",
    ],
    videoUrl: "https://www.youtube.com/embed/GrvlKKd6Bbs?si=MEUETmB55Lbj8nmU",
  },
  {
    id: 5,
    title: "E-commerce Website",
    tech: "React, Node.js, Express, MongoDB, Stripe API",
    description:
      "Built a full-stack E-commerce Website featuring product listings, shopping cart, secure checkout, and payment integration using Stripe. Users can browse products, add to cart, and place orders seamlessly.",
    achievements: [
      "Implemented dynamic product filtering and search functionality.",
      "Integrated secure payment processing with Stripe API.",
      "Responsive design for mobile and desktop users.",
    ],
    videoUrl: "",
  },
   {
    id: 6,
    title: "Health Care Management System",
    tech: "HTML, CSS, JavaScript, NodeJs, MongoDB",
    description:
      "Built a comprehensive Health Care Management System to manage patient records, appointments, and medical histories efficiently.",
    achievements: [
      "Streamlined hospital administration processes.",
      "Improved patient record accessibility and appointment management.",
    ],
    videoUrl: "",
  },
];

export default function Portfolio() {
  // ✅ Move useState inside the component
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen font-sans text-gray-200">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-wide">
            Nida<span className="text-indigo-400">.dev</span>
          </h1>
          <div className="space-x-6 text-sm text-gray-400">
            {["about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur border border-white/20">
            🎓 B.Tech CSE (AI & ML) — Class of 2026
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Computer Science (AI & ML) <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Engineer
            </span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Passionate about building intelligent systems, data-driven solutions,
            and modern full-stack applications.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white mb-6"
        >
          About Me
        </motion.h3>
        <p className="text-gray-400 leading-relaxed">
          I am a final-year B.Tech (CSE, AI & ML) student with hands-on experience in full-stack and AI-based projects. Skilled in Python, React, JavaScript, and web development, I have designed and implemented systems including Employee Management, Mental Wellness, Health Care Management, and AI-based applications. My work demonstrates proficiency in problem-solving, collaborative coding, and building scalable, user-centric solutions. Currently, I am developing an AI-powered Trip Planner as my final year project, integrating machine learning and recommendation systems to enhance travel experiences.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-white mb-12">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-black border border-gray-800 rounded-2xl p-6 overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/20 to-blue-500/10"></div>

                <h4 className="relative text-xl font-semibold text-white mb-2">
                  {p.title}
                </h4>

                <p className="relative text-gray-400 text-sm mb-4">{p.tech}</p>



                <button
                  onClick={() => setSelectedProject(p)}
                  className="relative text-sm text-white underline underline-offset-4"
                >
                  View Details →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-black rounded-xl p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-3 text-white text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-white mb-2">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-2">{selectedProject.tech}</p>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              

            <ul className="text-gray-300 list-disc pl-6 mb-4">
              {selectedProject.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
       <section id="skills" className="py-20 px-6 bg-black">
  <div className="max-w-6xl mx-auto">
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-white text-center mb-12"
    >
      Technical Skills
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-8">
      
      {/* AI & ML */}
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition"
      >
        <h4 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h4>
        <div className="flex flex-wrap gap-3">
          {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis"].map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* Programming */}
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
      >
        <h4 className="text-xl font-semibold text-white mb-4">Programming</h4>
        <div className="flex flex-wrap gap-3">
          {["Python", "JavaScript", "SQL", "C", "Data Structures"].map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* Tools & Frameworks */}
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition"
      >
        <h4 className="text-xl font-semibold text-white mb-4">Tools & Frameworks</h4>
        <div className="flex flex-wrap gap-3">
          {["React", "Node.js", "Git", "GitHub", "Flask", "Vite"].map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

<section id="resume" className="py-24 px-6 text-center relative overflow-hidden">
  
  {/* Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/10 to-black"></div>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 max-w-2xl mx-auto"
  >
    <h3 className="text-3xl font-bold text-white mb-4">
      Download My Resume
    </h3>

    <p className="text-gray-400 mb-8">
      A concise overview of my skills, projects, and experience as an
      AI & Machine Learning Engineer (Class of 2026).
    </p>

    <a
      href="/Nida_Saifi_Resume.pdf"
      download
      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                 bg-white text-black font-semibold
                 hover:scale-105 transition shadow-lg"
    >
      📄 Download CV
    </a>
  </motion.div>
</section>


      {/* Contact */}
       <section
  id="contact"
  className="py-24 px-6 bg-black relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-500/5 to-black"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-white mb-4"
    >
      Let’s Connect
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 mb-12"
    >
      Open to opportunities, collaborations, and exciting projects.
    </motion.p>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* GitHub */}
      <motion.a
        whileHover={{ y: -10, scale: 1.05 }}
        href="https://github.com/Nida422"
        target="_blank"
        className="contact-card"
      >
        <Github size={32} />
        <span>GitHub</span>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        whileHover={{ y: -10, scale: 1.05 }}
        href="https://www.linkedin.com/in/nida-saifi-60914a292/"
        target="_blank"
        className="contact-card"
      >
        <Linkedin size={32} />
        <span>LinkedIn</span>
      </motion.a>

      {/* Email */}
      <motion.a
        whileHover={{ y: -10, scale: 1.05 }}
        href="mailto:nida345251@gmail.com"
        className="contact-card"
      >
        <Mail size={32} />
        <span>Email</span>
      </motion.a>

    </div>
  </div>
</section>

      {/* Footer */}
       <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © 2026 Nida · AI & ML Engineer 
        </footer>

    </div>
  );
}
