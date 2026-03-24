export type Role = "student" | "teacher" | "monitor";

export interface User {
  username: string;
  password: string;
  role: Role;
  displayName: string;
}

export const USERS: User[] = [
  {
    username: "student1",
    password: "pass123",
    role: "student",
    displayName: "Student",
  },
  {
    username: "teacher1",
    password: "pass123",
    role: "teacher",
    displayName: "Teacher",
  },
  {
    username: "monitor1",
    password: "pass123",
    role: "monitor",
    displayName: "Monitor",
  },
];

export interface Homework {
  id: number;
  subject: string;
  description: string;
  dueDate: string;
}

export const INITIAL_HOMEWORK: Homework[] = [
  {
    id: 1,
    subject: "Math",
    description: "Complete exercise 4.3 problems 1–10",
    dueDate: "2026-03-28",
  },
  {
    id: 2,
    subject: "Science",
    description: "Draw and label the human digestive system",
    dueDate: "2026-03-27",
  },
  {
    id: 3,
    subject: "English",
    description: "Write an essay on environmental pollution",
    dueDate: "2026-03-29",
  },
  {
    id: 4,
    subject: "Nepali",
    description: "Read chapter 5 and write summary",
    dueDate: "2026-03-30",
  },
  {
    id: 5,
    subject: "Social Studies",
    description: "Map work – rivers of Nepal",
    dueDate: "2026-03-31",
  },
];

export interface Result {
  subject: string;
  marks: number;
  grade: string;
}

export const RESULTS: Result[] = [
  { subject: "Mathematics", marks: 85, grade: "A" },
  { subject: "Science", marks: 78, grade: "B+" },
  { subject: "English", marks: 90, grade: "A+" },
  { subject: "Nepali", marks: 82, grade: "A" },
  { subject: "Social Studies", marks: 76, grade: "B+" },
  { subject: "Optional Math", marks: 88, grade: "A+" },
];

export type RoutineDay = {
  day: string;
  periods: { time: string; subject: string }[];
};

export const ROUTINE: RoutineDay[] = [
  {
    day: "Monday",
    periods: [
      { time: "10:15–11:00", subject: "Mathematics" },
      { time: "11:00–11:45", subject: "English" },
      { time: "11:45–12:30", subject: "Science" },
      { time: "1:15–2:00", subject: "Nepali" },
      { time: "2:00–2:45", subject: "Social Studies" },
    ],
  },
  {
    day: "Tuesday",
    periods: [
      { time: "10:15–11:00", subject: "Science" },
      { time: "11:00–11:45", subject: "Optional Math" },
      { time: "11:45–12:30", subject: "Mathematics" },
      { time: "1:15–2:00", subject: "English" },
      { time: "2:00–2:45", subject: "Health" },
    ],
  },
  {
    day: "Wednesday",
    periods: [
      { time: "10:15–11:00", subject: "Nepali" },
      { time: "11:00–11:45", subject: "Science" },
      { time: "11:45–12:30", subject: "Social Studies" },
      { time: "1:15–2:00", subject: "Optional Math" },
      { time: "2:00–2:45", subject: "Computer" },
    ],
  },
  {
    day: "Thursday",
    periods: [
      { time: "10:15–11:00", subject: "Mathematics" },
      { time: "11:00–11:45", subject: "Nepali" },
      { time: "11:45–12:30", subject: "English" },
      { time: "1:15–2:00", subject: "Science" },
      { time: "2:00–2:45", subject: "Social Studies" },
    ],
  },
  {
    day: "Friday",
    periods: [
      { time: "10:15–11:00", subject: "Optional Math" },
      { time: "11:00–11:45", subject: "Mathematics" },
      { time: "11:45–12:30", subject: "Nepali" },
      { time: "1:15–2:00", subject: "Computer" },
      { time: "2:00–2:45", subject: "English" },
    ],
  },
];

export interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
}

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 1,
    title: "Annual Sports Day",
    content:
      "Annual Sports Day will be held on April 5, 2026. All students must participate and wear sports attire.",
    date: "2026-03-20",
  },
  {
    id: 2,
    title: "Fee Submission Deadline",
    content:
      "Last date for term fee submission is March 31, 2026. Late fees will incur a penalty.",
    date: "2026-03-18",
  },
  {
    id: 3,
    title: "Science Exhibition",
    content:
      "Class 9 students are invited to participate in the Inter-School Science Exhibition on April 12, 2026.",
    date: "2026-03-15",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    content:
      "Parent-Teacher meeting scheduled for April 2, 2026 from 10 AM to 2 PM. All parents are requested to attend.",
    date: "2026-03-10",
  },
];

export const CHATBOT_QA: { keywords: string[]; answer: string }[] = [
  // Portal navigation
  {
    keywords: ["homework", "assignment", "task", "due"],
    answer:
      "The Homework section shows all assignments with subject, description, and due date. Log in as a student to view your homework list.",
  },
  {
    keywords: [
      "routine",
      "timetable",
      "time table",
      "schedule",
      "period",
      "class time",
    ],
    answer:
      "The Routine section shows the weekly class timetable. Monday to Friday, classes run from 10:15 AM to 2:45 PM with a lunch break.",
  },
  {
    keywords: [
      "result",
      "marks",
      "grade",
      "score",
      "exam result",
      "test result",
    ],
    answer:
      "The Result section shows your marks and grades for each subject. Current results: Mathematics 85 (A), Science 78 (B+), English 90 (A+), Nepali 82 (A), Social Studies 76 (B+), Optional Math 88 (A+).",
  },
  {
    keywords: ["notice", "announcement", "news", "event", "update"],
    answer:
      "Recent notices: Sports Day on April 5, Fee deadline March 31, Science Exhibition April 12, Parent-Teacher Meeting April 2. Check the Notices section for full details.",
  },
  // Login / account
  {
    keywords: [
      "login",
      "log in",
      "sign in",
      "password",
      "username",
      "credential",
      "access",
    ],
    answer:
      "Login credentials: Student → student1 / pass123 | Teacher → teacher1 / pass123 | Monitor → monitor1 / pass123. Click your role button on the homepage to log in.",
  },
  {
    keywords: ["forgot password", "reset password", "change password"],
    answer:
      "If you forgot your password, please contact your class teacher or the school office to reset your credentials.",
  },
  // School info
  {
    keywords: ["school", "smss", "mahendra", "shree"],
    answer:
      "Shree Mahendra Secondary School (SMSS) is a government secondary school in Nepal offering quality education from Grade 6 to 10 under the Nepal government curriculum.",
  },
  {
    keywords: ["address", "location", "where", "situated"],
    answer:
      "Shree Mahendra Secondary School is located in Nepal. For the exact address, please contact the school office or check the school notice board.",
  },
  {
    keywords: ["contact", "phone", "email", "office"],
    answer:
      "For inquiries, contact the school office directly. Technical support: dev@smss.edu.np. Developed by Abishek Bhusal.",
  },
  // Class 9 subjects
  {
    keywords: ["class 9", "class9", "grade 9", "nine", "subject"],
    answer:
      "Class 9 subjects: Mathematics, Science, English, Nepali, Social Studies, Optional Mathematics, Computer Science, and Health Education.",
  },
  {
    keywords: ["math", "mathematics", "algebra", "geometry", "calculation"],
    answer:
      "Mathematics in Class 9 covers algebra, geometry, trigonometry, statistics, and arithmetic. Current marks: 85 (Grade A). Homework: Complete exercise 4.3 problems 1–10.",
  },
  {
    keywords: ["science", "physics", "chemistry", "biology", "lab"],
    answer:
      "Science in Class 9 covers physics (motion, forces), chemistry (elements, reactions), and biology (cells, human body systems). Current marks: 78 (Grade B+).",
  },
  {
    keywords: ["english", "grammar", "essay", "writing", "reading"],
    answer:
      "English covers grammar, reading comprehension, essay writing, and literature. Current marks: 90 (Grade A+). Homework: Write an essay on environmental pollution.",
  },
  {
    keywords: ["nepali", "नेपाली", "nepali subject"],
    answer:
      "Nepali subject covers grammar, literature, poetry, and writing. Current marks: 82 (Grade A). Homework: Read chapter 5 and write a summary.",
  },
  {
    keywords: [
      "social",
      "social studies",
      "history",
      "geography",
      "civics",
      "nepal history",
    ],
    answer:
      "Social Studies covers Nepal's history, geography, civics, and economics. Current marks: 76 (Grade B+). Homework: Map work on rivers of Nepal.",
  },
  {
    keywords: [
      "computer",
      "it",
      "information technology",
      "coding",
      "programming",
    ],
    answer:
      "Computer Science covers basic programming, Microsoft Office, internet basics, and digital literacy. Computer classes are on Wednesday and Friday afternoons.",
  },
  {
    keywords: ["health", "physical education", "pe", "health education"],
    answer:
      "Health Education covers personal hygiene, nutrition, first aid, and physical fitness. Health class is on Tuesday afternoon.",
  },
  {
    keywords: ["optional math", "opt math", "optional mathematics"],
    answer:
      "Optional Mathematics covers advanced algebra, coordinate geometry, vectors, and calculus basics. Current marks: 88 (Grade A+).",
  },
  // Exams
  {
    keywords: ["exam", "test", "examination", "see", "board exam"],
    answer:
      "Class 9 has terminal exams (first and second term) and the SEE (Secondary Education Examination) at Class 10. Study regularly and check your results in the Results section.",
  },
  {
    keywords: ["study", "tips", "how to study", "study tips", "prepare"],
    answer:
      "Study tips: 1) Follow the class routine, 2) Complete homework on time, 3) Revise notes daily, 4) Practice past papers for math and science, 5) Read Nepali and English textbooks regularly.",
  },
  // Admission
  {
    keywords: ["admission", "register", "enroll", "new student", "join"],
    answer:
      "Admission is open for 2026! Click the 'Register Now' banner at the top of the page. Fill in the student name, guardian name, phone number, and grade to apply.",
  },
  {
    keywords: ["fee", "fees", "payment", "tuition"],
    answer:
      "The fee submission deadline is March 31, 2026. Please pay at the school office. Late payments will incur a penalty as per the notice.",
  },
  // Events
  {
    keywords: ["sports", "sports day", "games", "football", "cricket"],
    answer:
      "Annual Sports Day is on April 5, 2026. All students must participate and wear sports attire. Different games and competitions will be held.",
  },
  {
    keywords: ["science exhibition", "exhibition", "project"],
    answer:
      "The Inter-School Science Exhibition is on April 12, 2026. Class 9 students can participate. Prepare a project related to science topics.",
  },
  {
    keywords: ["parent teacher", "ptm", "parent meeting", "guardian meeting"],
    answer:
      "Parent-Teacher Meeting is on April 2, 2026 from 10 AM to 2 PM. All parents and guardians are requested to attend.",
  },
  // Teachers / staff
  {
    keywords: ["teacher", "sir", "madam", "staff", "faculty"],
    answer:
      "Teachers can log in using teacher1/pass123 to manage homework and notices. If you have a question for a specific teacher, please contact them at school.",
  },
  {
    keywords: ["monitor", "prefect", "class monitor"],
    answer:
      "The class monitor can log in using monitor1/pass123 to view all class activities, homework, and notices.",
  },
  // Developer / system
  {
    keywords: [
      "developer",
      "abishek",
      "bhusal",
      "made by",
      "who made",
      "who created",
      "built by",
    ],
    answer:
      "This portal was developed by Abishek Bhusal for Shree Mahendra Secondary School, Class 9. Contact: dev@smss.edu.np.",
  },
  {
    keywords: ["portal", "website", "system", "app", "platform"],
    answer:
      "The SMSS Student Portal lets students view homework, results, routine, and notices. Teachers can post homework and notices. Log in with your credentials to get started.",
  },
  // Greetings
  {
    keywords: [
      "hello",
      "hi",
      "hey",
      "namaste",
      "namaskar",
      "good morning",
      "good afternoon",
    ],
    answer:
      "Hello! Namaste! I'm the SMSS AI Assistant. Ask me about homework, results, timetable, notices, subjects, exams, or anything about Shree Mahendra Secondary School!",
  },
  {
    keywords: ["thank", "thanks", "thank you", "dhanyabad", "shukriya"],
    answer:
      "You're welcome! Feel free to ask any other questions about your school, subjects, or the portal.",
  },
  {
    keywords: ["help", "what can you do", "what do you know", "what can i ask"],
    answer:
      "I can answer questions about: homework, results, class routine/timetable, school notices, subjects (Math, Science, English, Nepali, etc.), exams, admission, fees, events, login help, and general school information. Just ask!",
  },
  // Nepal / government
  {
    keywords: ["nepal", "government", "ministry", "education"],
    answer:
      "Shree Mahendra Secondary School operates under the Nepal Government Ministry of Education. The curriculum follows the National Curriculum Framework set by the Curriculum Development Centre (CDC).",
  },
  {
    keywords: ["holiday", "vacation", "break", "off day"],
    answer:
      "School holidays follow the Nepal Government academic calendar. Dashain, Tihar, and other public holidays are observed. Check the school notice board for the latest holiday schedule.",
  },
  {
    keywords: ["library", "book", "textbook"],
    answer:
      "The school library has textbooks and reference books for all Class 9 subjects. Students can borrow books with their student ID card.",
  },
  {
    keywords: ["uniform", "dress", "dress code"],
    answer:
      "The school uniform must be worn on all school days. For Sports Day (April 5), students should wear sports attire.",
  },
];

export function getChatbotAnswer(question: string): string {
  const q = question.toLowerCase();
  for (const qa of CHATBOT_QA) {
    if (qa.keywords.some((k) => q.includes(k))) {
      return qa.answer;
    }
  }
  // Try partial word matching as fallback
  const words = q.split(/\s+/).filter((w) => w.length > 3);
  for (const word of words) {
    for (const qa of CHATBOT_QA) {
      if (
        qa.keywords.some(
          (k) => k.includes(word) || word.includes(k.replace(/\s+/g, "")),
        )
      ) {
        return qa.answer;
      }
    }
  }
  return "I'm not sure about that specific question. You can ask me about homework, results, timetable, notices, subjects like Math or Science, exams, admission, fees, events, or login help. I'll do my best to help!";
}
