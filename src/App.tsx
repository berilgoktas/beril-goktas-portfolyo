import { useEffect, useRef, useState } from "react";
import portrait from "../ben.png";
import {
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
  type Project,
} from "./data";

const nav = [
  { href: "#giris", label: "Ana sayfa" },
  { href: "#projeler", label: "Projeler" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#iletisim", label: "İletişim" },
];

const cardColors = ["#c62828", "#1a237e", "#00695c", "#4a148c", "#e65100", "#01579b", "#37474f"];

export default function App() {
  const [solidNav, setSolidNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shotIndex, setShotIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = projects.filter((project) => project.images && project.images.length > 0);
  const others = projects.filter((project) => !project.images?.length);

  return (
    <>
      <header className={solidNav || menuOpen ? "nav solid" : "nav"}>
        <a className="nav-name" href="#giris">
          {profile.name}
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menü
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="giris" className="hero">
        <Sky />
        <img className="avatar" src={portrait} alt="Beril Göktaş" />
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-posta">
            <MailIcon />
          </a>
        </div>
      </section>

      <main>
        <div className="narrow">
          <p className="hello">
            <strong>Merhaba!</strong>
          </p>
          <p>
            Ben {profile.name}. İzmir’de yaşıyorum. {profile.intro} Aşağıda
            geliştirdiğim işlere bakabilir veya doğrudan bana ulaşabiliriniz.
          </p>
        </div>

        <section id="projeler">
          <h2>Portfolyo</h2>
          <h3>Öne çıkan projeler</h3>
          <div className="card-grid">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={shotIndex[project.id] ?? 0}
                onPick={(next) => setShotIndex((current) => ({ ...current, [project.id]: next }))}
              />
            ))}
          </div>

          <h3>Diğer çalışmalar</h3>
          <div className="card-grid">
            {others.map((project, index) => (
              <OtherCard
                key={project.id}
                project={project}
                color={cardColors[index % cardColors.length]}
              />
            ))}
          </div>
        </section>

        <section id="deneyim">
          <h2>Zaman çizelgesi</h2>
          <div className="timeline">
            <article className="right">
              <p className="when">
                {experience.period} · {experience.mode}
              </p>
              <span className="dot" role="img" aria-label="İş">
                💼
              </span>
              <div className="t-card">
                <h3>{experience.company}</h3>
                <h4>{experience.title}</h4>
                <p>{experience.summary}</p>
              </div>
            </article>
            {education.map((item, index) => (
              <article key={item.school + item.period} className={index % 2 === 0 ? "left" : "right"}>
                <p className="when">{item.period}</p>
                <span className="dot" role="img" aria-label="Eğitim">
                  🎓
                </span>
                <div className="t-card">
                  <h3>{item.school}</h3>
                  <h4>
                    {item.program}
                    {item.note ? ` · ${item.note}` : ""}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="beceriler" className="narrow">
          <h2>Beceriler</h2>
          {skillGroups.map((group) => (
            <p key={group.label}>
              <strong>{group.label}: </strong>
              {group.items.join(", ")}
            </p>
          ))}
          <p>
            <strong>Diller: </strong>
            {languages.join(", ")}
          </p>
        </section>

      </main>

      <footer id="iletisim">
        <Sky compact />
        <h2>İletişim</h2>
        <ul className="contact-row">
          <li>
            <a href={`mailto:${profile.email}`}>
              <MailIcon />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              linkedin.com/in/berilgoktas
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              github.com/berilgoktas
            </a>
          </li>
          <li>
            <span>
              <PinIcon />
              {profile.location}
            </span>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}

function OtherCard({ project, color }: { project: Project; color: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <article className="color-card" style={{ background: color }}>
      <h4>{project.title}</h4>
      <p>{project.summary}</p>
      <p className="stack">{project.stack.join(" · ")}</p>
      <button type="button" className="detail-btn" onClick={() => dialogRef.current?.showModal()}>
        Ayrıntıları gör
      </button>
      <dialog
        ref={dialogRef}
        className="detail"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="detail-bar">
          <h3>{project.title}</h3>
          <button type="button" onClick={() => dialogRef.current?.close()}>
            Kapat
          </button>
        </div>
        <p>{project.summary}</p>
        <ul>
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="detail-stack">{project.stack.join(" · ")}</p>
      </dialog>
    </article>
  );
}

function ProjectCard({
  project,
  index,
  onPick,
}: {
  project: Project;
  index: number;
  onPick: (index: number) => void;
}) {
  const images = project.images ?? [];
  const shot = images[index] ?? images[0];
  const [moreOpen, setMoreOpen] = useState(false);
  const preview = project.points.length > 4 ? 3 : project.points.length;
  const visiblePoints = moreOpen ? project.points : project.points.slice(0, preview);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openShot = () => dialogRef.current?.showModal();
  const closeShot = () => dialogRef.current?.close();

  return (
    <article className="shot-card">
      {shot && (
        <>
          <button type="button" className="shot-open" onClick={openShot}>
            <figure className={shot.phone ? "phone" : undefined}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
            <span>Büyük gör</span>
          </button>
          <dialog
            ref={dialogRef}
            className="lightbox"
            onClick={(event) => {
              if (event.target === dialogRef.current) closeShot();
            }}
          >
            <div className="lightbox-bar">
              <p>{shot.alt}</p>
              <button type="button" onClick={closeShot}>
                Kapat
              </button>
            </div>
            <img className={shot.phone ? "phone" : undefined} src={shot.src} alt={shot.alt} />
            {images.length > 1 && (
              <div className="lightbox-nav">
                <button
                  type="button"
                  onClick={() => onPick((index - 1 + images.length) % images.length)}
                >
                  Önceki
                </button>
                <button type="button" onClick={() => onPick((index + 1) % images.length)}>
                  Sonraki
                </button>
              </div>
            )}
          </dialog>
        </>
      )}
      <div className="shot-body">
        <h4>{project.title}</h4>
        <p>{project.summary}</p>
        <ul>
          {visiblePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {project.points.length > preview && (
          <button type="button" className="more-btn" onClick={() => setMoreOpen((open) => !open)}>
            {moreOpen ? "Daha az göster" : "Devamını gör"}
          </button>
        )}
        <p className="stack">{project.stack.join(" · ")}</p>
        {images.length > 1 && (
          <div className="thumbs">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                className={imageIndex === index ? "active" : ""}
                aria-label={image.alt}
                aria-pressed={imageIndex === index}
                onClick={() => onPick(imageIndex)}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Sky({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const count = compact ? (window.innerWidth < 720 ? 10 : 22) : window.innerWidth < 720 ? 26 : 46;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00055,
      vy: (Math.random() - 0.5) * 0.00055,
    }));

    let frame = 0;
    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.round(width * dpr);
      const pixelHeight = Math.round(height * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > 1) dot.vx *= -1;
        if (dot.y < 0 || dot.y > 1) dot.vy *= -1;
      }
      const phone = width < 720;
      const reach = compact
        ? Math.min(width, height) * 0.28
        : phone
          ? Math.min(width, height) * 0.22
          : 150;
      if (!(compact && phone)) {
        for (let i = 0; i < dots.length; i += 1) {
          for (let j = i + 1; j < dots.length; j += 1) {
            const dx = (dots[i].x - dots[j].x) * width;
            const dy = (dots[i].y - dots[j].y) * height;
            const distance = Math.hypot(dx, dy);
            if (distance >= reach) continue;
            context.strokeStyle = `rgba(255,255,255,${(1 - distance / reach) * (compact ? 0.22 : 0.35)})`;
            context.beginPath();
            context.moveTo(dots[i].x * width, dots[i].y * height);
            context.lineTo(dots[j].x * width, dots[j].y * height);
            context.stroke();
          }
        }
      }
      context.fillStyle = "rgba(255,255,255,0.9)";
      const radius = compact ? 1.6 : phone ? 1.5 : 2.1;
      for (const dot of dots) {
        context.beginPath();
        context.arc(dot.x * width, dot.y * height, radius, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, [compact]);

  return <canvas ref={ref} className="sky" aria-hidden="true" />;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.55-.56-2.6-1.96-2.6-1.07 0-1.7.72-1.98 1.41-.1.25-.13.6-.13.95V20H11V9h2.4v1.51c.36-.55 1-1.34 2.44-1.34 1.78 0 3.16 1.16 3.16 3.66V20Z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5v2.2Z"
      />
    </svg>
  );
}
