import { useMemo } from "react";

export default function FloatingPlanets() {
  const planets = useMemo(() => {
    return [
      { id: "home", src: "/images/icon6.png", size: 42, label: "Home", href: "#home" },
      { id: "about", src: "/images/icon1.png", size: 34, label: "About", href: "#about" },
      { id: "skills", src: "/images/icon2.png", size: 40, label: "Skills", href: "#skills" },
      { id: "project", src: "/images/icon7.png", size: 38, label: "Project", href: "#project" },
      { id: "contact", src: "/images/icon8.png", size: 34, label: "Contact", href: "#contact" },
    ];
  }, []);

  return (
    <nav className="floatingPlanets" aria-label="Section navigation">
      {planets.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="floatingPlanets__link"
        >
          <img
            className="floatingPlanets__item"
            src={process.env.PUBLIC_URL + item.src}
            alt={item.label}
            draggable={false}
            style={{ width: `${item.size}px` }}
          />
          <span className="floatingPlanets__label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}