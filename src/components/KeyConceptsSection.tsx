"use client";

import { LineChart, Layout, Wand2, Plus } from "lucide-react";

export default function KeyConceptsSection() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Section: Title & Stats */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 mb-20">
        
        {/* Left: Titles */}
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            The Key Concepts Behind
          </h2>
          <p className="text-xl text-[#888888]">
            Three concepts that guide everything we do.
          </p>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
          <div className="flex flex-col border-l border-dashed border-white/10 pl-6">
            <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">
              Up to<span className="text-[#FF5F6D]">100k</span>
            </div>
            <p className="text-[#777777] text-sm sm:text-base leading-relaxed max-w-[180px]">
              Files supported for codebase analysis
            </p>
          </div>

          <div className="flex flex-col border-l border-dashed border-white/10 pl-6">
            <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">
              Up to<span className="text-[#FF5F6D]">26h</span>
            </div>
            <p className="text-[#777777] text-sm sm:text-base leading-relaxed max-w-[180px]">
              Maximum agent execution time
            </p>
          </div>

          <div className="flex flex-col border-l border-dashed border-white/10 pl-6">
            <div className="text-3xl sm:text-4xl font-semibold text-[#FF5F6D] mb-2">
              400k+
            </div>
            <p className="text-[#777777] text-sm sm:text-base leading-relaxed max-w-[180px]">
              Codebase wikis generated with Repo Wiki
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: The 3 Concepts Grid */}
      <div className="relative">
        {/* Corner Plus Icons */}
        <Plus className="absolute -top-3 -left-3 w-6 h-6 text-white/20" />
        <Plus className="absolute -top-3 -right-3 w-6 h-6 text-white/20" />
        <Plus className="absolute -bottom-3 -left-3 w-6 h-6 text-white/20" />
        <Plus className="absolute -bottom-3 -right-3 w-6 h-6 text-white/20" />

        {/* The Grid Container with dashed border */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed border-white/10 relative">
          
          {/* Card 1 */}
          <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors">
            <div className="mb-8">
              <LineChart className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Enhanced Context Engineering
            </h3>
            <p className="text-gray-400 leading-relaxed text-[17px]">
              Our advanced context engine combines deep codebase analysis with adaptive memory,
              delivering smarter AI that truly evolves with you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors">
            <div className="mb-8">
              <Layout className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Knowledge Visibility
            </h3>
            <p className="text-gray-400 leading-relaxed text-[17px]">
              Make your codebase truly understandable - for both humans and AI.
              Clear visibility reduces hallucinations and improves alignment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 sm:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="mb-8">
              <Wand2 className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Spec-Driven Development
            </h3>
            <p className="text-gray-400 leading-relaxed text-[17px]">
              Start by writing specs to clarify requirements. Then delegate implementation -
              stay in control while AI automates execution. Fewer iterations. Faster delivery.
            </p>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
