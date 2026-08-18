/* FormSubmit contact form handler */
(function () {
  const EMAIL = "hello@abdulrehman.com";

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const errorEl = form.querySelector(".form-error");
      const fields = form.querySelector(".form-fields");
      const successEl = form.querySelector(".form-success");

      if (errorEl) errorEl.classList.add("hidden");
      if (btn) {
        btn.disabled = true;
        const label = btn.getAttribute("data-submit-label") || btn.textContent.trim().split("\n")[0];
        btn.dataset.originalLabel = label;
        if (btn.classList.contains("btn-submit-dark")) {
          btn.childNodes[0].textContent = "Sending...";
        } else {
          btn.textContent = "Sending...";
        }
      }

      const data = {
        name: form.name?.value?.trim() || "",
        email: form.email?.value?.trim() || "",
        website: form.website?.value?.trim() || "Not provided",
        service: form.service?.value?.trim() || "",
        message: form.message?.value?.trim() || "",
        _subject: "New portfolio inquiry from " + (form.name?.value?.trim() || "visitor"),
        _template: "table",
      };

      try {
        const res = await fetch("https://formsubmit.co/ajax/" + EMAIL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || "Failed to send");
        if (fields) fields.classList.add("hidden");
        if (successEl) successEl.classList.remove("hidden");
      } catch (err) {
        if (errorEl) {
          errorEl.textContent = err.message || "Failed to send message. Please try again.";
          errorEl.classList.remove("hidden");
        }
        if (btn) {
          btn.disabled = false;
          const original = btn.dataset.originalLabel || "Send Message";
          if (btn.classList.contains("btn-submit-dark")) {
            btn.childNodes[0].textContent = original + " ";
          } else {
            btn.textContent = original;
          }
        }
      }
    });
  });
})();
