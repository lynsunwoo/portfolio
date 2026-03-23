import { useEffect, useState } from "react";

function GalaxyBackground() {
  const [scrollY, setScrollY] = useState(0);

  const stars = Array.from({ length: 120 });
  const bigStars = Array.from({ length: 20 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="galaxy">

      {/* 은하수 띠 */}
      <div
        className="milkyway"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />

      {/* 작은 별 */}
      {stars.map((_, i) => (
        <div
          key={"s" + i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
      ))}

      {/* 큰 별 */}
      {bigStars.map((_, i) => (
        <div
          key={"b" + i}
          className="big-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        />
      ))}

    </div>
  );
}

export default GalaxyBackground;
