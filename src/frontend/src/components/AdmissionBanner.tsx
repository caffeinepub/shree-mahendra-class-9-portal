import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardList } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function AdmissionBanner() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    grade: "",
    guardianName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy py-4 px-4"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ClipboardList size={28} className="text-navy shrink-0" />
            <div>
              <p className="font-bold text-lg leading-tight">
                ADMISSION OPEN 2026
              </p>
              <p className="text-sm font-medium text-navy/80">
                Shree Mahendra Secondary School — Enroll Now for Class 9
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="bg-navy text-white hover:bg-blue-900 rounded-full px-6 font-semibold shrink-0"
          >
            Register Now
          </Button>
        </div>
      </motion.section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-navy text-xl">
              Admission Registration
            </DialogTitle>
            <DialogDescription>
              Fill in the details below and we will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-2xl font-bold text-green-600 mb-2">
                Registration Submitted!
              </p>
              <p className="text-muted-foreground text-sm">
                Thank you, {form.name}. The school will contact you soon.
              </p>
              <Button
                className="mt-6 rounded-full"
                onClick={() => {
                  setOpen(false);
                  setSubmitted(false);
                  setForm({ name: "", phone: "", grade: "", guardianName: "" });
                }}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="name">Student Full Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="e.g. Ram Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="guardianName">Guardian Name</Label>
                <Input
                  id="guardianName"
                  required
                  placeholder="e.g. Hari Sharma"
                  value={form.guardianName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, guardianName: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  placeholder="e.g. 9800000000"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="grade">Applying for Grade</Label>
                <Input
                  id="grade"
                  required
                  placeholder="e.g. 9"
                  value={form.grade}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, grade: e.target.value }))
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-navy text-white hover:bg-blue-900 font-semibold"
              >
                Submit Registration
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
