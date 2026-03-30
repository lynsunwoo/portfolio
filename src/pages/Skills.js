import { useEffect, useRef, useState } from "react";
import "../style/skills.scss";

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "React",
    "Git",
    "Deployment",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  const [isAnimating, setIsAnimating] = useState(false);

  const trackRef = useRef(null); // 움직일 ul
  const viewportRef = useRef(null); // 보이는 영역
  // autoplay on/off
  const [isAuto, setIsAuto] = useState(true);

  const handleTabChange = (index) => {
    if (index === activeIndex) return;

    setIsAuto(false); // 자동 잠시 정지

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 180);

    // 3초 후 자동 다시 시작
    setTimeout(() => {
      setIsAuto(true);
    }, 3000);
  };

  // 섹션 등장 애니메이션(IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ activeIndex가 바뀔 때, 해당 탭을 "가운데"로 오도록 track 이동
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const items = track.querySelectorAll("li");
    const activeItem = items[activeIndex];
    if (!activeItem) return;

    const viewportCenter = viewport.clientWidth / 2;
    const itemCenter = activeItem.offsetLeft + activeItem.clientWidth / 2;

    const offsetX = viewportCenter - itemCenter;

    track.style.transform = `translateX(${offsetX}px)`;
  }, [activeIndex]);

  useEffect(() => {
    if (!isAuto) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3500);

    return () => clearInterval(id);
  }, [isAuto, tabs.length]);



  return (
    <section ref={sectionRef} className={`skills ${isVisible ? "show" : ""}`}>
      <h2>Skills</h2>
      <p className="sub_desc">
        각 스킬들을 클릭하여 구현 내용을 확인하실 수 있습니다.<br/>
        별점은 활용 수준을 기준으로 1~3단계로 표시했습니다.
      </p>

      <div className="skills_box">
        {/* ✅ 가로 탭 뷰포트 */}
        <div className="tabs_viewport" ref={viewportRef}>
          <ul className="skills_groups track" ref={trackRef}>
            {tabs.map((tab, index) => (
              <li
                key={tab}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleTabChange(index)}
              >
                <span>{tab}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ 상세 패널 (fade/slide) */}
        <div className={`detail_panel ${isAnimating ? "out" : "in"}`}>
          <ul className="skills_detail" key={activeTab}>
            {activeTab === "HTML" && (
              <>
                <li className="skill_title">HTML</li>
                <li>⭐️⭐️⭐️ 주요 활용 기술</li>
                <li>
                  ✔ Semantic Markup
                  <br />
                  웹 표준 기반 시맨틱 마크업 구조 설계
                </li>
                <li>
                  ✔ Semantic Layout
                  <br />
                  Header / Section / Article 등 시맨틱 태그 기반의 페이지 구조 설계
                </li>
                <li>
                  ✔ Accessibility
                  <br />
                  웹 접근성을 고려한 마크업 작성 경험
                </li>
              </>
            )}

            {activeTab === "CSS" && (
              <>
                <li className="skill_title">CSS</li>
                <li>⭐️⭐️⭐️ 주요 활용 기술</li>
                <li>
                  ✔ Layout
                  <br />
                  Flexbox / Grid 기반 레이아웃 구현
                </li>
                <li>
                  ✔ Responsive
                  <br />
                  Media Query 기반 반응형 UI 구현
                </li>
                <li>
                  ✔ Animation
                  <br />
                  Hover / Transition / Keyframe 기반 인터렉션 구현
                </li>
              </>
            )}

            {activeTab === "SCSS" && (
              <>
                <li className="skill_title">SCSS</li>
                <li>⭐️⭐️⭐️ 주요 활용 기술</li>
                <li>
                  ✔ 변수 관리
                  <br />
                  Color / Typography / Breakpoint 변수 관리
                </li>
                <li>
                  ✔ Mixin
                  <br />
                  재사용 가능한 스타일 로직 설계
                </li>
                <li>
                  ✔ 유지보수
                  <br />
                  스타일 구조 분리 및 코드 재사용성 향상
                </li>
              </>
            )}

            {activeTab === "JavaScript" && (
              <>
                <li className="skill_title">JavaScript</li>
                <li>⭐️⭐️⭐️ 주요 활용 기술</li>
                <li>
                  ✔ DOM Manipulation
                  <br />
                  이벤트 처리 및 동적 UI 구현
                </li>
                <li>
                  ✔ Interaction
                  <br />
                  스크롤, 토글, 슬라이드 등 인터랙션 구현
                </li>
                <li>
                  ✔ API
                  <br />
                  비동기 데이터 처리 및 API 연동 경험
                </li>
              </>
            )}

            {activeTab === "jQuery" && (
              <>
                <li className="skill_title">jQuery</li>
                <li>⭐️⭐️ 구현 경험 보유</li>
                <li>
                  ✔ DOM Manipulation
                  <br />
                  요소 선택 및 이벤트 처리 기반 동적 UI 구현
                </li>
                <li>
                  ✔ Interaction
                  <br />
                  슬라이드, 탭 메뉴, 토글 등 인터랙션 구현
                </li>
                <li>
                  ✔ Cookie 활용
                  <br />
                  팝업 제어 및 상태 유지를 위한 쿠키 처리 경험
                </li>
              </>
            )}

            {activeTab === "PHP" && (
              <>
                <li className="skill_title">PHP</li>
                <li>⭐️ 학습 및 적용 경험</li>
                <li>
                  ✔ Server Side Logic
                  <br />
                  폼 데이터 처리 및 서버 로직 구현
                </li>
                <li>
                  ✔ Database Connection
                  <br />
                  MySQL 데이터베이스 연동 및 CRUD 처리
                </li>
                <li>
                  ✔ Project Experience
                  <br />
                  PHP 기반 쇼핑몰 페이지 제작 경험
                </li>
              </>
            )}

            {activeTab === "React" && (
              <>
                <li className="skill_title">React</li>
                <li>⭐️⭐️ 구현 경험 보유</li>
                <li>
                  ✔ Component
                  <br />
                  컴포넌트 기반 UI 구조 설계
                </li>
                <li>
                  ✔ State
                  <br />
                  useState / useEffect 상태 관리
                </li>
                <li>
                  ✔ API
                  <br />
                  Axios 기반 API 연동 및 데이터 처리
                </li>
              </>
            )}

            {activeTab === "Git" && (
              <>
                <li className="skill_title">Git / GitHub</li>
                <li>⭐️⭐️ 구현 경험 보유</li>
                <li>
                  ✔ Version Control
                  <br />
                  Git 기반 코드 버전 관리
                </li>
                <li>
                  ✔ Collaboration
                  <br />
                  Branch / Merge 기반 협업 경험
                </li>
                <li>
                  ✔ Repository
                  <br />
                  GitHub 팀 프로젝트 관리
                </li>
              </>
            )}

            {activeTab === "Deployment" && (
              <>
                <li className="skill_title">Deployment</li>
                <li>⭐️ 학습 및 적용 경험</li>
                <li>
                  ✔ Cloudtype
                  <br />
                  Node / Express 서버 배포 경험
                </li>
                <li>
                  ✔ Environment
                  <br />
                  환경 변수 관리
                </li>
                <li>
                  ✔ API Server
                  <br />
                  프론트엔드와 서버 연동 경험
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;