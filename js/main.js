(function () {
  /* Progress bar */
  const progressBar = document.querySelector("[data-progress-bar]");
  if (progressBar) {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scale = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = `scaleX(${scale})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Header + mobile menu */
  const header = document.querySelector(".site-header");
  if (header) {
    const toggle = header.querySelector(".menu-toggle");
    const overlay = header.querySelector(".mobile-overlay");

    function closeMenu() {
      header.classList.remove("menu-open");
      document.body.style.overflow = "";
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      header.classList.add("menu-open");
      document.body.style.overflow = "hidden";
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    }

    if (toggle) {
      toggle.addEventListener("click", () => {
        if (header.classList.contains("menu-open")) closeMenu();
        else openMenu();
      });
    }
    if (overlay) overlay.addEventListener("click", closeMenu);
    header.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* Active nav + scrollspy */
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "") || "/";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "/";
    if (href.startsWith("/#")) return;
    const normalized = href.replace(/\/$/, "") || "/";
    if (normalized === "/" && (currentPath === "/" || currentPath === "")) link.classList.add("active");
    else if (currentPath === normalized || currentPath.startsWith(normalized + "/")) link.classList.add("active");
  });

  const spyLinks = navLinks.filter((l) => (l.getAttribute("href") || "").includes("#"));
  const spySections = spyLinks
    .map((l) => {
      const id = (l.getAttribute("href") || "").split("#")[1];
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (spySections.length) {
    const setActive = (id) => {
      spyLinks.forEach((l) => {
        const linkId = (l.getAttribute("href") || "").split("#")[1];
        l.classList.toggle("active", linkId === id);
      });
    };
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    spySections.forEach((s) => spy.observe(s));
  }

  /* Scroll to top */
  const scrollTopBtn = document.querySelector("[data-scroll-top]");
  if (scrollTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        scrollTopBtn.classList.toggle("hidden", window.scrollY < 400);
      },
      { passive: true }
    );
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Typewriter */
  const typewriter = document.querySelector("[data-typewriter]");
  if (typewriter) {
    let roles = [];
    try {
      roles = JSON.parse(typewriter.dataset.roles || "[]");
    } catch {
      roles = ["Amazon A+ / EBC Designer"];
    }
    const textEl = typewriter.querySelector("[data-typewriter-text]");
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      if (!textEl || !roles.length) return;
      const current = roles[roleIndex % roles.length];
      if (!deleting) {
        textEl.textContent = current.slice(0, charIndex + 1);
        charIndex += 1;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 50);
      } else {
        textEl.textContent = current.slice(0, charIndex - 1);
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          roleIndex += 1;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 30);
      }
    }
    tick();
  }

  /* Skills reveal */
  const skills = document.querySelectorAll("[data-skill]");
  if (skills.length && "IntersectionObserver" in window) {
    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            skillObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    skills.forEach((s) => skillObs.observe(s));
  }

  /* Experience accordion */
  const expAccordion = document.querySelector("[data-exp-accordion]");
  if (expAccordion) {
    const tabs = Array.from(expAccordion.querySelectorAll("[data-exp-tab]"));
    const panels = Array.from(expAccordion.querySelectorAll("[data-exp-panel]"));
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const idx = tab.dataset.expTab;
        tabs.forEach((t) => {
          const active = t.dataset.expTab === idx;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-expanded", active ? "true" : "false");
        });
        panels.forEach((p) => p.classList.toggle("is-active", p.dataset.expPanel === idx));
      });
    });
  }

  /* Work filter + show all */
  const workTabs = document.querySelector("[data-work-tabs]");
  const workItems = Array.from(document.querySelectorAll("[data-work-item]"));
  const showAllBtn = document.querySelector("[data-show-all-work]");
  let showAll = false;

  function applyWorkFilter(filter) {
    workItems.forEach((item, i) => {
      const tags = (item.dataset.tags || "").split("|");
      const match = filter === "all" || tags.includes(filter);
      const overLimit = !showAll && i >= 6 && filter === "all";
      item.style.display = match && !overLimit ? "" : "none";
    });
  }

  if (workTabs) {
    workTabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-work-filter]");
      if (!btn) return;
      const filter = btn.dataset.workFilter || "all";
      workTabs.querySelectorAll(".nm-work-tab").forEach((t) => t.classList.toggle("is-active", t === btn));
      applyWorkFilter(filter);
    });
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      showAll = !showAll;
      showAllBtn.textContent = showAll ? "Show Less" : "Show All";
      const active = workTabs?.querySelector(".nm-work-tab.is-active");
      applyWorkFilter(active?.dataset.workFilter || "all");
    });
    applyWorkFilter("all");
  }

  /* Achievements lightbox */
  const achieveList = document.querySelector("[data-achieve-list]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxContent = document.querySelector("[data-lightbox-content]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");
  const achieveTemplates = Array.from(document.querySelectorAll("[data-achieve-data]"));

  if (achieveList && lightbox && lightboxContent) {
    achieveList.addEventListener("click", (e) => {
      const item = e.target.closest("[data-achieve-index]");
      if (!item) return;
      const idx = Number(item.dataset.achieveIndex);
      const tpl = achieveTemplates[idx];
      if (!tpl) return;
      lightboxContent.innerHTML = "";
      lightboxContent.appendChild(tpl.content.cloneNode(true));
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  /* Horizontal testimonials scroll */
  const hScroll = document.querySelector("[data-testimonials-hscroll]");
  const hTrack = document.querySelector("[data-testimonials-track]");
  if (hScroll && hTrack) {
    function updateHScroll() {
      const rect = hScroll.getBoundingClientRect();
      const scrollHeight = hScroll.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollHeight));
      const maxShift = hTrack.scrollWidth - window.innerWidth + 48;
      hTrack.style.transform = `translateX(${-progress * maxShift}px)`;
    }
    window.addEventListener("scroll", updateHScroll, { passive: true });
    window.addEventListener("resize", updateHScroll);
    updateHScroll();
  }

  /* Legacy testimonial slider (subpages) */
  document.querySelectorAll("[data-testimonials-slider]").forEach((slider) => {
    const track = slider.querySelector(".testimonials-slider-track");
    const slides = Array.from(slider.querySelectorAll(".testimonial-slide"));
    const dots = Array.from(slider.querySelectorAll(".testimonials-slider-dot"));
    if (!track || slides.length === 0) return;

    let index = 0;
    let timer = null;

    function slidesPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function maxIndex() {
      return Math.max(0, slides.length - slidesPerView());
    }

    function goTo(nextIndex) {
      index = Math.max(0, Math.min(nextIndex, maxIndex()));
      const offset = (index * 100) / slidesPerView();
      track.style.transform = `translateX(-${offset}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    }

    function next() {
      goTo(index >= maxIndex() ? 0 : index + 1);
    }

    function startAutoplay() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goTo(Number(dot.dataset.index) || 0);
        startAutoplay();
      });
    });

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
    window.addEventListener("resize", () => goTo(Math.min(index, maxIndex())));
    goTo(0);
    startAutoplay();
  });

  /* Load more projects (projects page) */
  const loadBtn = document.getElementById("load-more-projects");
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      document.querySelectorAll(".project-card.hidden-project").forEach((el) => {
        el.classList.remove("hidden-project");
      });
      loadBtn.closest(".load-more-wrap")?.classList.add("hidden");
    });
  }
})();
