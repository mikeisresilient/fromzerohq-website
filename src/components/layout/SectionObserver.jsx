import { useEffect } from "react";
import { useActiveSection } from "../../context/ActiveSectionContext";
import { useScrollContext } from "../../context/ScrollContext";

function SectionObserver() {
  const { setActiveSection } = useActiveSection();

  const {
    dashboardRef,
    solutionRef,
    processRef,
    faqRef,
  } = useScrollContext();

  useEffect(() => {
    const sections = [
      { key: "platform", ref: dashboardRef },
      { key: "solutions", ref: solutionRef },
      { key: "process", ref: processRef },
      { key: "faq", ref: faqRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (!visible) return;

        const match = sections.find(
          (section) => section.ref.current === visible.target
        );

        if (match) {
          setActiveSection(match.key);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [
    dashboardRef,
    solutionRef,
    processRef,
    faqRef,
    setActiveSection,
  ]);

  return null;
}

export default SectionObserver;