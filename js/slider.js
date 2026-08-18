(function () {
  document.querySelectorAll("[data-testimonials-slider]").forEach((slider) => {
    const viewport = slider.querySelector(".testimonials-slider__viewport");
    const track = slider.querySelector("[data-slider-track]");
    const prev = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");
    if (!track || !viewport) return;

    const originals = Array.from(track.querySelectorAll(".testimonial-slide"));
    if (!originals.length) return;

    let slides = [];
    let index = 0;
    let timer = null;
    let animating = false;

    function perView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function slideWidth() {
      return viewport.clientWidth / perView();
    }

    function buildLoop() {
      track.innerHTML = "";
      const pv = perView();
      const clonesBefore = originals.slice(-pv).map((n) => n.cloneNode(true));
      const clonesAfter = originals.slice(0, pv).map((n) => n.cloneNode(true));
      clonesBefore.forEach((n) => track.appendChild(n));
      originals.forEach((n) => track.appendChild(n.cloneNode(true)));
      clonesAfter.forEach((n) => track.appendChild(n));
      slides = Array.from(track.children);
      index = pv;
      setPosition(false);
    }

    function setPosition(animate) {
      const offset = index * slideWidth();
      track.style.transition = animate ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)" : "none";
      track.style.transform = `translateX(-${offset}px)`;
    }

    function normalize() {
      const pv = perView();
      const total = originals.length;
      if (index >= total + pv) {
        index = pv;
        setPosition(false);
      } else if (index < pv) {
        index = total + pv - 1;
        setPosition(false);
      }
    }

    function step(dir) {
      if (animating) return;
      animating = true;
      index += dir;
      setPosition(true);
    }

    track.addEventListener("transitionend", () => {
      normalize();
      animating = false;
    });

    function start() {
      stop();
      timer = setInterval(() => step(1), 4500);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    prev?.addEventListener("click", () => {
      step(-1);
      start();
    });
    next?.addEventListener("click", () => {
      step(1);
      start();
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildLoop();
        start();
      }, 150);
    });

    buildLoop();
    start();
  });
})();
