import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SchoolCrest } from "./SchoolCrest";

interface NavbarProps {
  onLoginClick: () => void;
  onNavClick: (section: string) => void;
}

export function Navbar({ onLoginClick, onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", section: "hero" },
    { label: "Academic", section: "essentials" },
    { label: "Features", section: "chatbot" },
    { label: "Quick Links", section: "developer" },
  ];

  return (
    <>
      {/* Nepal Government / IMS System top bar */}
      <div className="bg-white border-b border-gray-200 py-2 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Nepal Gov Logo + Gov label */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/nepal-gov-logo-transparent.dim_200x200.png"
              alt="Nepal Government Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight">
              <p className="text-[#003893] font-bold text-xs sm:text-sm tracking-wide uppercase">
                Government of Nepal
              </p>
              <p className="text-gray-600 text-xs">नेपाल सरकार</p>
            </div>
          </div>

          {/* Center: IMS System title */}
          <div className="hidden sm:block text-center">
            <p className="text-[#DC143C] font-extrabold text-sm sm:text-base tracking-widest uppercase">
              NEPAL STUDENT IMS SYSTEM
            </p>
            <p className="text-gray-500 text-xs font-medium">
              Information Management System — Ministry of Education
            </p>
          </div>

          {/* Right: Nepal flag colors strip */}
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-10 rounded-sm"
              style={{ background: "#003893" }}
            />
            <div
              className="w-3 h-10 rounded-sm"
              style={{ background: "#DC143C" }}
            />
          </div>
        </div>
      </div>

      {/* Main navy navbar */}
      <header className="sticky top-0 z-50 bg-navy shadow-hero">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolCrest size={44} />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm sm:text-base tracking-wide">
                SHREE MAHENDRA
              </p>
              <p className="text-blue-200 text-xs sm:text-sm font-medium">
                SECONDARY SCHOOL – Class 9
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                type="button"
                key={l.label}
                data-ocid={`nav.${l.label.toLowerCase().replace(" ", "_")}.link`}
                onClick={() => onNavClick(l.section)}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              data-ocid="nav.login.button"
              onClick={onLoginClick}
              className="bg-school-blue hover:bg-blue-700 text-white text-sm px-5 py-2 h-auto rounded-full font-semibold"
            >
              LOGIN
            </Button>
          </nav>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-navy border-t border-blue-800 px-4 pb-4">
            {links.map((l) => (
              <button
                type="button"
                key={l.label}
                data-ocid={`nav.mobile.${l.label.toLowerCase().replace(" ", "_")}.link`}
                onClick={() => {
                  onNavClick(l.section);
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-blue-100 py-2 text-sm font-medium hover:text-white"
              >
                {l.label}
              </button>
            ))}
            <Button
              data-ocid="nav.mobile.login.button"
              onClick={() => {
                onLoginClick();
                setMenuOpen(false);
              }}
              className="mt-2 w-full bg-school-blue text-white rounded-full font-semibold"
            >
              LOGIN
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
