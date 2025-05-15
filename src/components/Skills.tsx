'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      name: 'React',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
    },
    {
      name: 'Next.js',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#ffffff',
    },
    {
      name: 'JavaScript',
      level: 92,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
    },
    {
      name: 'TypeScript',
      level: 88,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6',
    },
    {
      name: 'HTML5',
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
    },
    {
      name: 'CSS3',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
    },
    {
      name: 'Tailwind CSS',
      level: 89,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: '#38B2AC',
    },
    {
      name: 'Redux',
      level: 78,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      color: '#764ABC',
    },
    {
      name: 'Git',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
    },
  ];

  // Group skills by category
  const frontendSkills = skills.slice(0, 7);
  const toolsSkills = skills.slice(7);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 9,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-dark-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-primary-400 mb-3 font-medium">My Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 inline-block">
            Skills & Technologies
          </h3>
        </motion.div>

        <div className="mb-16">
          <motion.h4 
            className="text-xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frontend Development
          </motion.h4>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-glass"
                variants={skillVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 p-2 rounded-lg bg-white/10 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                      backgroundImage: `linear-gradient(90deg, ${skill.color}, #ffffff20)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h4 
            className="text-xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Tools & Other Skills
          </motion.h4>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {toolsSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-glass"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5"
                />
                <span className="text-sm text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
