"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function createDotTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.65)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export default function HeroGL() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      el.clientWidth / el.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4, 5.8);
    camera.lookAt(0, -0.4, -2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const COLS = 64,
      ROWS = 44;
    const geo = new THREE.PlaneGeometry(16, 11, COLS, ROWS);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const cnt = pos.count;
    const bx = new Float32Array(cnt);
    const bz = new Float32Array(cnt);
    for (let i = 0; i < cnt; i++) {
      bx[i] = pos.getX(i);
      bz[i] = pos.getZ(i);
    }

    const dotTex = createDotTexture();

    function themeColors() {
      const light = document.documentElement.classList.contains("light-mode");
      return {
        main: light ? 0x009e66 : 0x00e599,
        accent: light ? 0x006644 : 0xd2ff28,
        wireA: light ? 0.06 : 0.13,
        surfA: light ? 0.012 : 0.028,
        dotA: light ? 0.28 : 0.5,
        glowA: light ? 0.06 : 0.12,
      };
    }

    let tc = themeColors();

    const sMat = new THREE.MeshBasicMaterial({
      color: tc.main,
      transparent: true,
      opacity: tc.surfA,
      side: THREE.DoubleSide,
    });
    scene.add(new THREE.Mesh(geo, sMat));

    const wMat = new THREE.MeshBasicMaterial({
      color: tc.main,
      wireframe: true,
      transparent: true,
      opacity: tc.wireA,
    });
    scene.add(new THREE.Mesh(geo, wMat));

    const dMat = new THREE.PointsMaterial({
      color: tc.main,
      size: 0.04,
      map: dotTex,
      transparent: true,
      opacity: tc.dotA,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(geo, dMat));

    const gMat = new THREE.PointsMaterial({
      color: tc.accent,
      size: 0.12,
      map: dotTex,
      transparent: true,
      opacity: tc.glowA,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(geo, gMat));

    const clock = new THREE.Clock();
    let raf: number;

    function animate() {
      const t = clock.getElapsedTime() * 0.22;
      for (let i = 0; i < cnt; i++) {
        const x = bx[i],
          z = bz[i];
        pos.setY(
          i,
          Math.sin(x * 0.5 + t) * Math.cos(z * 0.4 + t * 0.7) * 0.48 +
            Math.sin(x * 0.2 + z * 0.3 + t * 0.5) * 0.3 +
            Math.cos(x * 0.75 - t * 0.55) *
              Math.sin(z * 0.55 + t * 0.4) *
              0.22
        );
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!el) return;
      const w = el.clientWidth,
        h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    const obs = new MutationObserver(() => {
      tc = themeColors();
      sMat.color.set(tc.main);
      sMat.opacity = tc.surfA;
      wMat.color.set(tc.main);
      wMat.opacity = tc.wireA;
      dMat.color.set(tc.main);
      dMat.opacity = tc.dotA;
      gMat.color.set(tc.accent);
      gMat.opacity = tc.glowA;
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      obs.disconnect();
      renderer.dispose();
      geo.dispose();
      sMat.dispose();
      wMat.dispose();
      dMat.dispose();
      gMat.dispose();
      dotTex.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
