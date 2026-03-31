import { useState } from "react";
import "../style/project.scss";

const personalProjects = [
    {
        id: "kwangdong",
        title: "광동제약 리뉴얼 랜딩 페이지",
        desc: "브랜드 아이덴티티를 반영한 리뉴얼 랜딩 페이지",
        detail: (
            <>
                광동제약의 건강하고 신뢰감 있는 브랜드 이미지를 중심으로 메인 비주얼과 섹션 구성을 설계한 랜딩 페이지입니다.
                <br />
                식품과 의약품을 다루는 브랜드 특성을 반영해 컬러와 콘텐츠 배치를 구성했으며, 단순하면서도 정보 전달에 초점을 맞춘 레이아웃을 적용했습니다.
                <br />
                시각적인 흐름을 고려한 인터랙션 요소를 더해 사용자가 콘텐츠를 자연스럽게 탐색할 수 있도록 구현했습니다.
            </>
        ),
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/p1_kangwdong/",
        thumb: "/images/k-mockup.png",
        type: "Desktop Web",
        device: "PC",
        viewport: "1920px",
        contentWidth: "1400px",
        colors: ["#EC3611", "#333", "#fff"],
    },
    {
        id: "passcucci",
        title: "파스쿠찌 랜딩 페이지",
        desc: "브랜드 무드와 고급스러운 톤을 강조한 비주얼 중심 랜딩 페이지",
        detail:
            (<>
                고급 이탈리아 커피 브랜드인 파스쿠찌의 무드에 맞춰 비주얼 중심으로 구성한 랜딩 페이지입니다.
                <br />
                브랜드가 가지고 있는 세련되고 깊이감 있는 레드 계열 컬러를 중심으로 이미지와 타이포를 조합해, 브랜드 감성을 효과적으로 전달하는 데 집중했습니다.
            </>
            ),
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/passcucci/",
        thumb: "/images/p-mockup.png",
        type: "Desktop Web",
        device: "PC",
        viewport: "1920px",
        contentWidth: "1200px",
        colors: ["#e41937", "#6A1820", "#211613"],
    },
    {
        id: "casper",
        title: "캐스퍼 홈페이지",
        desc: "레이아웃/섹션 구성 및 UI 인터랙션",
        detail:
            (<>
                캐스퍼 브랜드 사이트를 참고하여 다양한 섹션 레이아웃과 인터랙션을 구현한페이지 입니다.
            </>),
        stack: ["HTML", "SCSS", "JavaScript"],
        live: "https://lynsunwoo.github.io/2025casper/",
        thumbType: "video",
        video: "/videos/casper.mp4",
        thumb: "/images/casper.png",
        type: "Desktop Web",
        device: "PC",
        viewport: "1920px",
        contentWidth: "1200px",
    },
];

const teamProjects = [
    {
        id: "crocs",
        title: "크록스 쇼핑몰 반응형 홈페이지",
        desc: "기존 크록스 쇼핑몰 홈페이지를 리뉴얼 디자인 후 제작한 반응형 웹사이트",
        detail: (
            <>
                기존 홈페이지의 단점을 보완하고, 쇼핑몰 목적에 맞는 정보 전달 흐름을 개선한 리뉴얼 웹사이트입니다.
                <br />
                섹션 구성과 이미지 배치를 단순하면서도 보기 좋게 조정해 사용자 경험의 흐름을 개선하는 데 초점을 두었으며,
                <br />
                상품 탐색부터 구매까지의 사용자 여정이 자연스럽게 이어질 수 있도록 사이트를 구성했습니다.
                <br />
                로그인, 회원가입, 상품리스트, 상세페이지, 장바구니, 관리자 페이지까지 구현한 팀 프로젝트입니다.
                <br />
                반응형 레이아웃을 적용하고, 사용자 흐름을 고려한 화면 구성과 UI 구현 작업을 진행했습니다.
            </>
        ),
        user: "id: user1 / pw: 1234",
        admin: "id: admin1234 / pw: 1234",
        stack: ["SCSS", "Bootstrap", "PHP", "jQuery", "MySQL"],
        live: "https://lynsunwoo.dothome.co.kr/project_crocs/",
        thumb: "/images/crocs_mokup.png",
        role: "팀 조장으로 프로젝트 방향을 기획 및 조율했으며, 반응형 레이아웃 구현과 SCSS 구조 정리 작업을 담당했습니다.",
        deploy: "Dothome",
        type: "Responsive Web",
        device: "Desktop / Tablet / Mobile",
        viewport: "1920+ / 1481+ / 1025+ / 768+ / Mobile",
        layout: "Responsive Header / Navigation / Section / Footer",
        colors: ["#00BAC6", "#111827", "#777777"],
    },
    {
        id: "ping",
        title: "Ping 디자인 피드백 플랫폼",
        desc: "디자인 시안을 업로드하고 핀 기반 질문과 피드백, Q&A를 주고받을 수 있는 디자인 플랫폼",
        detail: (
            <>
                기존 디자인 플랫폼의 일반적인 댓글 방식에서 나아가, 디자인 시안의 특정 위치를 기준으로 보다 구체적인 피드백을 주고받을 수 있도록 기획한 디자인 피드백 플랫폼입니다.
                <br />
                사용자는 디자인 시안 위에 핀을 배치해 위치 기반으로 질문과 피드백을 남길 수 있으며, 이를 통해 어떤 부분에 대한 의견인지 직관적으로 확인할 수 있도록 구현했습니다.
                <br />
                단순한 이미지 공유를 넘어 피드백과 Q&A가 함께 이루어질 수 있는 구조로 설계해, 디자인 작업 과정에서 사용자들이 보다 효율적으로 소통할 수 있도록 구성하였습니다.
                <br />
                React 기반 프론트엔드 UI 구현, 반응형 레이아웃, 핀 인터랙션, 상세 페이지 구성, API 연동 작업을 진행했습니다.
            </>
        ),
        user: "id: user1 / pw: 1234",
        admin: "id: admin / pw: 1234 로그인 후 주소창 맨 끝 /admin 추가 입력",
        stack: ["React", "SCSS", "MySQL", "Express"],
        live: "https://web-ping-frontend-mkvwe6z7891e08f1.sel3.cloudtype.app/",
        thumb: "/images/ping-mockup.png",
        role: "디자인 시안을 기반으로 아카이브 페이지와 상세 페이지 UI 구현했으며, 핀 인터랙션, 업로드 기능, API 연동을 담당했습니다.",
        deploy: "Cloudtype / Vercel",
        type: "Responsive Web",
        device: "Desktop / Tablet / Mobile",
        viewport: "1920+ / 1440+ / 1024+ / 768+ / Mobile",
        layout: "12 / 8 / 4 Column Grid",
        colors: ["#023FA1", "#43ECAC", "#FF6E79"],
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
            className={`project_modal_content ${activeTab === "team" ? "team_modal" : ""}`}
            onClick={(e) => e.stopPropagation()}
        >
            <button className="modal_close" onClick={closeModal}>
                ×
            </button>
            <h3>{selectedProject.title}</h3>

            {activeTab === "team" ? (
                <>
                    <div className="modal_wrap team_wrap">
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
                        </div>
                    </div>

                    <div className="team_meta_bottom">
                        {selectedProject.type && (
                            <p className="modal_meta">
                                <strong>📱 Type</strong> : {selectedProject.type}
                            </p>
                        )}

                        {selectedProject.device && (
                            <p className="modal_meta">
                                <strong>🖥 Device</strong> : {selectedProject.device}
                            </p>
                        )}

                        {selectedProject.viewport && (
                            <p className="modal_meta">
                                <strong>📐 Viewport</strong> : {selectedProject.viewport}
                            </p>
                        )}

                        {selectedProject.layout && (
                            <p className="modal_meta">
                                <strong>🧩 Layout</strong> : {selectedProject.layout}
                            </p>
                        )}

                        {selectedProject.deploy && (
                            <p className="modal_meta">
                                <strong>🚀 Deploy</strong> : {selectedProject.deploy}
                            </p>
                        )}

                        {selectedProject.colors && (
                            <div className="modal_color">
                                <strong>🎨 Color</strong>
                                <div className="color_chip_wrap">
                                    {selectedProject.colors.map((color, idx) => (
                                        <span
                                            key={idx}
                                            className="color_chip"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

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
                </>
            ) : (
                <div className="modal_wrap">
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

                        {selectedProject.type && (
                            <p className="modal_meta">
                                <strong>📱 Type</strong> : {selectedProject.type}
                            </p>
                        )}

                        {selectedProject.device && (
                            <p className="modal_meta">
                                <strong>🖥 Device</strong> : {selectedProject.device}
                            </p>
                        )}

                        {selectedProject.viewport && (
                            <p className="modal_meta">
                                <strong>📐 Viewport</strong> : {selectedProject.viewport}
                            </p>
                        )}

                        {selectedProject.contentWidth && (
                            <p className="modal_meta">
                                <strong>📏 Content Width</strong> : {selectedProject.contentWidth}
                            </p>
                        )}

                        {selectedProject.layout && (
                            <p className="modal_meta">
                                <strong>🧩 Layout</strong> : {selectedProject.layout}
                            </p>
                        )}

                        {selectedProject.colors && (
                            <div className="modal_color">
                                <strong>🎨 Color</strong>
                                <div className="color_chip_wrap">
                                    {selectedProject.colors.map((color, idx) => (
                                        <span
                                            key={idx}
                                            className="color_chip"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

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
            )}
        </div>
    </div>
)}
        </section>
    );
}

export default Project;