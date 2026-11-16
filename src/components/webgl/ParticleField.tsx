"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  speed?: number;
  className?: string;
}

export default function ParticleField({
  count = 80,
  color = "#00E599",
  speed = 0.3,
  className = "",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 30;

    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velocities[i * 3] = (Math.random() - 0.5) * speed * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.5;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * speed * 0.2;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: 1.5,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let raf: number;
    let mounted = true;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const animate = () => {
      if (!mounted) return;
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;

      for (let i = 0; i < count; i++) {
        arr[i * 3] += velocities[i * 3];
        arr[i * 3 + 1] += velocities[i * 3 + 1];
        arr[i * 3 + 2] += velocities[i * 3 + 2];

        if (Math.abs(arr[i * 3]) > 25) velocities[i * 3] *= -1;
        if (Math.abs(arr[i * 3 + 1]) > 25) velocities[i * 3 + 1] *= -1;
        if (Math.abs(arr[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1;
      }

      pos.needsUpdate = true;
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    const obs = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light-mode");
      material.color.set(isLight ? "#0D7A53" : color);
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      obs.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [count, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
