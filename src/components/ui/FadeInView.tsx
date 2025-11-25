import { useEffect, useRef, useState } from "react";

const FadeInView = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`
        opacity-0
        ${isVisible ? "animate-[fadeUp_0.9s_ease-out_forwards]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInView;
