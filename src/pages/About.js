import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <div
    className='about-container'
    style={{
      textAlign: 'center',
      padding: '20px',
      background: 'linear-gradient(to right, #1D2B64,rgb(236, 178, 195))',
      color: 'white',
      minHeight: '100vh',
    }}
  >
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ fontSize: '3rem', marginBottom: '20px' }}
    >
      About Me
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ fontSize: '1.3rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.8' }}
    >
      I am a software developer with a strong foundation in computer engineering from Modern Education Society's College of Engineering, Pune. My technical expertise is further enhanced by the CDAC program, which equipped me with advanced skills in software engineering and development.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{ fontSize: '1.3rem', maxWidth: '800px', margin: 'auto', marginTop: '20px', lineHeight: '1.8' }}
    >
      In my current role, I am excited to contribute my analytical skills, technical knowledge, and passion for technology to innovative projects. I thrive in collaborative environments, possess strong communication and teamwork abilities, and am committed to continuous learning to stay at the forefront of emerging technologies. I aim to drive meaningful results and contribute effectively to the success of dynamic initiatives within a forward-thinking organization.
    </motion.p>
  </div>
);

export default About;