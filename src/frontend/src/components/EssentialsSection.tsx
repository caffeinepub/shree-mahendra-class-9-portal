import { BarChart2, Bell, BookMarked, Calendar } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: <BookMarked size={36} className="text-school-blue" />,
    title: "Homework",
    desc: "View all assignments with subject and due dates.",
  },
  {
    icon: <BarChart2 size={36} className="text-school-blue" />,
    title: "Result",
    desc: "Check marks and grades for each subject.",
  },
  {
    icon: <Calendar size={36} className="text-school-blue" />,
    title: "Routine",
    desc: "Weekly timetable and period schedule.",
  },
  {
    icon: <Bell size={36} className="text-school-blue" />,
    title: "Notices",
    desc: "Important school announcements and events.",
  },
];

export function EssentialsSection() {
  return (
    <section id="essentials" className="py-16 bg-school-light">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy tracking-wide">
            CLASS 9 ESSENTIALS
          </h2>
          <p className="text-muted-foreground mt-2">
            Everything you need in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              data-ocid={`essentials.${card.title.toLowerCase()}.card`}
              className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center text-center hover:shadow-hero transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-school-light flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
