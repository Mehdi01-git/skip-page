import { useState } from "react";
import Header from "./components/Header";
import SkipSelectionGrid from "./components/SkipSelectionGrid";
import { useSkipsQuery } from "./hooks/useSkipQuery";
import HeroSection from "./components/HeroSection";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  const { data: skips = [], isLoading } = useSkipsQuery();
  const [selectedSkip, setSelectedSkip] = useState<string | null>(null);
  const [hoveredSkip, setHoveredSkip] = useState<string | null>(null);
  const selectedSkipData = skips.find((skip) => skip.id === selectedSkip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900  to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
      </div>

      {/* Floating Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Skip Selection Grid */}
        <SkipSelectionGrid
          isLoading={isLoading}
          skips={skips}
          placeholder={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl h-96"></div>
                </div>
              ))}
            </div>
          }
          selectedSkip={selectedSkip}
          hoveredSkip={hoveredSkip}
          setSelectedSkip={setSelectedSkip}
          setHoveredSkip={setHoveredSkip}
        />
      </div>

      {/* Floating Bottom Navigation */}
      <BottomNav
        selectedSkip={selectedSkip}
        selectedSkipData={selectedSkipData}
      />
    </div>
  );
}

export default App;
