const SERVICES = [
  {
    title: "Web Development",
    description:
      "We design and build modern websites that clearly present your brand, guide visitors toward action, and perform smoothly across devices. From business websites to landing pages and portfolio platforms, we focus on clean design, stronger user experience, and practical functionality.",
  },
  {
    title: "SaaS Development",
    description:
      "We create scalable web applications that help businesses automate workflows, manage users, and deliver digital services more efficiently. Whether you need a client portal, internal tool, or custom platform, we build software around real business processes and future growth.",
  },
  {
    title: "E-commerce",
    description:
      "We build online stores that make buying easier, build trust, and help turn visitors into paying customers. Our e-commerce solutions focus on product presentation, smooth navigation, secure checkout flow, and a shopping experience designed for conversion.",
  },
  {
    title: "SEO",
    description:
      "Our SEO approach combines technical optimization, keyword strategy, and content improvements to help your site rank better and reach the right audience. We focus on long-term visibility, stronger search performance, and making your website easier for both users and search engines to understand.",
  },
  {
    title: "Graphic Design",
    description:
      "We create visuals that make your business feel polished, memorable, and credible. From logos and social media graphics to landing page design and marketing creatives, we design with clarity, consistency, and audience engagement in mind.",
  },
  {
    title: "IT Support",
    description:
      "We provide dependable technical support to keep your systems running smoothly and reduce disruptions in day-to-day operations. Whether it’s troubleshooting, setup, maintenance, or digital workflow support, we help businesses stay productive and confident with their technology.",
  },
  {
    title: "Database Management",
    description:
      "We organize, secure, and maintain databases so your important information stays accurate, accessible, and easy to use. From structure and performance tuning to data cleanup and reliability improvements, we help businesses make better decisions with well-managed information.",
    wide: true,
  },
];

function renderServices(grid, services) {
  grid.innerHTML = "";
  services.forEach(({ title, description, wide }) => {
    const card = document.createElement("div");
    card.className = wide ? "service-card service-card-wide" : "service-card";

    const content = document.createElement("div");
    content.className = "service-content";

    const heading = document.createElement("h3");
    heading.className = "service-title";
    heading.textContent = title;

    const body = document.createElement("p");
    body.className = "service-description";
    body.textContent = description;

    content.append(heading, body);
    card.appendChild(content);
    grid.appendChild(card);
  });
}

const servicesGrid = document.querySelector(".services-grid");
if (servicesGrid) renderServices(servicesGrid, SERVICES);

// Ticker contents live here only; the seamless loop is built by cloning
// the track once instead of duplicating the markup by hand.
const TICKERS = {
  services: [
    "Web Development",
    "SaaS Development",
    "E-Commerce",
    "SEO",
    "Graphic Design",
    "IT Support",
    "Database Management",
  ],
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Python",
    "WordPress",
    "Git",
    "GitHub",
  ],
};

function renderTicker(track, items) {
  track.innerHTML = "";
  for (let pass = 0; pass < 2; pass++) {
    items.forEach((label) => {
      const span = document.createElement("span");
      span.className = "ticker-item";
      span.textContent = label;
      track.appendChild(span);
    });
  }
}

document.querySelectorAll(".ticker-track[data-ticker]").forEach((track) => {
  const items = TICKERS[track.dataset.ticker] || [];
  renderTicker(track, items);
});

/*MOBILE NAVIGATION
  The hamburger is only visible below 1024px (see style.css),
  but wiring the listeners unconditionally is harmless. 
*/

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

function setMenuOpen(open) {
  if (!navToggle || !mobileMenu) return;

  mobileMenu.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    setMenuOpen(!mobileMenu.classList.contains("is-open"));
  });

  // Close on link tap so the target section is immediately visible.
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  // Escape closes the panel.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  // Growing back past the tablet breakpoint restores the desktop nav.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) setMenuOpen(false);
  });
}
