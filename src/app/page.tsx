"use client";

import { useState } from "react";
import { CursorProvider } from "@/components/ui/CustomCursor";
import Header from "@/components/layout/Header";
import RepertoireDrawer from "@/components/layout/RepertoireDrawer";
import ReaderModal from "@/components/ui/ReaderModal";
import HeroSection from "@/components/sections/HeroSection";
import TickerBanner from "@/components/sections/TickerBanner";
import BioManifesto from "@/components/sections/BioManifesto";
import ServicesBento from "@/components/sections/ServicesBento";
import AppWebLab from "@/components/sections/AppWebLab";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ScrollStackShowcase from "@/components/sections/ScrollStackShowcase";
import ExperiencePraxis from "@/components/sections/ExperiencePraxis";
import ProcessWorkflow from "@/components/sections/ProcessWorkflow";
import ClientReviews from "@/components/sections/ClientReviews";
import ArtifactsArchive from "@/components/sections/ArtifactsArchive";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const openCase = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <CursorProvider>
      <RepertoireDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Header onMenuToggle={toggleMenu} />

      <HeroSection />
      <TickerBanner />
      <BioManifesto />

      <ServicesBento />
      <AppWebLab />

      <main className="space-y-28 sm:space-y-36 py-16">
        <ProjectShowcase onOpenCase={openCase} />
        <ScrollStackShowcase />
        <ExperiencePraxis />
        <ProcessWorkflow />
        <ClientReviews />
        <ArtifactsArchive />
      </main>

      <Footer />

      <ReaderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectIndex={modalIndex}
      />
    </CursorProvider>
  );
}
