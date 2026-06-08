import { useRef } from "react";

const logos = [
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "AT&T",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg",
  },
  {
    name: "Citi",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Citi_logo_March_2023.svg",
  },
  {
    name: "LexisNexis",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LexisNexis_logo.svg",
  },
  {
    name: "HP Enterprise",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg",
  },
  {
    name: "Gold's Gym",
    src: "/golds-gym-logo.png",
  },
  {
    name: "Gen",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Gen_logo.svg",
  },
  {
    name: "Moody's",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Moody%27s_new_logo.png",
  },
  {
    name: "World Affairs Council",
    src: "/wac-logo.png",
  },
  {
    name: "PRSA",
    src: "/prsa-logo.png",
  },
  {
    name: "CultureMap",
    src: null, // text fallback
  },
];

function LogoItem({ name, src }: { name: string; src: string | null }) {
  if (!src) {
    return (
      <div className="flex items-center justify-center h-10 flex-shrink-0 opacity-40 hover:opacity-75 transition-opacity duration-300">
        <span
          style={{
            fontFamily: "var(--app-font-sans, Inter, Arial, sans-serif)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            color: "hsl(var(--foreground))",
          }}
        >
          {name.toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-10 flex-shrink-0 opacity-40 hover:opacity-75 transition-opacity duration-300">
      <img
        src={src}
        alt={name}
        style={{
          height: "28px",
          width: "auto",
          maxWidth: "120px",
          objectFit: "contain",
          filter: "grayscale(100%) brightness(0) opacity(0.65)",
        }}
        onError={(e) => {
          const el = e.currentTarget;
          const parent = el.parentElement;
          if (parent) {
            parent.innerHTML = `<span style="font-family:var(--app-font-sans,Inter,Arial,sans-serif);font-size:0.75rem;font-weight:700;letter-spacing:0.08em;white-space:nowrap;color:hsl(var(--foreground))">${name.toUpperCase()}</span>`;
          }
        }}
      />
    </div>
  );
}

export function LogoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="border-b border-border"
      style={{ background: "hsl(var(--background))", padding: "36px 0" }}
    >
      {/* Label */}
      <p
        className="text-center mb-6"
        style={{
          fontFamily: "var(--app-font-sans, Inter, Arial, sans-serif)",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "hsl(var(--muted-foreground))",
        }}
      >
        Trusted by
      </p>

      {/* Ticker */}
      <div className="overflow-hidden relative">
        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 z-10 pointer-events-none"
          style={{
            width: "100px",
            background:
              "linear-gradient(to right, hsl(var(--background)), transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 z-10 pointer-events-none"
          style={{
            width: "100px",
            background:
              "linear-gradient(to left, hsl(var(--background)), transparent)",
          }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap: "64px",
            width: "max-content",
            animation: "logo-ticker-scroll 32s linear infinite",
          }}
          onMouseEnter={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (trackRef.current)
              trackRef.current.style.animationPlayState = "running";
          }}
        >
          {/* Set 1 */}
          {logos.map((logo) => (
            <LogoItem key={`a-${logo.name}`} name={logo.name} src={logo.src} />
          ))}
          {/* Set 2 — duplicate for seamless loop */}
          {logos.map((logo) => (
            <LogoItem key={`b-${logo.name}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes logo-ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
