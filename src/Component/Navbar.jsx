import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../Styles/Navbar.css";

const items = [
  ["work", "Work"],
  ["stack", "Stack"],
  ["about", "About"],
  ["contact", "Contact"],
];

function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="wrap nav-row">
        <a className="brand" href="#top">Olumide Alabi</a>

        <ul className="nav-links">
          {items.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a className="pill" href="#contact">Hire me</a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
