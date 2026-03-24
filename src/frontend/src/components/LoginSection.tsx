import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  BookOpen,
  GraduationCap,
  Monitor,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import { type Role, USERS } from "../data/mockData";

interface LoginSectionProps {
  defaultRole?: Role;
  onLogin: (role: Role, displayName: string) => void;
}

export function LoginSection({
  defaultRole = "student",
  onLogin,
}: LoginSectionProps) {
  const [tab, setTab] = useState<Role>(defaultRole);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    setError("");
    const user = USERS.find(
      (u) =>
        u.username === username && u.password === password && u.role === tab,
    );
    if (!user) {
      setError("Invalid username or password. Please try again.");
      return;
    }
    onLogin(user.role, user.displayName);
  };

  const roleInfo: Record<Role, { icon: ReactNode; hint: string }> = {
    student: {
      icon: <GraduationCap size={64} className="text-school-blue" />,
      hint: "student1 / pass123",
    },
    teacher: {
      icon: <BookOpen size={64} className="text-school-blue" />,
      hint: "teacher1 / pass123",
    },
    monitor: {
      icon: <Star size={64} className="text-school-blue" />,
      hint: "monitor1 / pass123",
    },
  };

  return (
    <section id="login" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-navy">Login System</h2>
          <p className="text-muted-foreground mt-2">Access Your Portal</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full bg-school-light flex items-center justify-center">
              <Monitor size={72} className="text-school-blue" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              SMSS Portal Access
            </p>
            <p className="text-xs text-muted-foreground">
              Hint: {roleInfo[tab].hint}
            </p>
          </div>

          <div className="w-full max-w-md bg-white rounded-2xl shadow-hero border border-border p-6">
            <Tabs
              value={tab}
              onValueChange={(v) => {
                setTab(v as Role);
                setError("");
                setUsername("");
                setPassword("");
              }}
            >
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="student" data-ocid="login.student.tab">
                  Student
                </TabsTrigger>
                <TabsTrigger value="teacher" data-ocid="login.teacher.tab">
                  Teacher
                </TabsTrigger>
                <TabsTrigger value="monitor" data-ocid="login.monitor.tab">
                  Monitor
                </TabsTrigger>
              </TabsList>

              {(["student", "teacher", "monitor"] as Role[]).map((role) => (
                <TabsContent key={role} value={role} className="space-y-4">
                  <div>
                    <Label htmlFor={`username-${role}`}>Username</Label>
                    <Input
                      id={`username-${role}`}
                      data-ocid="login.username.input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={`Enter ${role} username`}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`password-${role}`}>Password</Label>
                    <Input
                      id={`password-${role}`}
                      data-ocid="login.password.input"
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="mt-1"
                      onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="show-pass"
                      data-ocid="login.show_password.checkbox"
                      checked={showPass}
                      onCheckedChange={(v) => setShowPass(!!v)}
                    />
                    <Label
                      htmlFor="show-pass"
                      className="text-sm cursor-pointer"
                    >
                      Show Password
                    </Label>
                  </div>
                  {error && (
                    <div
                      data-ocid="login.error_state"
                      className="flex items-center gap-2 text-destructive text-sm"
                    >
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}
                  <Button
                    data-ocid="login.submit.button"
                    onClick={handleLogin}
                    className="w-full bg-school-blue hover:bg-blue-700 text-white rounded-lg font-semibold"
                  >
                    Login as {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Button>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
