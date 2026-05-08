"use client";

import { useEffect, useState } from "react";
import { CONSOLE_RESPONSES, CONSOLE_STEPS, CONSOLE_TICKETS } from "@/lib/constants";

export default function OperationsConsole() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative w-full max-w-[520px] transition-all duration-700 max-[560px]:max-w-full ${
        visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
      style={{ animation: visible ? "float 6s ease-in-out infinite" : "none" }}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-deep-2/90 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-xs font-medium tracking-wide text-white/60">
            Bilingual Support Operations Console
          </span>
          <span
            className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-[800] tracking-wider text-white max-[560px]:hidden"
            style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
          >
            FR / EN / N1
          </span>
        </div>

        <div className="grid min-h-[340px] grid-cols-[1fr_1.2fr] gap-0 max-[560px]:min-h-0 max-[560px]:grid-cols-1">
          <div className="border-r border-white/8 p-4 max-[560px]:border-b max-[560px]:border-r-0">
            <h3 className="mb-3 text-sm font-[800] tracking-wide text-white/90">Ticket Triage</h3>
            <div className="flex flex-col gap-2">
              {CONSOLE_TICKETS.map((ticket, index) => (
                <div
                  key={ticket.label}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.06] px-3 py-2.5 transition-all duration-300 hover:bg-white/[0.1]"
                  style={{
                    animation: visible
                      ? `staggerIn 0.4s ease-out ${300 + index * 150}ms both`
                      : "none",
                  }}
                >
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: ticket.color }}
                  />
                  <div>
                    <p className="m-0 text-[13px] font-[700] leading-tight text-white/90">
                      {ticket.label}
                    </p>
                    <p className="m-0 text-[11px] leading-tight text-white/40">{ticket.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1 p-4">
              <h3 className="mb-3 rounded-lg bg-white px-3 py-2 text-sm font-[800] text-ink shadow-sm">
                Diagnostic Path
              </h3>
              <div className="flex flex-col gap-1.5">
                {CONSOLE_STEPS.map((step, index) => {
                  const colors = ["#0d7c66", "#0d7c66", "#c9822e", "#0d7c66", "#dc2626"];
                  return (
                    <div
                      key={step}
                      className="flex items-center gap-2.5 rounded-md bg-white/[0.04] px-3 py-1.5"
                      style={{
                        animation: visible
                          ? `staggerIn 0.4s ease-out ${600 + index * 200}ms both`
                          : "none",
                      }}
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-[800] text-white"
                        style={{ backgroundColor: colors[index] }}
                      >
                        {index + 1}
                      </span>
                      <span className="text-[12px] font-medium text-white/80">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="border-t border-white/8 p-4"
              style={{
                animation: visible ? "staggerIn 0.5s ease-out 1600ms both" : "none",
              }}
            >
              <h3 className="mb-2.5 rounded-lg bg-white px-3 py-2 text-sm font-[800] text-ink shadow-sm">
                Customer Response
              </h3>
              <div className="flex flex-col gap-1.5">
                {CONSOLE_RESPONSES.map((response) => {
                  const tagColors: Record<string, string> = {
                    EN: "#0d7c66",
                    FR: "#c9822e",
                    NEXT: "#657082",
                  };
                  return (
                    <div key={response.tag} className="flex items-start gap-2 px-1">
                      <span
                        className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-[800] text-white"
                        style={{ backgroundColor: tagColors[response.tag] || "#657082" }}
                      >
                        {response.tag}
                      </span>
                      <span className="text-[11px] leading-snug text-white/60">
                        {response.text}
                      </span>
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
