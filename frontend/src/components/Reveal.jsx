import { useEffect, useRef, useState } from "react";

/**
 * Intersection-observer based reveal hook.
 * Returns [ref, isInView]. Element fades/slides in once it enters viewport.
 */
export const useInView = (options = { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      options
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);

  return [ref, inView];
};

/**
 * Reveal wrapper — fades + lifts children into place when scrolled into view.
 *  variant: "up" | "left" | "right" | "scale" | "blur"
 *  delay: ms (number)
 *  duration: ms (number)
 */
export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 900,
  className = "",
  as = "div",
  ...rest
}) => {
  const [ref, inView] = useInView();
  const Tag = as;

  const style = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate3d(0,0,0) scale(1)"
      : variant === "left"
        ? "translate3d(-32px,0,0) scale(1)"
        : variant === "right"
          ? "translate3d(32px,0,0) scale(1)"
          : variant === "scale"
            ? "translate3d(0,0,0) scale(0.94)"
            : "translate3d(0,28px,0) scale(1)",
    filter: inView ? "blur(0)" : variant === "blur" ? "blur(8px)" : "blur(0)",
    willChange: "opacity, transform, filter",
  };

  return (
    <Tag ref={ref} style={style} className={className} {...rest}>
      {children}
    </Tag>
  );
};
