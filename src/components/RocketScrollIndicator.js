import "../style/RocketScrollIndicator.scss";

function RocketScrollIndicator({ opacity = 1 }) {
  const handleScrollNext = () => {
    const nextSection = document.querySelector("#about");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className="rocket_line_indicator"
      type="button"
      aria-label="Scroll down"
      onClick={handleScrollNext}
      style={{ opacity }}
    >
      <div className="rocket_line_inner">
        <svg
          className="rocket_line_svg"
          viewBox="0 0 120 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="rocketGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="trailGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient
              id="trailMain"
              x1="60"
              y1="142"
              x2="60"
              y2="176"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fff5b4" stopOpacity="0.98" />
              <stop offset="28%" stopColor="#ffdb78" stopOpacity="0.95" />
              <stop offset="62%" stopColor="#8ad6ff" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#3b91ff" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="trailSide"
              x1="0"
              y1="145"
              x2="0"
              y2="170"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffeb9b" stopOpacity="0.82" />
              <stop offset="50%" stopColor="#92d6ff" stopOpacity="0.76" />
              <stop offset="100%" stopColor="#3b91ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g filter="url(#rocketGlow)">
            <path
              className="rocket_outline"
              d="M60 18
                 C74 30, 82 52, 82 75
                 L82 106
                 C82 118, 76 128, 68 136
                 L68 154
                 L60 146
                 L52 154
                 L52 136
                 C44 128, 38 118, 38 106
                 L38 75
                 C38 52, 46 30, 60 18 Z"
              pathLength="100"
            />

            <circle
              className="rocket_window"
              cx="60"
              cy="63"
              r="9"
              pathLength="100"
            />

            <path
              className="rocket_fin_left"
              d="M38 108
                 C28 112, 22 122, 24 136
                 C31 130, 38 125, 44 123"
              pathLength="100"
            />

            <path
              className="rocket_fin_right"
              d="M82 108
                 C92 112, 98 122, 96 136
                 C89 130, 82 125, 76 123"
              pathLength="100"
            />

            <path
              className="rocket_nozzle"
              d="M52 136 L68 136"
              pathLength="100"
            />
          </g>

          <g filter="url(#trailGlow)">
            <path
              className="rocket_flame flame_main"
              d="M60 141
              C66 148, 68 157, 64.5 168
              C62.5 175, 60 179, 60 179
              C60 179, 57.5 175, 55.5 168
              C52 157, 54 148, 60 141 Z"
              pathLength="100"
            />

            <path
              className="rocket_flame flame_left"
              d="M49 144
                C45 150, 44 157, 46 164
                C47 169, 50 173, 52 174
                C52 174, 54 169, 55 164
                C57 157, 55 150, 49 144 Z"
              pathLength="100"
            />

            <path
              className="rocket_flame flame_right"
              d="M71 144
                C75 150, 76 157, 74 164
                C73 169, 70 173, 68 174
                C68 174, 66 169, 65 164
                C63 157, 65 150, 71 144 Z"
              pathLength="100"
            />
          </g>
        </svg>

        <span className="rocket_label">Scroll Down</span>
      </div>
    </button>
  );
}

export default RocketScrollIndicator;