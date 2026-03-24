import { Toaster } from "@/components/ui/sonner";
import { useRef, useState } from "react";
import { AdmissionBanner } from "./components/AdmissionBanner";
import { ChatbotSection } from "./components/ChatbotSection";
import { Dashboard } from "./components/Dashboard";
import { DeveloperSection } from "./components/DeveloperSection";
import { EssentialsSection } from "./components/EssentialsSection";
import { HeroSection } from "./components/HeroSection";
import { LoginSection } from "./components/LoginSection";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import type { Role } from "./data/mockData";

type AppState =
  | { view: "landing"; loginRole?: Role }
  | { view: "dashboard"; role: Role; displayName: string };

export default function App() {
  const [state, setState] = useState<AppState>({ view: "landing" });
  const loginRef = useRef<HTMLElement | null>(null);

  const scrollToLogin = () => {
    document
      .getElementById("login")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogin = (role: Role, displayName: string) => {
    setState({ view: "dashboard", role, displayName });
  };

  const handleLogout = () => {
    setState({ view: "landing" });
    setTimeout(() => scrollToSection("hero"), 100);
  };

  if (state.view === "dashboard") {
    return (
      <>
        <Dashboard
          role={state.role}
          displayName={state.displayName}
          onLogout={handleLogout}
        />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-school-page">
      <Toaster />
      <AdmissionBanner />
      <Navbar onLoginClick={scrollToLogin} onNavClick={scrollToSection} />
      <main>
        <HeroSection
          onPortalClick={(role) => {
            setState((prev) => ({ ...prev, loginRole: role as Role }));
            setTimeout(scrollToLogin, 100);
          }}
        />
        <LoginSection
          defaultRole={
            (state as { view: "landing"; loginRole?: Role }).loginRole ||
            "student"
          }
          onLogin={handleLogin}
        />
        <EssentialsSection />
        <ChatbotSection />
        <DeveloperSection />
      </main>
      <SiteFooter />
      <section id="login-anchor" ref={loginRef} />
    </div>
  );
}
