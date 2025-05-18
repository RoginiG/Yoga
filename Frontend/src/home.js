import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.page}>
      {/* Background Animation */}
      <motion.div
        style={styles.animatedBackground}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Animated Headline */}
      <motion.h1
        style={styles.headline}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Yoga Wellness
      </motion.h1>

      {/* Yoga Recommendation Section */}
      <motion.div
        style={styles.section}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2>Yoga Recommendation</h2>
        <p>Get the best yoga poses based on your medical conditions.</p>
        <Link to="/recommendation">
          <motion.button
            style={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Recommendations
          </motion.button>
        </Link>
      </motion.div>

      {/* Yoga Detection Section */}
      <motion.div
        style={styles.section}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2>Yoga Detection</h2>
        <p>Analyze your yoga posture with our AI-powered detection.</p>
        <Link to="/detection">
          <motion.button
            style={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Detection
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

const styles = {
  page: {
    textAlign: "center",
    padding: "50px",
    minHeight: "100vh",
    position: "relative",
    backgroundImage: "url('/home.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  animatedBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(5px)",
    zIndex: -1,
  },
  headline: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  section: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
    width: "80%",
    maxWidth: "600px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "5px",
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Home;
