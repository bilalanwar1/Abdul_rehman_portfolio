(function () {
  function parseStat(el) {
    const raw = (el.dataset.count || "0").trim();
    const match = raw.match(/^([\d.]+)\s*(.*)$/);
    return {
      target: match ? parseFloat(match[1]) : 0,
      suffix: match ? match[2] : "",
      decimals: raw.includes(".") ? 1 : 0,
    };
  }

  function animate(el) {
    const { target, suffix, decimals } = parseStat(el);
    const duration = 2000;
    const start = performance.now();
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = (decimals ? val.toFixed(1) : Math.floor(val)) + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = (decimals ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(frame);
  }

  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  counters.forEach((c) => obs.observe(c));
})();
