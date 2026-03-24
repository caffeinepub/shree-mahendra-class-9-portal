import { Code2, Heart, Mail } from "lucide-react";
import { motion } from "motion/react";

export function DeveloperSection() {
  return (
    <section id="developer" className="py-16 bg-school-light">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy mb-6">
            <Code2 size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-navy tracking-wide mb-2">
            DEVELOPER INFO
          </h2>
          <div className="w-16 h-1 bg-school-blue mx-auto mb-8 rounded-full" />
          <div
            className="bg-white rounded-2xl shadow-card p-8 max-w-lg mx-auto"
            data-ocid="developer.card"
          >
            <p className="text-2xl font-bold text-navy mb-2">ABISHEK BHUSAL</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
              <Mail size={16} />
              <a
                href="mailto:dev@smss.edu.np"
                className="text-school-blue hover:underline text-sm"
              >
                dev@smss.edu.np
              </a>
            </div>
            <p className="text-muted-foreground text-sm mb-4">© 2026</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>Built with love for Shree Mahendra Secondary School</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
