import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Contact = () => (
  <div
    className='contact-container'
    style={{
      textAlign: 'center',
      padding: '20px',
      background: 'linear-gradient(to right, #1D2B64,rgb(167, 203, 244))',
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
      Contact Me
    </motion.h1>

    {/* Contact Information */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ fontSize: '1.3rem', maxWidth: '800px', margin: 'auto', lineHeight: '2' }}
    >
      <p>
        <FaEnvelope style={{ marginRight: '10px', color: '#00FFD1' }} />
        <a href="mailto:lakshbhamre01@gmail.com" style={{ color: '#00FFD1', textDecoration: 'none' }}>
          lakshbhamre01@gmail.com
        </a>
      </p>
      <p>
        <FaGithub style={{ marginRight: '10px', color: '#00FFD1' }} />
        <a href="https://github.com/laksh712" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFD1', textDecoration: 'none' }}>
          GitHub
        </a>
      </p>
      <p>
        <FaLinkedin style={{ marginRight: '10px', color: '#00FFD1' }} />
        <a href="https://www.linkedin.com/in/laksh-bhamare-965605202/" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFD1', textDecoration: 'none' }}>
          LinkedIn
        </a>
      </p>
      <p>
        <FaCode style={{ marginRight: '10px', color: '#00FFD1' }} />
        <a href="https://leetcode.com/u/Laksh_Bhamare/" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFD1', textDecoration: 'none' }}>
          LeetCode
        </a>
      </p>
    </motion.div>
  </div>
);

export default Contact;