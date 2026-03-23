import { useState } from "react";
import "../style/project.scss";

const personalProjects = [
    {
        id: "kwangdong",
        title: "광동제약 리뉴얼 랜딩 페이지",
        desc: "브랜드 이미지 중심의 리뉴얼 랜딩 페이지",
        detail:
            "광동제약의 브랜드 이미지를 중심으로 메인 비주얼과 섹션 구성을 설계한 랜딩 페이지입니다. 브랜드 톤에 맞는 컬러와 레이아웃을 적용하고, 시각적인 흐름을 고려해 사용자 경험을 개선했습니다.",
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/p1_kangwdong/",
        thumb: "/images/k-mockup.png",
    },
    {
        id: "passcucci",
        title: "파스쿠찌 랜딩페이지",
        desc: "브랜드 톤을 살린 랜딩 UI 구성",
        detail:
            "파스쿠찌 브랜드 무드에 맞춘 비주얼 중심 랜딩 페이지입니다. 컬러, 이미지, 타이포의 조합을 통해 브랜드 감성을 전달하는 데 집중했습니다.",
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/passcucci/",
        thumb: "/images/p-mockup.png",
    },
    {
        id: "casper",
        title: "캐스퍼 홈페이지",
        desc: "레이아웃/섹션 구성 및 UI 인터랙션",
        detail:
            "캐스퍼 브랜드 사이트를 참고하여 다양한 섹션 레이아웃과 인터랙션을 구현한 페이지 입니다.",
        stack: ["HTML", "SCSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/2025casper/",
        thumbType: "video",
        video: "/videos/casper.mp4",
        thumb: "/images/casper.png",
    },
];

const teamProjects = [
    {
        id: "crocs",
        title: "크록스 쇼핑몰 반응형 홈페이지",
        desc: "기존 크록스 쇼핑몰 홈페이지를 리뉴얼 디자인 후 제작한 반응형 웹사이트",
        detail: <>
            로그인, 회원가입, 상품리스트, 상세페이지, 장바구니, 관리자 페이지까지 구현한 팀 프로젝트입니다. <br />
            반응형 레이아웃을 적용하고, 사용자 흐름을 고려한 화면 구성과 UI 구현 작업을 진행했습니다
        </>,
        user: "id: user1 / pw: 1234 ",
        admin: "id: admin1234 / pw: 1234",
        stack: ["SCSS", "Bootstrap", "PHP", "jQuery", "MySQL"],
        live: "https://lynsunwoo.dothome.co.kr/project_crocs/",
        thumb: "/images/crocs_mokup.png",
        role: "팀 조장으로 프로젝트 방향을 기획 및 조율했으며, 반응형 레이아웃 구현과 SCSS 구조 정리 작업을 담당했습니다.",
        deploy: "Dothome",
    },
    {
        id: "ping",
        title: "Ping 디자인 피드백 플랫폼",
        desc: "디자인 시안을 업로드하고 핀 기반 질문과 피드백, Q&A를 주고받을 수 있는 디자인 플랫폼",
        detail:
            <>
                디자인 시안 위에 핀을 배치해 위치 기반으로 피드백과 Q&A를 주고받을 수 있도록 구현한 디자인 피드백 플랫폼입니다.
                <br />
                React 기반 프론트엔드 UI 구현, 반응형 레이아웃, 핀 인터랙션, 상세 페이지 구성, API 연동 작업을 진행했습니다.
            </>,
        user: "id: user1 / pw: 1234 ",
        admin: "id: admin / pw: 1234 로그인 후 주소창 맨 끝 /admin 추가 입력",
        stack: ["React", "SCSS", "MySQL", "Express"],
        live: "https://web-ping-frontend-mkvwe6z7891e08f1.sel3.cloudtype.app/",
        thumb: "/images/ping-mockup.png",
        role: "디자인 시안을 기반으로 아카이브 페이지와 상세 페이지 UI 구현했으며, 핀 인터랙션, 업로드 기능, API 연동을 담당했습니다.",
        deploy: "Cloudtype / Vercel",
    },
];

function Project() {
    const [activeTab, setActiveTab] = useState("personal");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = activeTab === "personal" ? personalProjects : teamProjects;

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section className="project">
            <h2>Project</h2>
            <p className="sub_desc">각 프로젝트를 클릭하면 주요 작업 내용, 상세 정보, 관련 링크를 확인하실 수 있습니다.</p>
            {/* 탭메뉴 */}
            <ul className="project_tabs">
                <li
                    className={activeTab === "personal" ? "active" : ""}
                    onClick={() => setActiveTab("personal")}
                >
                    Personal
                </li>
                <li
                    className={activeTab === "team" ? "active" : ""}
                    onClick={() => setActiveTab("team")}
                >
                    Team
                </li>
            </ul>

            {/* 탭내용 */}
            <div className="project_contents">
                <ul className="project_grid">
                    {projects.map((p) => (
                        <li
                            className="project_card"
                            key={p.id}
                            onClick={() => openModal(p)}
                        >
                            <div className="thumb">
                                {p.thumbType === "video" ? (
                                    <video
                                        className="thumb_video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        poster={process.env.PUBLIC_URL + (p.thumb || "")}
                                    >
                                        <source
                                            src={process.env.PUBLIC_URL + p.video}
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        src={process.env.PUBLIC_URL + p.thumb}
                                        alt={p.title}
                                    />
                                )}
                            </div>

                            <div className="info">
                                <div className="title">{p.title}</div>
                                <div className="desc">{p.desc}</div>

                                {p.deploy && <div className="deploy">배포: {p.deploy}</div>}

                                <div className="meta">{p.stack.join(" · ")}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 모달 */}
            {selectedProject && (
                <div className="project_modal" onClick={closeModal}>
                    <div
                        className="project_modal_content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal_close" onClick={closeModal}>
                            ×
                        </button>
                        <h3>{selectedProject.title}</h3>
                        <div className="modal_thumb">
                            {selectedProject.thumbType === "video" ? (
                                <video
                                    className="thumb_video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    poster={process.env.PUBLIC_URL + (selectedProject.thumb || "")}
                                >
                                    <source
                                        src={process.env.PUBLIC_URL + selectedProject.video}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    src={process.env.PUBLIC_URL + selectedProject.thumb}
                                    alt={selectedProject.title}
                                />
                            )}
                        </div>

                        <div className="modal_info">
                            <p className="modal_desc">{selectedProject.detail}</p>

                            {selectedProject.role && (
                                <p className="modal_role">
                                    <strong>💪🏼 Role</strong> : {selectedProject.role}
                                </p>
                            )}


                            {selectedProject.user && (
                                <p className="modal_user">
                                    <strong>📌 User</strong> : {selectedProject.user}
                                </p>
                            )}

                            {selectedProject.admin && (
                                <p className="modal_admin">
                                    <strong>🔐 Admin</strong> : {selectedProject.admin}
                                </p>
                            )}

                            <div className="modal_links">
                                {selectedProject.live && (
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Site
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Project;