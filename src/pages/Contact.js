import React from "react";
import "../style/contact.scss";

function Contact() {
  const contactItems = [
    {
      label: "E-mail",
      value: "lynsunwoo@gmail.com",
      type: "link",
      href: "mailto:lynsunwoo@gmail.com",
    },
    {
      label: "Tel",
      value: "010-5585-2481",
      type: "link",
      href: "tel:01055852481",
    },
    {
      label: "KakaoTalk ID",
      value: "lynn247",
      type: "text",
    },
    {
      label: "GitHub",
      value: "github.com/lynsunwoo",
      type: "link",
      href: "https://github.com/lynsunwoo",
    },
  ];

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p className="sub_desc">
        함께 작업할 기회를 기다리고 있습니다. 아래 연락처를 통해 편하게 문의해 주세요.
      </p>

      <div className="contact_contents">
        <div className="contact_visual">
          <img src={process.env.PUBLIC_URL + "/images/pofile.png"} alt="AI 캐릭터 이미지" />
        </div>

        <div className="contact_box">
          <ul className="contact_list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>

                {item.type === "link" ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;