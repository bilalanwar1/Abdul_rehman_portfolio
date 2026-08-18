(function () {
  const section = document.querySelector("[data-dashboard]");
  if (!section || typeof Chart === "undefined") return;

  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const colors = {
    gold: "#d4af37",
    goldLight: "rgba(212, 175, 55, 0.2)",
    blue: "#2563eb",
    blueLight: "rgba(37, 99, 235, 0.15)",
    cyan: "#06b6d4",
    meta: "#a855f7",
    green: "#22c55e",
    text: isLight ? "#52607a" : "#94a3b8",
    grid: isLight ? "rgba(15, 23, 42, 0.06)" : "rgba(255, 255, 255, 0.06)",
    tooltipBg: isLight ? "rgba(255, 255, 255, 0.98)" : "rgba(10, 22, 40, 0.95)",
    tooltipText: isLight ? "#0f172a" : "#ffffff",
  };

  /* Per-period sample data: KPIs + chart datasets */
  const DATA = {
    "7D": {
      kpis: { sessions: 21800, unitSession: 11.2, ctr: 3.5, acos: 18.4, orders: 720, cvr: 4.1, revenue: 48, spend: 11 },
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      spend: [1420, 1680, 1580, 1720, 1860, 1240, 1180],
      revenue: [5200, 6400, 6100, 6800, 7400, 4800, 4600],
      platform: [[42800, 1480, 22.4, 96.8], [23200, 820, 9.8, 38.4]],
      conversion: [4.6, 3.0, 2.7, 3.4, 5.1],
      roasTrend: [10.8, 11.1, 11.0, 11.6, 12.0, 11.4, 11.8],
    },
    "30D": {
      kpis: { sessions: 94200, unitSession: 11.8, ctr: 3.6, acos: 17.1, orders: 3180, cvr: 4.3, revenue: 188, spend: 47 },
      labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
      spend: [10800, 12400, 11600, 12800],
      revenue: [41200, 48600, 45400, 52800],
      platform: [[61200, 2140, 32.4, 138.6], [33000, 1040, 14.6, 54.2]],
      conversion: [4.7, 3.1, 2.8, 3.5, 5.2],
      roasTrend: [11.2, 11.8, 11.5, 12.1],
    },
    "90D": {
      kpis: { sessions: 284500, unitSession: 12.4, ctr: 3.8, acos: 15.8, orders: 9840, cvr: 4.6, revenue: 576, spend: 142 },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      spend: [18200, 21400, 24800, 23100, 27600, 30200],
      revenue: [68400, 81200, 95800, 89400, 112400, 128600],
      platform: [[184200, 6240, 98.4, 412.8], [100300, 3600, 43.6, 168.2]],
      conversion: [4.8, 3.2, 2.9, 3.6, 5.4],
      roasTrend: [10.4, 11.0, 11.6, 11.2, 12.0, 12.4],
    },
    "YTD": {
      kpis: { sessions: 612400, unitSession: 13.1, ctr: 4.0, acos: 14.6, orders: 21600, cvr: 4.9, revenue: 1267, spend: 308 },
      labels: ["Q1", "Q2", "Q3", "Q4"],
      spend: [64400, 80900, 88600, 74100],
      revenue: [245400, 330200, 372800, 318600],
      platform: [[398600, 13800, 214.6, 902.4], [213800, 7800, 93.4, 366.2]],
      conversion: [5.0, 3.4, 3.0, 3.7, 5.6],
      roasTrend: [11.0, 12.2, 12.8, 13.1],
    },
  };

  const KPI_FMT = {
    sessions: { prefix: "", suffix: "", decimals: 0 },
    unitSession: { prefix: "", suffix: "%", decimals: 1 },
    ctr: { prefix: "", suffix: "%", decimals: 1 },
    acos: { prefix: "", suffix: "%", decimals: 1 },
    orders: { prefix: "", suffix: "", decimals: 0 },
    cvr: { prefix: "", suffix: "%", decimals: 1 },
    revenue: { prefix: "$", suffix: "K", decimals: 0 },
    spend: { prefix: "$", suffix: "K", decimals: 0 },
  };

  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 900, easing: "easeOutQuart" },
    plugins: {
      legend: {
        labels: { color: colors.text, font: { family: "Inter", size: 12 }, padding: 16, usePointStyle: true },
      },
      tooltip: {
        backgroundColor: colors.tooltipBg,
        titleColor: colors.tooltipText,
        bodyColor: colors.text,
        borderColor: "rgba(212, 175, 55, 0.25)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: "Space Grotesk", weight: "600" },
        bodyFont: { family: "Inter" },
      },
    },
  };

  function scaleOpts() {
    return {
      x: {
        grid: { color: colors.grid, drawBorder: false },
        ticks: { color: colors.text, font: { family: "Inter", size: 11 } },
      },
      y: {
        grid: { color: colors.grid, drawBorder: false },
        ticks: { color: colors.text, font: { family: "Inter", size: 11 } },
      },
    };
  }

  function money(v) {
    return "$" + Number(v).toLocaleString();
  }

  function formatKpi(key, target) {
    const f = KPI_FMT[key];
    const val = f.decimals ? target.toFixed(f.decimals) : Math.round(target).toLocaleString();
    return f.prefix + val + f.suffix;
  }

  /* KPI animated counters that re-run on period change */
  const kpiEls = {};
  section.querySelectorAll("[data-dash-kpi]").forEach((el) => {
    kpiEls[el.dataset.kpiKey] = el;
  });

  function animateKpi(el, key, target) {
    const f = KPI_FMT[key];
    const from = parseFloat(el.dataset.current || "0");
    const duration = 900;
    const start = performance.now();
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = from + (target - from) * eased;
      el.textContent = f.prefix + (f.decimals ? val.toFixed(f.decimals) : Math.round(val).toLocaleString()) + f.suffix;
      if (t < 1) requestAnimationFrame(frame);
      else {
        el.textContent = formatKpi(key, target);
        el.dataset.current = String(target);
      }
    }
    requestAnimationFrame(frame);
  }

  function updateKpis(period) {
    const k = DATA[period].kpis;
    Object.keys(k).forEach((key) => {
      if (kpiEls[key]) animateKpi(kpiEls[key], key, k[key]);
    });
  }

  const charts = {};

  function buildCharts(period) {
    Chart.defaults.font.family = "Inter";
    const d = DATA[period];

    const spendRev = section.querySelector("[data-chart='spend-revenue']");
    if (spendRev) {
      charts.spendRev = new Chart(spendRev, {
        type: "line",
        data: {
          labels: d.labels,
          datasets: [
            { label: "Ad Spend", data: d.spend, borderColor: colors.blue, backgroundColor: colors.blueLight, fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 7, pointBackgroundColor: colors.blue },
            { label: "Revenue", data: d.revenue, borderColor: colors.gold, backgroundColor: colors.goldLight, fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 7, pointBackgroundColor: colors.gold },
          ],
        },
        options: {
          ...chartDefaults,
          scales: { ...scaleOpts(), y: { ...scaleOpts().y, ticks: { ...scaleOpts().y.ticks, callback: (v) => "$" + (v / 1000) + "k" } } },
          plugins: { ...chartDefaults.plugins, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (ctx) => ctx.dataset.label + ": " + money(ctx.parsed.y) } } },
        },
      });
    }

    const platform = section.querySelector("[data-chart='platform']");
    if (platform) {
      charts.platform = new Chart(platform, {
        type: "bar",
        data: {
          labels: ["Sessions", "Orders", "Spend ($K)", "Revenue ($K)"],
          datasets: [
            { label: "Amazon Ads", data: d.platform[0], backgroundColor: colors.blue, borderRadius: 6, borderSkipped: false },
            { label: "Wholesale", data: d.platform[1], backgroundColor: colors.meta, borderRadius: 6, borderSkipped: false },
          ],
        },
        options: { ...chartDefaults, scales: scaleOpts() },
      });
    }

    const conversion = section.querySelector("[data-chart='conversion']");
    if (conversion) {
      charts.conversion = new Chart(conversion, {
        type: "doughnut",
        data: {
          labels: ["A+ Content", "Main Images", "Sponsored Products", "Brand Story", "Listing Copy"],
          datasets: [{ data: d.conversion, backgroundColor: [colors.gold, colors.blue, colors.cyan, colors.meta, colors.green], borderColor: isLight ? "#ffffff" : "#0a1628", borderWidth: 3, hoverOffset: 8 }],
        },
        options: {
          ...chartDefaults,
          cutout: "62%",
          plugins: { ...chartDefaults.plugins, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (ctx) => ctx.label + ": " + ctx.parsed + "%" } } },
        },
      });
    }

    const roas = section.querySelector("[data-chart='roas']");
    if (roas) {
      charts.roas = new Chart(roas, {
        type: "line",
        data: {
          labels: d.labels,
          datasets: [{ label: "Unit Session %", data: d.roasTrend, borderColor: colors.gold, backgroundColor: "rgba(212, 175, 55, 0.18)", fill: true, tension: 0.45, pointRadius: 0, pointHoverRadius: 6, pointBackgroundColor: colors.gold }],
        },
        options: {
          ...chartDefaults,
          scales: { ...scaleOpts(), y: { ...scaleOpts().y, min: 8, max: 16, ticks: { ...scaleOpts().y.ticks, callback: (v) => v + "%" } } },
          plugins: { ...chartDefaults.plugins, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (ctx) => "Unit Session %: " + ctx.parsed.y + "%" } } },
        },
      });
    }
  }

  function updateCharts(period) {
    const d = DATA[period];
    if (charts.spendRev) {
      charts.spendRev.data.labels = d.labels;
      charts.spendRev.data.datasets[0].data = d.spend;
      charts.spendRev.data.datasets[1].data = d.revenue;
      charts.spendRev.update();
    }
    if (charts.platform) {
      charts.platform.data.datasets[0].data = d.platform[0];
      charts.platform.data.datasets[1].data = d.platform[1];
      charts.platform.update();
    }
    if (charts.conversion) {
      charts.conversion.data.datasets[0].data = d.conversion;
      charts.conversion.update();
    }
    if (charts.roas) {
      charts.roas.data.labels = d.labels;
      charts.roas.data.datasets[0].data = d.roasTrend;
      charts.roas.update();
    }
  }

  function currentPeriod() {
    const active = section.querySelector(".dashboard__period-btn.is-active");
    return (active && active.dataset.period) || "90D";
  }

  let built = false;
  function init() {
    if (built) return;
    built = true;
    const period = currentPeriod();
    buildCharts(period);
    updateKpis(period);
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) init(); }),
      { threshold: 0.15 }
    ).observe(section);
  } else {
    init();
  }

  section.querySelectorAll(".dashboard__period-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      section.querySelectorAll(".dashboard__period-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const period = btn.dataset.period || "90D";
      init();
      updateCharts(period);
      updateKpis(period);
    });
  });
})();
