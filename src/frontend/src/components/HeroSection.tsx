import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onPortalClick: (role: string) => void;
}

export function HeroSection({ onPortalClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/school-hero.dim_1200x600.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 text-center px-4 py-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">
            Welcome to
          </p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">
            SHREE MAHENDRA
          </h1>
          <h1 className="text-blue-300 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            SECONDARY SCHOOL
          </h1>
          <p className="text-blue-100 text-lg mb-10 font-medium">
            Class 9 Student & Teacher Portal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="hero.student_portal.button"
              onClick={() => onPortalClick("student")}
              className="bg-school-blue hover:bg-blue-600 text-white rounded-full px-6 py-3 h-auto font-semibold flex items-center gap-2 text-sm"
            >
              <GraduationCap size={18} /> Student Portal
            </Button>
            <Button
              data-ocid="hero.teacher_portal.button"
              onClick={() => onPortalClick("teacher")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy rounded-full px-6 py-3 h-auto font-semibold flex items-center gap-2 text-sm bg-transparent"
            >
              <BookOpen size={18} /> Teacher Portal
            </Button>
            <Button
              data-ocid="hero.monitor_access.button"
              onClick={() => onPortalClick("monitor")}
              variant="outline"
              className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-navy rounded-full px-6 py-3 h-auto font-semibold flex items-center gap-2 text-sm bg-transparent"
            >
              <Star size={18} /> Monitor Access
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
