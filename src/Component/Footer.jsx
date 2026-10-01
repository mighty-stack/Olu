import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <span className="mono">© {new Date().getFullYear()} Olumide Alabi</span>
        <div className="footer-links mono">
          <a href="https://github.com/mighty-stack" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/oladeji-olumide-alabi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/i_m_olumide" target="_blank" rel="noreferrer">X</a>
          <a href="#top">Top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
