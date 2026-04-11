export function HeroEditorial() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#C4B0A8",
        minHeight: 460,
        maxHeight: 500,
        height: "clamp(460px, 50vw, 500px)",
      }}
    >
      {/* Gradient overlay left */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(180,155,140,0.35) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-20 flex items-center h-full max-w-[1440px] mx-auto">
        {/* Left text */}
        <div
          className="w-full lg:w-[40%] flex flex-col justify-center px-8 lg:pl-12 py-10"
        >
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{
              color: "#1A1008",
            }}
          >
            Aquí se fabrican
            <br />
            tus lentes.
          </h1>
          <p
            className="mt-4 text-base"
            style={{
              color: "rgba(26,16,8,0.65)",
              maxWidth: 280,
              lineHeight: 1.65,
            }}
          >
            Laboratorio óptico propio en Guadalajara. Examen de la vista
            gratis. Lentes listos en 1 hora.
          </p>
        </div>

        {/* Right side — 3 pedestals + glasses SVGs */}
        <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-full">
          {/* Pedestal 1 */}
          <div
            className="absolute rounded-full"
            style={{
              width: 170,
              height: 170,
              background: "#B8A098",
              bottom: 40,
              left: "8%",
            }}
          />
          {/* Pedestal 2 */}
          <div
            className="absolute rounded-full"
            style={{
              width: 190,
              height: 190,
              background: "#A89088",
              bottom: 30,
              left: "38%",
            }}
          />
          {/* Pedestal 3 */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              background: "#C8B8B0",
              bottom: 50,
              right: "8%",
            }}
          />

          {/* Aviator glasses */}
          <svg
            className="absolute"
            style={{ bottom: 140, left: "6%" }}
            width="160"
            height="80"
            viewBox="0 0 160 80"
            fill="none"
          >
            <path
              d="M20 30 C20 15, 45 10, 55 20 C60 25, 65 40, 55 50 C45 60, 20 55, 20 30Z"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.08)"
              opacity="0.85"
            />
            <path
              d="M105 30 C105 15, 130 10, 140 20 C145 25, 150 40, 140 50 C130 60, 105 55, 105 30Z"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.08)"
              opacity="0.85"
            />
            <path
              d="M55 30 C65 25, 95 25, 105 30"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M20 30 L6 24"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M140 30 L154 24"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>

          {/* Cat-eye glasses */}
          <svg
            className="absolute"
            style={{ bottom: 150, left: "36%" }}
            width="170"
            height="80"
            viewBox="0 0 170 80"
            fill="none"
          >
            <path
              d="M15 35 C12 18, 30 12, 50 10 C60 9, 68 20, 70 35 C72 48, 55 58, 40 55 C25 52, 17 48, 15 35Z"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.06)"
              opacity="0.9"
            />
            <path
              d="M100 35 C98 18, 116 12, 136 10 C146 9, 154 20, 156 35 C158 48, 141 58, 126 55 C111 52, 103 48, 100 35Z"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.06)"
              opacity="0.9"
            />
            <path
              d="M70 32 C78 28, 92 28, 100 32"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M15 30 L2 26"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M156 30 L169 26"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>

          {/* Round glasses */}
          <svg
            className="absolute"
            style={{ bottom: 145, right: "6%" }}
            width="150"
            height="80"
            viewBox="0 0 150 80"
            fill="none"
          >
            <circle
              cx="40"
              cy="38"
              r="26"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.05)"
              opacity="0.85"
            />
            <circle
              cx="110"
              cy="38"
              r="26"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="rgba(26,8,8,0.05)"
              opacity="0.85"
            />
            <path
              d="M66 36 C72 32, 78 32, 84 36"
              stroke="#1A0808"
              strokeWidth="1.8"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M14 34 L2 28"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M136 34 L148 28"
              stroke="#1A0808"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
