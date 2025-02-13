import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/skills" style={styles.link}>Skills</Link></li>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#333",
    color: "#fff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Header;
