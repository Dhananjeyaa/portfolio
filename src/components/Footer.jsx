export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)", borderTop: "1px solid var(--glass-border)", marginTop: "60px", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}>
      <p style={{ margin: 0, fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} <span style={{ color: "var(--neon-primary)", fontWeight: "bold" }}>Arun</span> | MERN Stack Developer
      </p>
    </footer>
  );
}
