import { useEffect, useState } from "react";

function useMouseParallax(strength = 20) {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(e) {
      const x =
        (e.clientX / window.innerWidth - 0.5) * strength;

      const y =
        (e.clientY / window.innerHeight - 0.5) * strength;

      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [strength]);

  return offset;
}

export default useMouseParallax;