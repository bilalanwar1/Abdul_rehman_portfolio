(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Loader */
  const loader = document.querySelector("[data-loader]");
  const progress = document.querySelector("[data-loader-progress]");
  if (loader && !sessionStorage.getItem("loaded")) {
    document.body.classList.add("is-loading");
    let pct = 0;
    const tick = () => {
      pct = Math.min(pct + Math.random() * 18 + 8, 100);
      if (progress) progress.style.width = pct + "%";
      if (pct < 100) requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          document.body.classList.add("loaded");
          document.body.classList.remove("is-loading");
          sessionStorage.setItem("loaded", "1");
        }, prefersReduced ? 0 : 400);
      }
    };
    tick();
  } else {
    document.body.classList.add("loaded");
    if (loader) loader.style.display = "none";
  }

  /* Navbar */
  const navbar = document.querySelector("[data-navbar]");
  if (navbar) {
    const toggle = navbar.querySelector(".navbar__toggle");
    const mobile = document.querySelector("[data-mobile-menu]");

    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const close = () => {
      navbar.classList.remove("is-open");
      if (mobile) mobile.classList.remove("is-open");
      document.body.style.overflow = "";
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    };
    const open = () => {
      navbar.classList.add("is-open");
      if (mobile) mobile.classList.add("is-open");
      document.body.style.overflow = "hidden";
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    };

    if (toggle) {
      toggle.addEventListener("click", () => {
        navbar.classList.contains("is-open") ? close() : open();
      });
    }
    mobile?.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 1100px)").matches) close();
    });

    /* Scrollspy */
    const links = Array.from(navbar.querySelectorAll("[data-nav]")).filter((l) =>
      (l.getAttribute("href") || "").includes("#")
    );
    const sections = links
      .map((l) => document.getElementById((l.getAttribute("href") || "").split("#")[1]))
      .filter(Boolean);
    if (sections.length) {
      const setActive = (id) => {
        links.forEach((l) => {
          const lid = (l.getAttribute("href") || "").split("#")[1];
          l.classList.toggle("active", lid === id);
        });
      };
      const spy = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
        { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* Typewriter */
  const tw = document.querySelector("[data-typewriter]");
  if (tw && !prefersReduced) {
    let roles = [];
    try { roles = JSON.parse(tw.dataset.roles || "[]"); } catch { roles = ["Amazon A+ / EBC Designer"]; }
    const el = tw.querySelector("[data-typewriter-text]");
    let ri = 0, ci = 0, del = false;
    function step() {
      if (!el || !roles.length) return;
      const cur = roles[ri % roles.length];
      if (!del) {
        el.textContent = cur.slice(0, ++ci);
        if (ci >= cur.length) { del = true; setTimeout(step, 1800); return; }
        setTimeout(step, 45);
      } else {
        el.textContent = cur.slice(0, --ci);
        if (ci <= 0) { del = false; ri++; setTimeout(step, 400); return; }
        setTimeout(step, 28);
      }
    }
    step();
  }

  /* Hero parallax */
  if (!prefersReduced) {
    const orbs = document.querySelectorAll("[data-parallax]");
    window.addEventListener(
      "mousemove",
      (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        orbs.forEach((o, i) => {
          const f = (i + 1) * 0.5;
          o.style.transform = `translate(${x * f}px, ${y * f}px)`;
        });
      },
      { passive: true }
    );
  }

  /* Theme toggle */
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const html = document.documentElement;
      const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
      html.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });

  /* Scroll to top */
  document.querySelectorAll("[data-scroll-top]").forEach((btn) => {
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
})();
