"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "../components/mt-components";
import { CardMain } from "../components/Card";
import BrestCancerIcon from "../img/brest-cancer.ico";
import ProstateCancerIcon from "../img/prostate-cancer.png";
import ComplexNavbar from "../components/ComplexNavbar";
import { SimpleFooter } from "../components/Footer";

export default function Desktop() {
  const router = useRouter();

  useEffect(() => {
    const hasVisitedHome = localStorage.getItem("hasVisitedHome");

    if (!hasVisitedHome) {
      router.push("/login-page");
      localStorage.setItem("hasVisitedHome", "true");
    }
  }, [router]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#F6F5F2]">
        <ComplexNavbar />

        <main className="flex-grow p-8 flex flex-col items-center">
          <h1 className="text-black text-center text-2xl font-semibold mb-6">
            Please choose a study
          </h1>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center md:space-x-4">
            <CardMain
              imageSrc={BrestCancerIcon}
              title="Brest Cancer Study"
              text="lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed diam nonumy eirmod tempor"
              buttonText="Acceder"
              buttonLink="/brest-cancer-study/"
            />
            <CardMain
              imageSrc={ProstateCancerIcon}
              title="Prostate Cancer Study"
              text="lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed diam nonumy eirmod tempor"
              buttonText="Acceder"
              buttonLink="/prostate-cancer-study/"
            />
          </div>
        </main>

        <SimpleFooter />
      </div>
    </ThemeProvider>
  );
}