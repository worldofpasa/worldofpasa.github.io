const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Use light theme" : "Use dark theme");
  themeMeta?.setAttribute("content", isDark ? "#11181e" : "#f3f5f7");
}

applyTheme(root.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("specpasa-theme", nextTheme);
  } catch (error) {
    // Theme preference remains active for the current page when storage is unavailable.
  }
});

const tourViews = {
  workspace: {
    label: "Illustrative SpecPasa workspace view",
    title: "Build and review in the same document.",
    caption: "Authors, reviewers, inline threads, references, and freeze controls share one workspace."
  },
  versions: {
    label: "Illustrative SpecPasa version history view",
    title: "Let the team decide when a draft becomes a version.",
    caption: "Collaborate freely in the working draft; create explicit snapshots when alignment matters."
  },
  askai: {
    label: "Illustrative SpecPasa Ask AI composer",
    title: "Bring review feedback into the next AI pass.",
    caption: "Select a provider, inspect shared references, and include the team’s open threads as generation context."
  },
  providers: {
    label: "Illustrative SpecPasa provider settings view",
    title: "Use the providers your deployment enables.",
    caption: "Local CLIs, Ollama, and configured cloud adapters appear through one provider layer."
  }
};

const tourButtons = [...document.querySelectorAll("[data-tour]")];
const mockSurface = document.querySelector("[data-mock-surface]");
const tourTitle = document.querySelector("[data-tour-title]");
const tourCaption = document.querySelector("[data-tour-caption]");

function selectTour(view) {
  const content = tourViews[view];
  if (!content || !mockSurface) return;
  tourButtons.forEach((button) => {
    const isSelected = button.dataset.tour === view;
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });
  const activeButton = tourButtons.find((button) => button.dataset.tour === view);
  document.querySelector("#tour-panel")?.setAttribute("aria-labelledby", activeButton?.id || "tour-tab-workspace");
  mockSurface.dataset.mockMode = view;
  mockSurface.setAttribute("aria-label", content.label);
  if (tourTitle) tourTitle.textContent = content.title;
  if (tourCaption) tourCaption.textContent = content.caption;
}

tourButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectTour(button.dataset.tour));
  button.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tourButtons.length) % tourButtons.length;
    tourButtons[nextIndex].focus();
    selectTour(tourButtons[nextIndex].dataset.tour);
  });
});

const copyButton = document.querySelector("[data-copy-command]");
copyButton?.addEventListener("click", async () => {
  const command = document.querySelector("[data-command]")?.textContent?.trim();
  if (!command) return;
  const originalLabel = copyButton.textContent;
  try {
    await navigator.clipboard.writeText(command);
    copyButton.textContent = "Copied";
  } catch (error) {
    copyButton.textContent = "Select command";
  }
  setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 1800);
});

const revealTargets = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const header = document.querySelector("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
