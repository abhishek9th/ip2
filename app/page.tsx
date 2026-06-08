"use client";

import BrandBar from "@/components/BrandBar";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import LearningsSection from "@/components/sections/LearningsSection";
import RealProblemSection from "@/components/sections/RealProblemSection";
import MasterclassDaysSection from "@/components/sections/MasterclassDaysSection";
import WhoItsFor from "@/components/sections/WhoItsFor";
import MentorStory from "@/components/sections/MentorStory";
import BonusSection from "@/components/sections/BonusSection";
import NotForSection from "@/components/sections/NotForSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import RegisterPopup from "@/components/RegisterPopup";
import ScrollUI from "@/components/ScrollUI";
import SmoothMotion from "@/components/SmoothMotion";
import { FadeUp } from "@/components/motion";

export default function Home() {
  return (
    <SmoothMotion>
      <main className="min-h-screen overflow-x-hidden pb-[calc(6rem+env(safe-area-inset-bottom))]">
        <RegisterPopup />
        <ScrollUI />

        <BrandBar />
        <HeroSection />
        <VideoSection />
        <LearningsSection />
        <RealProblemSection />
        <MasterclassDaysSection />
        <WhoItsFor />
        <MentorStory />
        <BonusSection />
        <NotForSection />
        <TestimonialsSection />
        <FaqSection />

        <FadeUp delay={0.05}>
          <footer className="bg-[rgb(18,51,50)] border-t border-[rgba(216,231,255,0.08)] py-8 px-4 text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </footer>
        </FadeUp>
      </main>
    </SmoothMotion>
  );
}
