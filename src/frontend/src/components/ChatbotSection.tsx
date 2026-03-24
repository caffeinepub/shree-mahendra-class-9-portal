import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { getChatbotAnswer } from "../data/mockData";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 0,
    sender: "bot",
    text: "Hello! I'm SMSS AI Assistant. Ask me about homework, results, routine, notices, or anything about Class 9!",
  },
];

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), sender: "user", text };
    const botMsg: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: getChatbotAnswer(text),
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    scrollToBottom();
  };

  return (
    <section id="chatbot" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-navy tracking-wide">
            AI ACADEMIC CHATBOT
          </h2>
          <p className="text-muted-foreground mt-2">
            Ask any question about Class 9 academics
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-hero border border-border">
          <div className="bg-navy px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-school-blue flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">ASK SMSS AI</p>
              <p className="text-blue-300 text-xs">
                Academic Assistant • Online
              </p>
            </div>
          </div>

          <div
            className="h-80 overflow-y-auto bg-school-page px-4 py-4 space-y-3"
            data-ocid="chatbot.panel"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === "user"
                      ? "bg-school-blue text-white rounded-br-sm"
                      : "bg-white text-foreground shadow-xs rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="bg-white border-t border-border px-4 py-3 flex gap-2">
            <Input
              data-ocid="chatbot.search_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 rounded-full text-sm"
            />
            <Button
              data-ocid="chatbot.send.button"
              onClick={sendMessage}
              className="bg-school-blue hover:bg-blue-700 text-white rounded-full w-10 h-10 p-0 flex-shrink-0"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
