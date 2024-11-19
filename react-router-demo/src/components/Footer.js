// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} HopeHands. All Rights Reserved.
        </p>
        <div style={styles.icons}>
          {/* Social Media Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Inline styles for the footer
const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

// Export the Footer component
export default Footer;
