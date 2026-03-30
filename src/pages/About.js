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
    "꾸준함으로 완성도를, 끈기로 결과를 만듭니다.",
    "웹 퍼블리셔이자 프론트엔드 개발자를 목표로 성장 중인 주니어 개발자입니다.",
    "AI를 생산성과 문제 해결의 도구로 적극 활용하며, 변화하는 기술 환경에도 유연하게 대응합니다.",
    "꾸준한 학습과 경험을 바탕으로 더 나은 결과를 만드는 개발자로 성장하고 있습니다.",
    "귀사의 일원으로서 가치 있는 결과를 만들어내는 개발자가 되겠습니다.",
  ];

  const workStyleList = [
    "직관적인",
    "빠르게 적용하는",
    "구조적으로 생각하는",
  ];

  const strengthList = [
    "성실함과 꾸준함",
    "책임감 있는 태도",
    "유연한 사고",
  ];

  return (
    <section className={`about ${isVisible ? "show" : ""}`} ref={sectionRef}>
      <h2 className="about_title">About</h2>

      <div className="about_me">
        <div className="about_image">
          <img
            src={process.env.PUBLIC_URL + "/images/my-emoji.png"}
            alt="나를 표현한 이모지 이미지"
          />
        </div>

        <div className="about_intro">
          <ul className="intro_list">
            {introList.map((item, index) => (
              <li
                key={index}
                className={index === 0 ? "intro_highlight" : ""}
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="keyword">
        <div className="keyword_card work_style">
          <h3>💪🏼 Work Style</h3>
          <ul>
            {workStyleList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="keyword_card strength">
          <h3>🔥 Strength</h3>
          <ul>
            {strengthList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;