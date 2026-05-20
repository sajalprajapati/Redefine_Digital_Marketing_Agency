import { useEffect, useRef } from "react";

/**
 * Renders a fixed full-screen background image layer with:
 *  - Scroll parallax (background translates ~10% of scrollY)
 *  - Subtle mouse-move tilt (±6px) for extra depth
 */
export const SiteBackground = () => {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    let raf = 0;
    const apply = () => {
      if (ref.current) {
        const ty = -scroll.current * 0.1; // parallax against scroll
        const mx = mouse.current.x * 6;
        const my = mouse.current.y * 6;
        ref.current.style.transform = `scale(1.08) translate3d(${mx}px, ${ty + my}px, 0)`;
      }
      raf = 0;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(apply); };

    const onScroll = () => { scroll.current = window.scrollY || window.pageYOffset; schedule(); };
    const onMove = (e) => {
      const w = window.innerWidth, h = window.innerHeight;
      mouse.current.x = (e.clientX / w) * 2 - 1;
      mouse.current.y = (e.clientY / h) * 2 - 1;
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="site-bg" aria-hidden="true" data-testid="site-bg-layer" />
      <div className="site-bg-vignette" aria-hidden="true" />
    </>
  );
};
