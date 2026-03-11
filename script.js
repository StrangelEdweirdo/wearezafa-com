const audioPath = document.body.dataset.audioPath || "assets/intro-audio.mp3";
const audio = new Audio(audioPath);

audio.volume = 0.85;
audio.preload = "auto";

function startAudio() {
  audio.play().catch(() => {
    const unlock = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener("pointerdown", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  const status = form.querySelector(".form-status");
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    if (!form.reportValidity()) {
      return;
    }

    if (form.action.includes("YOUR_FORM_ID")) {
      event.preventDefault();

      if (status) {
        status.textContent = "Add your real Formspree form ID to activate this form.";
      }

      return;
    }

    event.preventDefault();

    if (status) {
      status.textContent = "Sending...";
    }

    if (button) {
      button.disabled = true;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();

      if (status) {
        status.textContent = "Thanks. Your message has been sent.";
      }
    } catch (error) {
      if (status) {
        status.textContent = "Something went wrong. Please try again.";
      }
    } finally {
      if (button) {
        button.disabled = false;
      }
    }
  });
}

window.addEventListener("load", () => {
  startAudio();
  setupContactForm();
});
