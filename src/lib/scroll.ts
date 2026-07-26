const HEADER_OFFSET_PX = 64;

const normalizeSectionId = (sectionId: string) =>
  sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;

export const getSectionHash = (sectionId: string) =>
  `#${normalizeSectionId(sectionId)}`;

export const scrollToSection = (
  sectionId: string,
  behavior: ScrollBehavior = 'smooth'
) => {
  const targetId = normalizeSectionId(sectionId);
  const element = document.getElementById(targetId);

  if (!element) {
    return false;
  }

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;

  window.scrollTo({
    top: Math.max(top, 0),
    left: 0,
    behavior,
  });

  return true;
};
