"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function Globe({ 
  className, 
  markers = [],
  onMarkerClick,
  hovering = false
}: { 
  className?: string,
  markers?: { location: [number, number], size: number, id?: number }[],
  onMarkerClick?: (id: number) => void,
  hovering?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionStart = useRef<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    let phi = rotation;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: theme === "dark" ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: theme === "dark" ? [0.1, 0.1, 0.1] : [1, 1, 1],
      markerColor: [0.1, 0.5, 1],
      glowColor: theme === "dark" ? [0.1, 0.1, 0.1] : [1, 1, 1],
      markers: markers,
      onRender: (state) => {
        if (!pointerInteracting.current && !hovering) {
          phi += 0.003;
        }
        state.phi = phi + (pointerInteracting.current || 0);
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [theme, markers, hovering]);

  return (
    <div className={className} style={{ width: "100%", maxWidth: 600, aspectRatio: 1, position: "relative" }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - (pointerInteractionStart.current || 0);
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - (pointerInteractionStart.current || 0);
            pointerInteracting.current = delta / 200;
          }
        }}
        style={{ width: "100%", height: "100%", cursor: "grab", contain: "layout paint size", opacity: 0 }}
        onMouseEnter={() => {
          // Handled via hovering prop from parent for better sync
        }}
        className="transition-opacity duration-500"
        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
      />
    </div>
  );
}
