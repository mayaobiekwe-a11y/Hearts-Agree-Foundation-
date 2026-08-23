document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  initRevealOnScroll();
  initCountUp();
});

function initRevealOnScroll() {
  const selector = ".pillar-grid > div, .board-grid > div, .action-grid > div, .growth-col, .ways-list li, .quote, .photo-grid img, .timeline-photo, .portrait-photo";
  const groupCounts = new Map();
  const toObserve = [];

  document.querySelectorAll(selector).forEach((el) => {
    const parent = el.parentElement;
    const idx = groupCounts.get(parent) || 0;
    groupCounts.set(parent, idx + 1);

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.92) return;

    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(idx, 4) * 90}ms`;
    toObserve.push(el);
  });

  if (!toObserve.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  toObserve.forEach((el) => observer.observe(el));
}

function initCountUp() {
  const targets = document.querySelectorAll(".hero-figure-num, .growth-value");
  if (!targets.length) return;

  const animate = (el) => {
    const match = el.textContent.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    const end = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const duration = 1100;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * end) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  targets.forEach((el) => observer.observe(el));
}
