import { createElement } from "./elements.js";

export function createFooterComponent() {
  const newSection = createElement("section", { className: "footer" });
  const gitIcon = createElement("i", { className: "fab fa-github icons" });
  const linkedinIcon = createElement("i", {
    className: "fab fa-linkedin icons",
  });
  const youtubeIcon = createElement("i", { className: "fab fa-youtube icons" });

  newSection.append(linkedinIcon);
  newSection.append(gitIcon);
  newSection.append(youtubeIcon);
  return newSection;
}
