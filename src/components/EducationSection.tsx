import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle, Code, Cpu, Compass, Binary } from 'lucide-react';
import { CANDIDATE_INFO, COURSEWORK_SEMESTER_1 } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 relative border-t border-cyan-500/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION &amp; RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Core Coursework
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Pursuing <span className="text-white font-semibold">1st Year B.Tech in Information Technology</span> (Roll No: <span className="font-mono text-cyan-300 font-bold">IT20</span>) at <span className="text-white font-semibold">Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat</span>.
          </p>
        </div>

        {/* College & Degree Banner */}
        <div className="rounded-2xl bg-[#090d16] border border-cyan-500/20 p-6 sm:p-8 mb-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Shri Swami Atmanand Saraswati Institute of Technology (SSASIT)
                </h3>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-bold">
                  Surat, Gujarat
                </span>
              </div>
              <p className="text-slate-300 text-sm mt-1">
                Bachelor of Technology in Information Technology · <span className="text-cyan-300 font-mono font-medium">Semester 1</span>
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-white font-semibold">Roll No: IT20</span>
                <span>·</span>
                <span>Target: GDG on Campus SSASIT 2026 Core Team</span>
                <span>·</span>
                <span>Batch: 2024–2028</span>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 shrink-0">
            <span className="text-xs text-slate-400 font-mono">Academic Status</span>
            <span className="text-base font-bold text-emerald-400 font-mono mt-0.5">Active 1st Year</span>
            <span className="text-[11px] text-slate-500">SSASIT IT Department</span>
          </div>
        </div>

        {/* Semester 1 Coursework Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <h4 className="text-lg font-bold text-white font-mono">
                B.Tech IT (Semester 1) Coursework &amp; Competencies
              </h4>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">GTU / SSASIT Curriculum</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURSEWORK_SEMESTER_1.map((course, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                    CODE: {course.code}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {idx === 0 && <Code className="w-3.5 h-3.5" />}
                    {idx === 1 && <Compass className="w-3.5 h-3.5" />}
                    {idx === 2 && <Cpu className="w-3.5 h-3.5" />}
                    {idx === 3 && <Binary className="w-3.5 h-3.5" />}
                    {idx === 4 && <Award className="w-3.5 h-3.5" />}
                    {idx === 5 && <CheckCircle className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <h5 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {course.name}
                </h5>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {course.focus}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Semester 1</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> In Progress
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
