import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { askPortfolioAI, resetConversation } from "../utils/aiService";
import {
  BsRobot,
  BsSendFill,
  BsShieldCheck,
  BsArrowRightShort,
  BsStars,
  BsArrowClockwise,
  BsCpuFill,
} from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

/**
 * Parses inline formatting: [link](url) and **bold** text.
 */
function renderInlineFormatting(text) {
  if (!text) return null;

  // Split by markdown link pattern [text](url) or bold pattern **text**
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (href.startsWith("/")) {
        return (
          <Link
            key={idx}
            to={href}
            className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          {label}
        </a>
      );
    }

    return <span key={idx}>{part}</span>;
  });
}

/**
 * Formats multi-line text with headings, lists, links, and bold elements.
 */
function renderFormattedText(text) {
  if (!text) return null;

  return text.split("\n").map((line, lineIdx) => {
    const trimmed = line.trim();

    // Empty line spacer
    if (trimmed === "") {
      return <div key={lineIdx} className="h-2" />;
    }

    // Markdown Headers (###, ##)
    if (trimmed.startsWith("### ")) {
      return (
        <h4 key={lineIdx} className="text-base font-bold text-neutral-900 dark:text-white mt-3 mb-1">
          {renderInlineFormatting(trimmed.slice(4))}
        </h4>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={lineIdx} className="text-lg font-bold text-neutral-900 dark:text-white mt-3.5 mb-1.5">
          {renderInlineFormatting(trimmed.slice(3))}
        </h3>
      );
    }

    // Bullet points (•, -, *)
    if (trimmed.startsWith("•") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.replace(/^([•\-\*]\s*)/, "");
      return (
        <div key={lineIdx} className="ml-1.5 flex items-start gap-2 my-0.5">
          <span className="text-emerald-500 font-bold mt-0.5 shrink-0 text-xs">•</span>
          <div className="flex-1">{renderInlineFormatting(content)}</div>
        </div>
      );
    }

    // Numbered lists (e.g. 1. , 2. )
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numberedMatch) {
      const [, num, content] = numberedMatch;
      return (
        <div key={lineIdx} className="ml-1.5 flex items-start gap-2 my-0.5">
          <span className="text-emerald-500 font-bold text-xs shrink-0 mt-0.5">{num}.</span>
          <div className="flex-1">{renderInlineFormatting(content)}</div>
        </div>
      );
    }

    return (
      <div key={lineIdx} className="my-0.5">
        {renderInlineFormatting(line)}
      </div>
    );
  });
}

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm **Muhammad Haikal's Portfolio AI Assistant**.\n\nI can answer any questions regarding Haikal's projects, experience, and background:\n• 🤖 **AI & Machine Learning Projects** (BDC Satria Data, YOLOv26 & ByteTrack, IndoBERT NLP)\n• 💼 **Urbansolv Internship** (Smart Building IoT & Occupancy Computer Vision)\n• 📊 **Data Analytics & BI** (21-Yr IDX Stock Analysis, HR Attrition Power BI, Tableau)\n• 🛠️ **Tech Stack & Core Competencies**\n• 🏆 **Achievements & Certifications**\n\n*Feel free to ask anything about Haikal's work!*",
      sources: [
        { title: "Explore All Projects", path: "/project" },
        { title: "About Haikal", path: "/about" },
        { title: "Achievements", path: "/achievement" },
      ],
      isLLM: true,
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  const quickQuestions = [
    "Tell me about the BDC Satria Data 2026 waste classification project",
    "How does the YOLOv26 + ByteTrack road damage detection work?",
    "What was Haikal's role during his internship at Urbansolv?",
    "Explain the disguised gambling NLP detection project",
    "What are Haikal's primary ML & data analytics tools?",
    "What awards and certifications has Haikal earned?",
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleClearChat = () => {
    resetConversation();
    setMessages([
      {
        sender: "ai",
        text: "Conversation history has been reset. Feel free to ask anything about **Muhammad Haikal's** portfolio and projects!",
        sources: [
          { title: "Explore All Projects", path: "/project" },
          { title: "About Haikal", path: "/about" },
        ],
        isLLM: true,
      },
    ]);
  };

  const handleSend = async (queryText) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    try {
      const response = await askPortfolioAI(textToSend);
      const aiMsg = {
        sender: "ai",
        text: response.answer,
        sources: response.sources || [],
        isLLM: response.isLLM,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, an unexpected error occurred while processing your request. Please try asking again.",
          sources: [{ title: "Explore All Projects", path: "/project" }],
          isLLM: false,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio AI Assistant — Muhammad Haikal</title>
        <meta
          name="description"
          content="Interact with Muhammad Haikal's Portfolio AI Assistant. Ask questions about Machine Learning projects, Urbansolv internship, and Data Science expertise."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/ai-assistant" />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col h-[calc(100vh-5rem)] max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="pt-2 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm">
                <BsRobot size={22} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  Portfolio AI Assistant
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                    LLM-Powered • Interactive
                  </span>
                </h1>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  In-depth conversational Q&A grounded in Muhammad Haikal's verified projects and experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
                title="Start a new conversation"
              >
                <BsArrowClockwise size={13} />
                <span>New Chat</span>
              </button>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <BsShieldCheck className="text-emerald-500 text-sm" />
                <span>Verified Context</span>
              </div>
            </div>
          </div>
          <hr className="mt-4 border-t border-neutral-200 dark:border-neutral-800" />
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 py-2 hide-scrollbar">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <BsRobot size={15} />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-tr-none shadow-sm"
                    : "bg-white dark:bg-[#161616] text-neutral-800 dark:text-neutral-200 border border-neutral-200/90 dark:border-neutral-800 rounded-tl-none shadow-sm"
                }`}
              >
                <div className="whitespace-pre-line">
                  {renderFormattedText(msg.text)}
                </div>

                {/* Sources / Deep-links */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-1.5">
                      <BsStars className="text-emerald-500" /> Related Portfolio References:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {msg.sources.map((src, sIdx) => (
                        <Link
                          key={sIdx}
                          to={src.path}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-emerald-600 dark:text-emerald-400 border border-neutral-200 dark:border-neutral-800 transition-colors font-medium"
                        >
                          <span className="truncate max-w-[240px]">{src.title}</span>
                          <BsArrowRightShort size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <IoPersonOutline size={15} />
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 items-center text-xs text-neutral-400 ml-1"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600/80 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <BsRobot size={15} />
              </div>
              <div className="bg-white dark:bg-[#161616] px-4 py-2.5 rounded-2xl rounded-tl-none border border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 mr-1 flex items-center gap-1">
                  <BsCpuFill className="animate-spin text-[10px]" /> AI is thinking...
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </motion.div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips — Clean, high-contrast, sensible pill colors */}
        <div className="py-2.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-xs px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-emerald-400 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 flex-shrink-0 cursor-pointer shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Query Input Box */}
        <div className="pt-2 pb-4">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about AI projects, Urbansolv internship, datasets, or skills..."
              className="w-full pl-4 pr-12 py-3 rounded-xl bg-white dark:bg-[#161616] border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputQuery.trim() || isTyping}
              className="absolute right-2 p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white transition-colors cursor-pointer"
              aria-label="Send query"
            >
              <BsSendFill size={14} />
            </button>
          </div>
          <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 mt-2">
            LLM-powered conversational assistant &bull; Grounded in Muhammad Haikal's portfolio case studies
          </p>
        </div>
      </motion.div>
    </>
  );
}
