particlesJS("particles-js", {
  particles: {
    number: { value: 15, density: { enable: true, value_area: 300 } },
    color: { value: "#ffffff" },
    shape: { type: "triangle" },
    opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 5, random: true, anim: { enable: true, speed: 4, size_min: 0.3, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "bounce", bounce: false }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  },
  retina_detect: true
});

const translations = {
  de: {
    brandLabel: "Portfolio",
    navAbout: "Über mich",
    navSkills: "Kenntnisse",
    navProjects: "Projekte",
    navContact: "Kontakt",
    eyebrow: "Umschüler zum Anwendungsentwickler",
    heroTitleLine1: "Solide Grundlagen.",
    heroTitleLine2: "Klare Motivation. Echte Entwicklung.",
    heroText: "Ich befinde mich aktuell in der Umschulung zum Fachinformatiker für Anwendungsentwicklung mit Fokus auf Backend- und Webentwicklung. Ich arbeite strukturiert, lösungsorientiert und entwickle meine Fähigkeiten kontinuierlich durch praktische Projekte weiter.",
    heroPill1: "Backend- & Webentwicklung",
    heroPill2: "Sauberer Code",
    heroPill3: "Praktische Projekte",
    btnProjects: "Projekte ansehen",
    btnContact: "Kontakt",
    stat1Label: "Status",
    stat1Value: "Umschüler",
    stat2Label: "Fokus",
    stat2Value: "Anwendungsentwicklung",
    stat3Label: "Ziel",
    stat3Value: "Praxis & Wachstum",
    strengthLabel: "Stärke",
    strengthText: "Strukturiertes Lernen und sauberes Arbeiten",
    currentLabel: "Aktuell",
    currentText: "Aufbau eines starken Portfolios",
    aboutLabel: "Über mich",
    aboutTitle: "Technisches Interesse, Motivation und ein klarer Lernweg.",
    aboutLead: "Ich entwickle mein Profil gezielt in Richtung Anwendungsentwicklung und verbinde Lernbereitschaft mit praktischer Umsetzung.",
    aboutText1: "Ich befinde mich aktuell in der Umschulung zum Fachinformatiker für Anwendungsentwicklung und entwickle meine Kenntnisse gezielt in den Bereichen Backend- und Webentwicklung weiter. Mein Fokus liegt auf Python, SQL, modernen Webtechnologien sowie auf strukturiertem und sauberem Arbeiten.",
    aboutText2: "Ich arbeite gerne logisch und lösungsorientiert und habe Spaß daran, funktionierende Anwendungen Schritt für Schritt aufzubauen. Dabei lege ich großen Wert auf verständlichen Code, klare Strukturen und kontinuierliche Weiterentwicklung durch praktische Projekte und reale Aufgaben.",
    journeyTitle: "Was mir wichtig ist",
    journey1Title: "Praktisches Lernen",
    journey1Text: "Ich lerne am besten, wenn ich Inhalte direkt in Übungen und Projekten umsetze.",
    journey2Title: "Struktur",
    journey2Text: "Ich arbeite gerne klar, nachvollziehbar und mit Fokus auf saubere Lösungen.",
    journey3Title: "Weiterentwicklung",
    journey3Text: "Jedes Projekt ist für mich eine Möglichkeit, Erfahrung zu sammeln und besser zu werden.",
    skillsLabel: "Kenntnisse",
    skillsTitle: "Technische Inhalte und persönliche Stärken.",
    skillsLead: "Eine Kombination aus aktuellen Lerninhalten und Fähigkeiten, die ich Schritt für Schritt ausbaue.",
    codingTitle: "Technische Kenntnisse",
    softTitle: "Arbeitsweise & Stärken",
    tagOop: "Objektorientierte Programmierung",
    tagDb: "Datenbanken",
    tagAppDev: "Anwendungsentwicklung",
    tagProject: "Projektmanagement",
    tagNetworks: "IT-Netzwerke",
    tagSecurity: "IT-Sicherheit",
    tagMath: "Mathematik",
    tagElectro: "Elektrotechnik",
    tagWiso: "Wirtschaft & Sozialkunde",
    tagRewe: "Rechnungswesen",
    tagMukb: "Marketing & Unternehmensführung",
    soft1: "Lernbereitschaft",
    soft2: "Zuverlässigkeit",
    soft3: "Strukturiertes Arbeiten",
    soft4: "Motivation",
    soft5: "Detailorientierung",
    soft6: "Problemlösung",
    soft7: "Anpassungsfähigkeit",
    soft8: "Kontinuierliches Lernen",
    softTeam: "Teamfähigkeit",
    softCommunication: "Kommunikation",
    softIndependent: "Selbstständiges Arbeiten",
    softTime: "Zeitmanagement",
    softResilience: "Belastbarkeit",
    projectsLabel: "Projekte",
    projectsTitle: "Projekte und Arbeiten, die weiter wachsen.",
    projectsLead: "Hier zeige ich Projekte, an denen ich gearbeitet habe oder die sich aktuell in Entwicklung befinden.",
    project1Title: "Portfolio-Website",
    project1Text: "Persönliche Portfolio-Website mit HTML, CSS und JavaScript, die laufend erweitert und verbessert wird.",
    project2Title: "Star Power Radio Android App",
    project2Text: "Android-App für Live-Radio-Streaming mit ExoPlayer, Hintergrunddienst und Benachrichtigungen.",
    project3Title: "Python- und SQL-Übungen",
    project3Text: "Praktische Übungen zu Programmierlogik, Datenbankabfragen, Datenstrukturen und kleinen Anwendungsideen.",
    project4Title: "Schulprojekte in Entwicklung",
    project4Text: "Aufgaben und Projektarbeiten aus der Umschulung mit Fokus auf Grundlagen der Softwareentwicklung.",
    metaLearning: "Lernen",
    metaGrowth: "Wachstum",
    metaCode: "Code",
    contactLabel: "Kontakt",
    contactTitle: "Direkt erreichbar.",
    contactLead: "Für Fragen, Austausch oder berufliche Möglichkeiten kannst du mich direkt kontaktieren.",
    contactInfoTitle: "Kontaktinformationen",
    emailLabel: "E-Mail",
    focusTitle: "Aktueller Fokus",
    focusText: "Ich arbeite daran, meine Programmierkenntnisse weiter auszubauen, mehr praktische Erfahrung zu sammeln und mein Portfolio Schritt für Schritt mit echten Projekten zu erweitern.",
    profileLabel: "Profilbild",
    profileText: "Professioneller erster Eindruck",
    footerText: "Portfolio für Anwendungsentwicklung, Lernen und praktische Weiterentwicklung."
  },
  en: {
    brandLabel: "Portfolio",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    eyebrow: "Trainee application developer",
    heroTitleLine1: "Strong foundations.",
    heroTitleLine2: "Clear motivation. Real progress.",
    heroText: "I am currently retraining as an application developer with a focus on backend and web development. I work in a structured, solution-oriented way and continuously improve my skills through practical projects.",
    heroPill1: "Backend & web development",
    heroPill2: "Clean code",
    heroPill3: "Practical projects",
    btnProjects: "View projects",
    btnContact: "Contact",
    stat1Label: "Status",
    stat1Value: "Trainee",
    stat2Label: "Focus",
    stat2Value: "Application development",
    stat3Label: "Goal",
    stat3Value: "Practice & growth",
    strengthLabel: "Strength",
    strengthText: "Structured learning and clean work",
    currentLabel: "Current",
    currentText: "Building a strong portfolio",
    aboutLabel: "About",
    aboutTitle: "Technical curiosity, motivation and a clear learning path.",
    aboutLead: "I am shaping my profile toward application development and combining willingness to learn with practical implementation.",
    aboutText1: "I am currently retraining as an application developer and am deliberately expanding my skills in backend and web development. My focus is on Python, SQL, modern web technologies, as well as structured and clean work.",
    aboutText2: "I enjoy working logically and in a solution-oriented way and like building functional applications step by step. I place great value on understandable code, clear structures and continuous growth through practical projects and real tasks.",
    journeyTitle: "What matters to me",
    journey1Title: "Practical learning",
    journey1Text: "I learn best when I directly apply topics in exercises and projects.",
    journey2Title: "Structure",
    journey2Text: "I like to work clearly, logically and with a focus on clean solutions.",
    journey3Title: "Growth",
    journey3Text: "Every project is an opportunity for me to gain experience and improve.",
    skillsLabel: "Skills",
    skillsTitle: "Technical skills and personal strengths.",
    skillsLead: "A combination of current learning topics and abilities that I am continuously developing.",
    codingTitle: "Technical skills",
    softTitle: "Work style & strengths",
    tagOop: "Object-oriented programming",
    tagDb: "Databases",
    tagAppDev: "Application development",
    tagProject: "Project management",
    tagNetworks: "IT networks",
    tagSecurity: "IT security",
    tagMath: "Mathematics",
    tagElectro: "Electrical engineering",
    tagWiso: "Business and social studies",
    tagRewe: "Accounting",
    tagMukb: "Marketing & management",
    soft1: "Willingness to learn",
    soft2: "Reliability",
    soft3: "Structured work",
    soft4: "Motivation",
    soft5: "Attention to detail",
    soft6: "Problem solving",
    soft7: "Adaptability",
    soft8: "Continuous learning",
    softTeam: "Teamwork",
    softCommunication: "Communication",
    softIndependent: "Independent work",
    softTime: "Time management",
    softResilience: "Resilience",
    projectsLabel: "Projects",
    projectsTitle: "Projects and work that keep growing.",
    projectsLead: "Here I show projects I have worked on or that are currently in progress.",
    project1Title: "Portfolio website",
    project1Text: "Personal portfolio website built with HTML, CSS and JavaScript, continuously expanded and improved.",
    project2Title: "Star Power Radio Android App",
    project2Text: "Android app for live radio streaming with ExoPlayer, background service and notifications.",
    project3Title: "Python and SQL exercises",
    project3Text: "Practical exercises in programming logic, database queries, data structures and small application ideas.",
    project4Title: "School projects in progress",
    project4Text: "Assignments and project work from my retraining program with a focus on software development fundamentals.",
    metaLearning: "Learning",
    metaGrowth: "Growth",
    metaCode: "Code",
    contactLabel: "Contact",
    contactTitle: "Easy to reach.",
    contactLead: "For questions, exchange or professional opportunities, you can contact me directly.",
    contactInfoTitle: "Contact information",
    emailLabel: "Email",
    focusTitle: "Current focus",
    focusText: "I am working on improving my programming skills, gaining more practical experience and expanding my portfolio step by step with real projects.",
    profileLabel: "Profile picture",
    profileText: "Professional first impression",
    footerText: "Portfolio for application development, learning and practical growth."
  }
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "de";
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[selected][key]) {
      element.textContent = translations[selected][key];
    }
  });

  document.querySelectorAll("[data-code-de]").forEach((element) => {
    const text = selected === "de"
      ? element.getAttribute("data-code-de")
      : element.getAttribute("data-code-en");
    if (text) {
      element.textContent = text;
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === selected);
  });
}

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-lang-btn"));
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const glow = document.querySelector(".bg-glow");
window.addEventListener("mousemove", (event) => {
  if (!glow) return;
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  glow.style.setProperty("--mx", `${x}%`);
  glow.style.setProperty("--my", `${y}%`);
});

setLanguage("de");

let lastScrollY = window.scrollY;
const header = document.querySelector('.site-header');

function handleMobileHeader() {
  if (!header) return;
  if (window.innerWidth > 760) {
    header.classList.remove('hide-on-scroll');
    return;
  }

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 10) {
    header.classList.remove('hide-on-scroll');
  } else if (currentScrollY > lastScrollY) {
    header.classList.add('hide-on-scroll');
  } else {
    header.classList.remove('hide-on-scroll');
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleMobileHeader);
window.addEventListener('resize', handleMobileHeader);
handleMobileHeader();

