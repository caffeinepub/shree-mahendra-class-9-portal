import { Mail, MapPin } from "lucide-react";
import { SiFacebook, SiYoutube } from "react-icons/si";
import { SchoolCrest } from "./SchoolCrest";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const host = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <SchoolCrest size={40} />
              <div>
                <p className="font-bold text-sm">SMSS</p>
                <p className="text-blue-200 text-xs">
                  Shree Mahendra Secondary School
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-xs">
              <MapPin size={13} /> Nepal
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-xs">
              <Mail size={13} /> dev@smss.edu.np
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Quick Links</p>
            <ul className="space-y-2 text-blue-200 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#login" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#essentials"
                  className="hover:text-white transition-colors"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#chatbot"
                  className="hover:text-white transition-colors"
                >
                  AI Chatbot
                </a>
              </li>
              <li>
                <a
                  href="#developer"
                  className="hover:text-white transition-colors"
                >
                  Developer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Connect</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-xs">
          <p>
            © {year}. Built with <span className="text-red-400">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${host}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
