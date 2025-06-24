import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import './Home.css';

const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div
            className='home-container'
            style={{
                textAlign: 'center',
                padding: '20px',
                background: 'linear-gradient(to right, #1D2B64, #F8CDDA)',
                color: 'white',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{
                    position: 'absolute',
                    top: '50px',
                    left: '50px',
                    borderRadius: '50%',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    border: '5px solid white',
                }}
            >
                <img
                    src='/logo712.jpg'
                    alt='Profile'
                    style={{
                        borderRadius: '50%',
                        width: '180px',
                        height: '160px',
                    }}
                />
            </motion.div>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ fontSize: '3rem', marginTop: '50px', color: '#ffffff' }}
            >
                Welcome to My Portfolio
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#ffffff' }}
            >
                <TypeAnimation
                    sequence={['Developer', 1000, 'Engineer', 1000]}
                    speed={50}
                    repeat={Infinity}
                />
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto' }}
            >
                Hi, I'm <strong style={{ color: '#ffffff' }}>Laksh Bhamare</strong>, a passionate developer specializing in web
                development, backend services, AWS, and creating interactive user experiences.
                Explore my portfolio to see the projects I've worked on and the skills I've honed
                over the years.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ marginTop: '30px' }}
            >
                <h3>Tech Stack</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <img src='/icons/react.svg' alt='React' width='50' />
                    <img src='/icons/springboot.svg' alt='Spring Boot' width='50' />
                    <img src='/icons/mysql.svg' alt='MySQL' width='50' />
                    <img src='/icons/aws.svg' alt='AWS' width='50' />
                    <img src='/icons/git.svg' alt='Git' width='50' />
                </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                style={{ marginTop: '30px', fontSize: '1.1rem' }}
            >
                <p>🚀 5+ Projects Completed</p>
                <p>📧 Integrated Email, SMS, Push Notifications</p>
                <p>🛠 Working with AWS, Jenkins, Spring Boot</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                style={{ marginTop: '30px' }}
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#1e3c72',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered ? "Let's Connect!" : 'Contact Me'}
                </motion.button>
            </motion.div>

            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000,
                }}
            >
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    style={{
                        padding: '10px 15px',
                        fontSize: '1rem',
                        borderRadius: '50%',
                        backgroundColor: '#00FFD1',
                        color: '#1e3c72',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0px 4px 10px rgba(7, 7, 7, 0.3)',
                    }}
                >
                    Chat💬
                </button>
                {chatOpen && (
                    // eslint-disable-next-line
                    <iframe
                        src="https://chatting-liard-beta.vercel.app/"
                        style={{
                            position: 'fixed',
                            bottom: '80px',
                            right: '20px',
                            width: '300px',
                            height: '400px',
                            border: 'none',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                        }}
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default Home;
