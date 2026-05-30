"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls, TorusKnot, Sphere, RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  const [step, setStep] = useState(0);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), delta * 1.5);
    }
  });

  useEffect(() => {
    if (step === 0) {
      const t = setTimeout(() => setStep(1), 1000);
      return () => clearTimeout(t);
    } else if (step === 1) {
      const t = setTimeout(() => setStep(2), 1500);
      return () => clearTimeout(t);
    } else if (step === 2) {
      const t = setTimeout(() => setStep(3), 600);
      return () => clearTimeout(t);
    } else if (step === 3) {
      const t = setTimeout(() => setStep(0), 4000);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <group ref={groupRef} position={[0, -0.6, 0]} scale={[0.85, 0.85, 0.85]}>
      {/* Base */}
      <RoundedBox args={[3.6, 0.12, 2.4]} radius={0.06} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2b2c2e" metalness={0.8} roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[3.1, 0.02, 1.1]} radius={0.02} position={[0, 0.06, -0.2]}>
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.8} />
      </RoundedBox>
      <RoundedBox args={[1.4, 0.01, 0.8]} radius={0.02} position={[0, 0.06, 0.9]}>
        <meshStandardMaterial color="#232426" metalness={0.7} roughness={0.3} />
      </RoundedBox>

      {/* Screen Lid */}
      <group position={[0, 0.06, -1.2]} rotation={[-0.15, 0, 0]}>
        <RoundedBox args={[3.6, 2.3, 0.06]} radius={0.06} position={[0, 1.15, 0]}>
          <meshStandardMaterial color="#2b2c2e" metalness={0.8} roughness={0.4} />
        </RoundedBox>
        <RoundedBox args={[3.54, 2.24, 0.01]} radius={0.05} position={[0, 1.15, 0.03]}>
          <meshBasicMaterial color="#000000" />
        </RoundedBox>
        <RoundedBox args={[0.6, 0.14, 0.02]} radius={0.03} position={[0, 2.22, 0.035]}>
          <meshBasicMaterial color="#000000" />
        </RoundedBox>

        <Html transform position={[0, 1.13, 0.04]} scale={0.105} rotation={[0, 0, 0]}>
          <div className="w-[800px] h-[500px] bg-[#121212] p-8 flex flex-col font-sans select-none relative overflow-hidden" style={{ boxShadow: 'inset 0 0 50px rgba(255,95,109,0.1)' }}>
            <div className="absolute z-50 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none" style={{ transform: step === 0 ? 'translate(800px, 500px)' : 'translate(550px, 310px)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="#121212" strokeWidth="1.5" className="drop-shadow-lg">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
              </svg>
              {step === 2 && <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/40 rounded-full animate-ping" />}
            </div>

            <div className={`absolute inset-0 bg-[#121212]/90 backdrop-blur-sm flex flex-col items-center justify-center z-40 transition-all duration-500 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">Excellente Réponse !</h3>
              <p className="text-tertiary text-xl">Vous êtes prêt pour valider le S8 avec Bouda Med.</p>
            </div>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-sm ml-2 text-tertiary font-medium">QCM_Preparation_S8.exe</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl font-bold text-primary">Question 1/20</h4>
                <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono border border-primary/30">
                  Temps restant : 05:42
                </div>
              </div>
              <p className="text-2xl text-white font-medium mb-8">Quelle est la première étape pour valider le Semestre 8 ?</p>
              <div className="grid grid-cols-2 gap-4">
                {["A. Paniquer et abandonner", "B. Planifier ses révisions", "C. Dormir jusqu'en Juin", "D. Rejoindre Bouda Med"].map((q, i) => (
                  <div key={i} className={`p-5 rounded-xl border text-lg transition-all duration-300 ${i === 3 && step >= 2 ? 'bg-primary border-primary text-white shadow-[0_0_30px_rgba(255,95,109,0.5)] scale-105' : 'border-white/10 text-tertiary bg-white/5'}`}>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, 5, -10]} intensity={1} color="#FF5F6D" />
      <Environment preset="city" />
      <PresentationControls global rotation={[0.1, -0.4, 0]} polar={[-0.1, Math.PI / 4]} azimuth={[-Math.PI / 2, Math.PI / 4]}>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
          <Laptop />
          <Float speed={3} rotationIntensity={1} floatIntensity={2} position={[2.5, 1.5, -1]}>
            <Sphere args={[0.12, 16, 16]}>
              <meshStandardMaterial color="#FF5F6D" emissive="#FF5F6D" emissiveIntensity={2} />
            </Sphere>
          </Float>
          <Float speed={2.5} rotationIntensity={1} floatIntensity={3} position={[-2.5, 2, 1]}>
            <Sphere args={[0.08, 16, 16]}>
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
            </Sphere>
          </Float>
        </Float>
      </PresentationControls>
      <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#FF5F6D" />
    </>
  );
}

export default function ExamAlertSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section className="relative w-full py-32 bg-secondary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,95,109,0.05)_0%,rgba(18,18,18,1)_70%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(255,95,109,0.2)]">
                <AlertCircle className="w-4 h-4" />
                Semestre 8 - 2026
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Semaine <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF9A9E]">
                  d'Examens.
                </span>
              </h2>
              <p className="text-xl text-tertiary max-w-lg font-light leading-relaxed">
                Le moment décisif approche. Anticipez votre réussite grâce à notre semaine de préparation intensive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-8" onMouseMove={handleMouseMove} onMouseLeave={() => setMousePos({ x: 0, y: 0 })} style={{ perspective: "1000px" }}>
              <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ease-out hover:border-primary/30 hover:bg-white/[0.04] text-left" style={{ transform: `rotateX(${-mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`, transformStyle: "preserve-3d" }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,95,109,0.15)]" style={{ transform: "translateZ(20px)" }}>
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ transform: "translateZ(30px)" }}>Préparation</h3>
                <p className="text-tertiary" style={{ transform: "translateZ(20px)" }}>Débute <strong className="text-primary font-semibold">la semaine prochaine</strong>.</p>
              </div>

              <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ease-out hover:border-primary/30 hover:bg-white/[0.04] text-left" style={{ transform: `rotateX(${-mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`, transformStyle: "preserve-3d" }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,95,109,0.15)]" style={{ transform: "translateZ(20px)" }}>
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ transform: "translateZ(30px)" }}>Examens</h3>
                <p className="text-tertiary" style={{ transform: "translateZ(20px)" }}>Commencent le <strong className="text-primary font-semibold">08 Juin 2026</strong>.</p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/examens-calendrier" className="inline-block group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg overflow-hidden shadow-[0_0_30px_rgba(255,95,109,0.4)] transition-transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative flex items-center gap-3">
                  Voir le calendrier complet des examens
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - 3D Canvas */}
          <div className="h-[500px] lg:h-[700px] w-full relative flex items-center justify-center">
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] shadow-[inset_0_0_100px_rgba(18,18,18,1)]" />
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
              </Canvas>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
