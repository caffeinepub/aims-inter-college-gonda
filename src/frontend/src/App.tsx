import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const BUBBLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 20 + Math.random() * 60,
  left: Math.random() * 100,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
}));

function Bubbles() {
  return (
    <>
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: `-${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </>
  );
}

type LetterData = {
  id: string;
  letter: string;
  color: string;
  delay: number;
  fontSize: string;
};
type WordData = { word: string; letters: LetterData[]; marginBottom: string };

const WORD_COLOR_CLASSES = ["glow-yellow", "glow-red", "glow-blue"];
const WORD_FONT_SIZES = [
  "clamp(4rem, 15vw, 10rem)",
  "clamp(2.5rem, 8vw, 6rem)",
  "clamp(2.5rem, 8vw, 6rem)",
];

const HERO_WORDS_DATA: WordData[] = ["AIMS", "Inter", "College"].map(
  (word, wi) => ({
    word,
    marginBottom: wi < 2 ? "0.2em" : "0",
    letters: word.split("").map((letter, li) => ({
      id: `${wi}-${li}`,
      letter,
      color: WORD_COLOR_CLASSES[wi],
      delay: (wi * word.length + li) * 0.08,
      fontSize: WORD_FONT_SIZES[wi],
    })),
  }),
);

const BOX_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#E8A838",
  "#DDA0DD",
  "#2ECC8A",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F0B27A",
  "#82E0AA",
  "#F1948A",
  "#AED6F1",
];

type BoxData = {
  title: string;
  icon: string;
  content: string;
  badges?: string[];
  images?: string[];
  imageLabels?: string[];
};

const BOXES: BoxData[] = [
  {
    title: "About Our School",
    icon: "🏫",
    content:
      "AIMS Inter College, Gonda, is a prestigious educational institution committed to nurturing young minds with excellence, discipline, and innovation. Founded with a vision to provide world-class education in the heart of Gonda, our school blends traditional values with modern learning methodologies. We believe every child is unique and strive to bring out their best through personalized attention, state-of-the-art infrastructure, and a holistic curriculum.",
  },
  {
    title: "Admission Process",
    icon: "📋",
    content:
      "Admissions at AIMS Inter College are open and welcoming! For Nursery class, there is NO entrance examination — all children are directly admitted. For students seeking admission to Class 1st through 12th, a simple entrance assessment is conducted to help us understand the student\u2019s current learning level. Our process is transparent, fair, and student-friendly.",
  },
  {
    title: "Signature Pedagogy",
    icon: "🎯",
    content:
      "Our signature pedagogy is built on four powerful pillars: ALFA (Nursery to UKG) — playful, activity-based foundational learning. BRAVO (Class 1\u20135) — building core skills through interactive methods. CHARLIE (Class 6\u20138) — conceptual deepening with project-based learning. DELTA (Class 9\u201312) — advanced academic preparation with career guidance.",
    badges: ["ALFA", "BRAVO", "CHARLIE", "DELTA"],
  },
  {
    title: "AI-Powered Teaching",
    icon: "🤖",
    content:
      "AIMS is at the forefront of AI-integrated education! Our classrooms are equipped with Smart Boards for interactive digital lessons, a state-of-the-art Computer Lab, AI-assisted learning tools, digital content libraries, and coding & robotics programs — preparing students for the future today.",
  },
  {
    title: "Our Teachers",
    icon: "👩\u200d🏫",
    content:
      "Our faculty is our greatest strength. AIMS teachers are highly qualified, compassionate, and student-centric. They treat every student with warmth and respect, maintaining a friendly and encouraging atmosphere in every classroom. Regular teacher training ensures they stay updated with the latest pedagogical advancements.",
  },
  {
    title: "Safety & Security",
    icon: "🛡\ufe0f",
    content:
      "Student safety is our top priority. AIMS Inter College is equipped with comprehensive fire safety systems including fire extinguishers, smoke detectors, and regular fire drills. CCTV surveillance covers all campus areas, trained security personnel are present at all entry/exit points, and a safe transportation system ensures students travel safely.",
  },
  {
    title: "French Classes",
    icon: "🇫🇷",
    content:
      "Expand your linguistic horizons at AIMS! We offer dedicated French language classes as part of our enriched curriculum. Students learn conversational French, grammar, and culture — opening doors to global opportunities, higher education abroad, and international career prospects.",
  },
  {
    title: "English Classes",
    icon: "📚",
    content:
      "Strong English communication is the foundation of success. Our specialized English classes focus on reading, writing, speaking, and listening skills. Through literature, debates, presentations, and creative writing workshops, students develop confident communication abilities essential for the modern world.",
  },
  {
    title: "Laboratories",
    icon: "🔬",
    content:
      "Our well-equipped labs provide hands-on learning experiences. The Computer Lab features the latest systems with high-speed internet, coding software, and multimedia tools. The Chemistry Lab is stocked with modern apparatus, quality reagents, and safety equipment — making science come alive!",
    images: [
      "/assets/generated/computer-lab.dim_800x500.jpg",
      "/assets/generated/chemistry-lab.dim_800x500.jpg",
    ],
    imageLabels: ["Computer Lab", "Chemistry Lab"],
  },
  {
    title: "Extra Classes",
    icon: "📐",
    content:
      "At AIMS, learning never stops! Students can enroll in extra coaching classes for Maths, Physics, Biology, Chemistry, and all other subjects. These sessions are conducted by expert teachers in small batches, ensuring personalized attention and comprehensive doubt-clearing for academic excellence.",
  },
  {
    title: "Personality Development",
    icon: "🌟",
    content:
      "During vacations, AIMS transforms into a hub of growth! Our Personality Development Program includes yoga sessions for mental and physical wellness, dance classes for creative expression, sports training for physical fitness, public speaking workshops, and leadership activities — shaping confident, well-rounded individuals.",
  },
  {
    title: "Student Podcast",
    icon: "🎙\ufe0f",
    content:
      "AIMS encourages a culture of curiosity and expression through our Student Podcast Program! Students interview each other, ask thought-provoking questions, discuss current events, share knowledge, and develop communication and critical thinking skills in a fun, supportive environment.",
  },
  {
    title: "School Tours",
    icon: "🚌",
    content:
      "Learning beyond the classroom! AIMS organizes exciting educational tours to Zoos, Water Parks, Science Museums, historical monuments, and nature reserves. These tours make learning experiential, broaden students\u2019 horizons, and create unforgettable memories that last a lifetime.",
  },
  {
    title: "Science Exhibitions",
    icon: "🔭",
    content:
      "Every year, AIMS hosts a grand Science Exhibition where students showcase their creativity and scientific thinking. Students design innovative projects, present their research, and explain their findings to judges and visitors. This annual celebration of science inspires curiosity and builds confidence.",
  },
];

const STARS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 3,
  left: Math.random() * 100,
  top: Math.random() * 100,
  opacity: 0.3 + Math.random() * 0.7,
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 3,
}));

function HeroPage({ onExplore }: { onExplore: () => void }) {
  return (
    <div
      className="hero-page flex flex-col items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <Bubbles />
      <div className="relative z-10 text-center px-4">
        <div className="mb-4" style={{ transformStyle: "preserve-3d" }}>
          {HERO_WORDS_DATA.map((wordData) => (
            <div
              key={wordData.word}
              className="block"
              style={{ marginBottom: wordData.marginBottom }}
            >
              {wordData.letters.map((l) => (
                <span
                  key={l.id}
                  className={`letter-animate ${l.color}`}
                  style={{
                    fontSize: l.fontSize,
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    letterSpacing: "0.05em",
                    animationDelay: `${l.delay}s`,
                  }}
                >
                  {l.letter}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="subtitle-animate">
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            G · O · N · D · A
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              marginBottom: "3rem",
            }}
          >
            Excellence • Innovation • Integrity
          </p>
        </div>

        <div className="button-animate">
          <button
            type="button"
            data-ocid="nav.primary_button"
            onClick={onExplore}
            style={{
              background: "linear-gradient(135deg, #FFD700, #FF4444, #4499FF)",
              backgroundSize: "200% 200%",
              animation: "shimmer 3s linear infinite",
              border: "none",
              borderRadius: "50px",
              padding: "1rem 3rem",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "white",
              cursor: "pointer",
              boxShadow:
                "0 8px 32px rgba(255, 215, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              letterSpacing: "0.1em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            🎓 Explore Our School
          </button>
        </div>
      </div>

      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "white",
            left: `${s.left}%`,
            top: `${s.top}%`,
            opacity: s.opacity,
            animation: `glowPulse ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function SchoolBox({ box, index }: { box: BoxData; index: number }) {
  const color = BOX_COLORS[index % BOX_COLORS.length];
  const isDark = [
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#2ECC8A",
    "#85C1E9",
    "#AED6F1",
  ].includes(color);

  return (
    <motion.div
      data-ocid={`box.item.${index + 1}`}
      className="school-card rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${color}dd, ${color}aa)`,
        boxShadow: `0 8px 32px ${color}66`,
        border: `1px solid ${color}88`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span style={{ fontSize: "2rem" }}>{box.icon}</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              fontWeight: 800,
              color: isDark ? "#1a1a2e" : "white",
              textShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            {box.title}
          </h3>
        </div>

        {box.badges && (
          <div className="flex flex-wrap gap-2 mb-3">
            {box.badges.map((badge) => (
              <span
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.25)",
                  color: isDark ? "#1a1a2e" : "white",
                  padding: "2px 10px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {box.images && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {box.images.map((src, ii) => (
              <div key={src} className="rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={box.imageLabels?.[ii] ?? "Lab"}
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.75rem",
                    color: isDark ? "#1a1a2e" : "rgba(255,255,255,0.9)",
                    marginTop: "4px",
                    fontWeight: 600,
                  }}
                >
                  {box.imageLabels?.[ii]}
                </p>
              </div>
            ))}
          </div>
        )}

        <p
          style={{
            color: isDark ? "#1a1a2e" : "rgba(255,255,255,0.92)",
            fontSize: "0.92rem",
            lineHeight: 1.65,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {box.content}
        </p>
      </div>
    </motion.div>
  );
}

function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="about-page">
      <Bubbles />

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10, 10, 30, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          data-ocid="nav.secondary_button"
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50px",
            padding: "0.5rem 1.5rem",
            color: "white",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.9rem",
            transition: "background 0.2s",
          }}
        >
          ← Back
        </button>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            fontWeight: 800,
            background: "linear-gradient(90deg, #FFD700, #FF4444, #4499FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AIMS Inter College, Gonda
        </span>
      </div>

      <div className="relative z-10 text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            marginBottom: "1rem",
          }}
          className="heading-shimmer"
        >
          About Our School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.1rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Discover what makes AIMS the school of choice in Gonda
        </motion.p>
      </div>

      <div
        className="relative z-10 px-4 pb-16"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {BOXES.map((box, i) => (
            <SchoolBox key={box.title} box={box} index={i} />
          ))}
        </div>
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.9rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255,255,255,0.6)",
            textDecoration: "underline",
          }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<"hero" | "about">("hero");

  useEffect(() => {
    if (page === "about") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <AnimatePresence mode="wait">
      {page === "hero" ? (
        <motion.div
          key="hero"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <HeroPage onExplore={() => setPage("about")} />
        </motion.div>
      ) : (
        <motion.div
          key="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutPage onBack={() => setPage("hero")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
