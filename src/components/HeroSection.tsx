import { Target } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
        <Target className="w-5 h-5 text-green-400" />
        <span className="text-green-200 font-medium">Step 3 of 6</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-green-200 bg-clip-text text-transparent mb-4">
        Choose Your
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Perfect Skip
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Select from our premium collection of skips, each designed for different
        project needs
      </p>
    </div>
  );
};

export default HeroSection;
