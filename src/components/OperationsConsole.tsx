"use client";

import { useEffect, useState } from "react";
import { CONSOLE_TICKETS, CONSOLE_STEPS, CONSOLE_RESPONSES } from "@/lib/constants";

export default function OperationsConsole() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative w-full max-w-[520px] transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{ animation: visible ? "float 6s ease-in-out infinite" : "none" }}
      aria-hidden="true"
    >
      {/* Window Chrome */}
      <div className="rounded-xl border border-white/10 bg-deep-2/90 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden">
        {/* Title Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-white/60 text-xs font-medium tracking-wide flex-1 text-center">
            Bilingual Support Operations Console
          </span>
          <span
            className="text-[10px] font-[800] tracking-wider text-white bg-accent px-2.5 py-1 rounded-full"
            style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
          >
            FR / EN · N1 · IT SUPPORT
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-0 min-h-[340px]">
          {/* Left: Ticket Triage */}
          <div className="p-4 border-r border-white/8">
            <h3 className="text-white/90 text-sm font-[800] mb-3 tracking-wide">Ticket Triage</h3>
            <div className="flex flex-col gap-2">
              {CONSOLE_TICKETS.map((ticket, i) => (
                <div
                  key={ticket.label}
                  className="flex items-start gap-2.5 bg-white/[0.06] rounded-lg px-3 py-2.5 border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.1]"
                  style={{
                    animation: visible ? `staggerIn 0.4s ease-out ${300 + i * 150}ms both` : "none",
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                    style={{ backgroundColor: ticket.color }}
                  />
                  <div>
                    <p className="text-white/90 text-[13px] font-[700] leading-tight">{ticket.label}</p>
                    <p className="text-white/40 text-[11px] leading-tight">{ticket.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Diagnostic + Response */}
          <div className="flex flex-col">
            {/* Diagnostic Path */}
            <div className="p-4 flex-1">
              <h3 className="text-ink text-sm font-[800] mb-3 bg-white rounded-lg px-3 py-2 shadow-sm">
                Diagnostic Path
              </h3>
              <div className="flex flex-col gap-1.5">
                {CONSOLE_STEPS.map((step, i) => {
                  const colors = ["#0d7c66", "#0d7c66", "#c9822e", "#0d7c66", "#dc2626"];
                  return (
                    <div
                      key={step}
                      className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/[0.04]"
                      style={{
                        animation: visible ? `staggerIn 0.4s ease-out ${600 + i * 200}ms both` : "none",
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded text-[10px] font-[800] text-white flex items-center justify-center shrink-0"
                        style={{ backgroundColor: colors[i] }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-white/80 text-[12px] font-medium">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customer Response */}
            <div
              className="border-t border-white/8 p-4"
              style={{
                animation: visible ? "staggerIn 0.5s ease-out 1600ms both" : "none",
              }}
            >
              <h3 className="text-ink text-sm font-[800] mb-2.5 bg-white rounded-lg px-3 py-2 shadow-sm">
                Customer Response
              </h3>
              <div className="flex flex-col gap-1.5">
                {CONSOLE_RESPONSES.map((r) => {
                  const tagColors: Record<string, string> = {
                    EN: "#0d7c66",
                    FR: "#c9822e",
                    NEXT: "#657082",
                  };
                  return (
                    <div key={r.tag} className="flex items-start gap-2 px-1">
                      <span
                        className="text-[10px] font-[800] text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                        style={{ backgroundColor: tagColors[r.tag] || "#657082" }}
                      >
                        {r.tag}
                      </span>
                      <span className="text-white/60 text-[11px] leading-snug">{r.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
