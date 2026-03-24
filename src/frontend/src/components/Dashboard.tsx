import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart2,
  Bell,
  BookMarked,
  Calendar,
  LogOut,
  Menu,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  type Homework,
  INITIAL_HOMEWORK,
  INITIAL_NOTICES,
  type Notice,
  RESULTS,
  ROUTINE,
  type Role,
} from "../data/mockData";
import { SchoolCrest } from "./SchoolCrest";

type Section = "homework" | "result" | "routine" | "notices";

interface DashboardProps {
  role: Role;
  displayName: string;
  onLogout: () => void;
}

export function Dashboard({ role, displayName, onLogout }: DashboardProps) {
  const [active, setActive] = useState<Section>("homework");
  const [homework, setHomework] = useState<Homework[]>(INITIAL_HOMEWORK);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newHW, setNewHW] = useState({
    subject: "",
    description: "",
    dueDate: "",
  });
  const [newNotice, setNewNotice] = useState({
    title: "",
    content: "",
    date: "",
  });

  const navItems: { key: Section; label: string; icon: React.ReactNode }[] = [
    { key: "homework", label: "Homework", icon: <BookMarked size={18} /> },
    { key: "result", label: "Result", icon: <BarChart2 size={18} /> },
    { key: "routine", label: "Routine", icon: <Calendar size={18} /> },
    { key: "notices", label: "Notices", icon: <Bell size={18} /> },
  ];

  const addHomework = () => {
    if (!newHW.subject || !newHW.description || !newHW.dueDate) return;
    setHomework((prev) => [...prev, { id: Date.now(), ...newHW }]);
    setNewHW({ subject: "", description: "", dueDate: "" });
  };

  const addNotice = () => {
    if (!newNotice.title || !newNotice.content) return;
    setNotices((prev) => [
      {
        id: Date.now(),
        ...newNotice,
        date: newNotice.date || new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);
    setNewNotice({ title: "", content: "", date: "" });
  };

  const gradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const subjectColor: Record<string, string> = {
    Mathematics: "bg-blue-50",
    Math: "bg-blue-50",
    Science: "bg-green-50",
    English: "bg-purple-50",
    Nepali: "bg-orange-50",
    "Social Studies": "bg-yellow-50",
    "Optional Math": "bg-indigo-50",
    "Opt. Math": "bg-indigo-50",
    Computer: "bg-cyan-50",
    Health: "bg-red-50",
  };

  const SidebarContent = () => (
    <aside className="flex flex-col h-full bg-navy">
      <div className="p-5 border-b border-blue-800">
        <div className="flex items-center gap-3">
          <SchoolCrest size={36} />
          <div className="leading-tight">
            <p className="text-white font-bold text-xs">SMSS</p>
            <p className="text-blue-200 text-xs">Class 9</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-b border-blue-800">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-school-blue flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-bold text-lg">
              {displayName[0]}
            </span>
          </div>
          <p className="text-white font-semibold text-sm">{displayName}</p>
          <Badge className="mt-1 text-xs bg-school-blue text-white capitalize">
            {role}
          </Badge>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.key}
            data-ocid={`dashboard.${item.key}.tab`}
            onClick={() => {
              setActive(item.key);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              active === item.key
                ? "bg-school-blue text-white"
                : "text-blue-200 hover:bg-blue-800 hover:text-white"
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4">
        <Button
          data-ocid="dashboard.logout.button"
          onClick={onLogout}
          variant="outline"
          className="w-full border-blue-600 text-blue-200 hover:bg-blue-800 hover:text-white flex items-center gap-2"
        >
          <LogOut size={16} /> Logout
        </Button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-school-page overflow-hidden">
      <div className="hidden md:flex w-64 flex-shrink-0">
        <SidebarContent />
      </div>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="w-64 flex-shrink-0">
            <SidebarContent />
          </div>
          <button
            type="button"
            className="flex-1 bg-black/50 border-0 cursor-default"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="md:hidden p-1 rounded text-navy"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-navy font-bold text-lg">
              {navItems.find((n) => n.key === active)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-muted-foreground text-sm capitalize">
              {role} Portal
            </span>
            <Button
              data-ocid="dashboard.topbar.logout.button"
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-navy border-border"
            >
              <LogOut size={14} /> Logout
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {active === "homework" && (
              <div className="space-y-6">
                {role === "teacher" && (
                  <div className="bg-white rounded-2xl shadow-card p-5">
                    <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                      <Plus size={18} className="text-school-blue" /> Add
                      Homework
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <Label>Subject</Label>
                        <Input
                          data-ocid="homework.subject.input"
                          value={newHW.subject}
                          onChange={(e) =>
                            setNewHW((p) => ({ ...p, subject: e.target.value }))
                          }
                          placeholder="Subject"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Input
                          data-ocid="homework.description.input"
                          value={newHW.description}
                          onChange={(e) =>
                            setNewHW((p) => ({
                              ...p,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Assignment description"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Due Date</Label>
                        <Input
                          data-ocid="homework.due_date.input"
                          type="date"
                          value={newHW.dueDate}
                          onChange={(e) =>
                            setNewHW((p) => ({ ...p, dueDate: e.target.value }))
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <Button
                      data-ocid="homework.add.button"
                      onClick={addHomework}
                      className="mt-3 bg-school-blue hover:bg-blue-700 text-white"
                    >
                      Add Homework
                    </Button>
                  </div>
                )}
                <div
                  className="bg-white rounded-2xl shadow-card p-5"
                  data-ocid="homework.list"
                >
                  <h3 className="font-bold text-navy mb-4">
                    Current Assignments
                  </h3>
                  {homework.length === 0 ? (
                    <p
                      data-ocid="homework.empty_state"
                      className="text-muted-foreground text-sm text-center py-8"
                    >
                      No homework assignments yet.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {homework.map((hw, i) => (
                        <div
                          key={hw.id}
                          data-ocid={`homework.item.${i + 1}`}
                          className={`flex items-start justify-between p-4 rounded-xl ${subjectColor[hw.subject] || "bg-gray-50"}`}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-school-blue text-white text-xs">
                                {hw.subject}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                Due: {hw.dueDate}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">
                              {hw.description}
                            </p>
                          </div>
                          {role === "teacher" && (
                            <button
                              type="button"
                              data-ocid={`homework.delete.button.${i + 1}`}
                              onClick={() =>
                                setHomework((prev) =>
                                  prev.filter((h) => h.id !== hw.id),
                                )
                              }
                              className="ml-3 text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Delete homework"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {active === "result" && (
              <div className="bg-white rounded-2xl shadow-card p-5">
                <h3 className="font-bold text-navy mb-4">Term Results</h3>
                <div className="overflow-x-auto">
                  <Table data-ocid="result.table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-navy">
                          Subject
                        </TableHead>
                        <TableHead className="font-semibold text-navy">
                          Marks
                        </TableHead>
                        <TableHead className="font-semibold text-navy">
                          Grade
                        </TableHead>
                        <TableHead className="font-semibold text-navy">
                          Performance
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {RESULTS.map((r, i) => (
                        <TableRow
                          key={r.subject}
                          data-ocid={`result.row.${i + 1}`}
                        >
                          <TableCell className="font-medium">
                            {r.subject}
                          </TableCell>
                          <TableCell>{r.marks}/100</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-bold ${gradeColor(r.grade)}`}
                            >
                              {r.grade}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-100 rounded-full h-2 max-w-24">
                                <div
                                  className="bg-school-blue h-2 rounded-full"
                                  style={{ width: `${r.marks}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {r.marks}%
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 p-4 bg-school-light rounded-xl">
                  <p className="text-sm font-semibold text-navy">
                    Overall Average:{" "}
                    {Math.round(
                      RESULTS.reduce((a, r) => a + r.marks, 0) / RESULTS.length,
                    )}
                    %
                  </p>
                </div>
              </div>
            )}

            {active === "routine" && (
              <div className="bg-white rounded-2xl shadow-card p-5">
                <h3 className="font-bold text-navy mb-4">Weekly Timetable</h3>
                <div className="overflow-x-auto">
                  <Table data-ocid="routine.table">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-navy">
                          Time
                        </TableHead>
                        {ROUTINE.map((d) => (
                          <TableHead
                            key={d.day}
                            className="font-semibold text-navy"
                          >
                            {d.day}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ROUTINE[0].periods.map((period, pi) => (
                        <TableRow key={period.time}>
                          <TableCell className="text-xs text-muted-foreground whitespace-nowrap font-medium">
                            P{pi + 1}
                            <br />
                            {period.time}
                          </TableCell>
                          {ROUTINE.map((d) => (
                            <TableCell key={d.day}>
                              <span
                                className={`px-2 py-1 rounded-lg text-xs font-medium ${subjectColor[d.periods[pi].subject] || "bg-gray-50"} text-foreground`}
                              >
                                {d.periods[pi].subject}
                              </span>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {active === "notices" && (
              <div className="space-y-6">
                {(role === "teacher" || role === "monitor") && (
                  <div className="bg-white rounded-2xl shadow-card p-5">
                    <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                      <Plus size={18} className="text-school-blue" /> Post
                      Notice
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label>Title</Label>
                        <Input
                          data-ocid="notice.title.input"
                          value={newNotice.title}
                          onChange={(e) =>
                            setNewNotice((p) => ({
                              ...p,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Notice title"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Content</Label>
                        <Textarea
                          data-ocid="notice.content.textarea"
                          value={newNotice.content}
                          onChange={(e) =>
                            setNewNotice((p) => ({
                              ...p,
                              content: e.target.value,
                            }))
                          }
                          placeholder="Notice content..."
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                    <Button
                      data-ocid="notice.add.button"
                      onClick={addNotice}
                      className="mt-3 bg-school-blue hover:bg-blue-700 text-white"
                    >
                      Post Notice
                    </Button>
                  </div>
                )}
                <div className="space-y-3" data-ocid="notices.list">
                  {notices.length === 0 ? (
                    <p
                      data-ocid="notices.empty_state"
                      className="text-muted-foreground text-sm text-center py-8 bg-white rounded-2xl"
                    >
                      No notices posted.
                    </p>
                  ) : (
                    notices.map((n, i) => (
                      <div
                        key={n.id}
                        data-ocid={`notices.item.${i + 1}`}
                        className="bg-white rounded-2xl shadow-card p-5"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-bold text-navy text-sm">
                                {n.title}
                              </h4>
                              <span className="text-xs text-muted-foreground">
                                {n.date}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">
                              {n.content}
                            </p>
                          </div>
                          {(role === "teacher" || role === "monitor") && (
                            <button
                              type="button"
                              data-ocid={`notices.delete.button.${i + 1}`}
                              onClick={() =>
                                setNotices((prev) =>
                                  prev.filter((x) => x.id !== n.id),
                                )
                              }
                              className="ml-3 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                              aria-label="Delete notice"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
