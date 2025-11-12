import { useEffect } from "react";

// Dev-only helper: finds elements that overflow the viewport horizontally,
// outlines them and logs details to the console.
export default function OverflowChecker() {
  useEffect(() => {
    try {
  const overflowEls = [];
      const winW = window.innerWidth || document.documentElement.clientWidth;

      document.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        // ignore elements with zero width/height
        if (r.width === 0 && r.height === 0) return;

        // if element starts left of the viewport or ends right of the viewport
        if (r.left < -1 || r.right > winW + 1) {
          overflowEls.push({ el, rect: r });
        }
      });

      if (overflowEls.length) {
        // limit output to top 7 items to avoid flooding the console
        const top = overflowEls.slice(0, 7);
        console.group("OverflowChecker: top overflowing elements (first 7)");
        top.forEach(({ el, rect }, i) => {
          // log a short descriptor instead of dumping full DOM which can be noisy
          console.log(`[#${i}] tag=%c${el.tagName.toLowerCase()}%c width=${Math.round(rect.width)} left=${Math.round(rect.left)} right=${Math.round(rect.right)}`, "font-weight:700", "font-weight:normal", el);
        });
        console.groupEnd();
      } else {
        console.info("OverflowChecker: no horizontal overflow detected");
      }

      const onResize = () => {
        // rerun detection after resize and log results (no DOM mutation)
        setTimeout(() => {
          try {
            const w = window.innerWidth || document.documentElement.clientWidth;
            const newOverflow = [];
            document.querySelectorAll("*").forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.width === 0 && r.height === 0) return;
              if (r.left < -1 || r.right > w + 1) {
                newOverflow.push({ el, rect: r });
              }
            });
            if (newOverflow.length) {
              const top = newOverflow.slice(0, 7);
              console.group("OverflowChecker (resize): top overflowing elements (first 7)");
              top.forEach(({ el, rect }, i) => {
                console.log(`[#${i}] tag=%c${el.tagName.toLowerCase()}%c width=${Math.round(rect.width)} left=${Math.round(rect.left)} right=${Math.round(rect.right)}`, "font-weight:700", "font-weight:normal", el);
              });
              console.groupEnd();
            }
          } catch {
            // ignore
          }
        }, 120);
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    } catch (err) {
      // fail silently in production or older browsers
      console.error("OverflowChecker error:", err);
    }
  }, []);

  return null;
}
