import { useEffect, useRef, useState } from "react";
import "../style/about.scss";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const introList = [
    "웹 퍼블리셔이자 프론트엔드 개발자를 목표로 성장 중인 주니어 개발자입니다.",
    "디자인 감각과 사용자 경험에 대한 이해를 바탕으로, 아이디어를 구현하는 과정에 강점을 가지고 있습니다.",
    "AI를 생산성과 문제 해결을 위한 도구로 적극 활용하며, 빠르게 변화하는 기술 환경에 유연하게 적응하고 있습니다.",
    "꾸준한 학습과 실무 경험을 통해 성장 가능성을 증명하고, 더 나은 결과물을 만들어내는 개발자로 발전하고자 합니다.",
    "가치있는 결과를 만드는 개발자가 되겠습니다."
  ];

  return (
    <div ref={sectionRef} className={`about_me ${isVisible ? "show" : ""}`}>

      <h2 className="about_title">About</h2>

      <ul>
        {introList.map((item, index) => (
          <li
            key={index}
            style={{ transitionDelay: `${0.6 + index * 0.2}s` }}
          > 
          {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;