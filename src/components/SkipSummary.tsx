import type { Skip } from "@/lib/utils";
import { Sparkles, TrendingUp } from "lucide-react";

const SkipSummary = ({
  selectedSkipData,
}: {
  selectedSkipData: Skip | undefined;
}) => {
  if (!selectedSkipData)
    return null;
  return (
    <div
      className={`backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-8 mb-8`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {selectedSkipData.size}
              </div>
              <div className="text-white/80 text-xs">YARDS</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedSkipData.name}
            </h3>
            <p className="text-gray-300">
              {selectedSkipData.hire_period} day premium hire period
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">
                  {selectedSkipData.popularity}% popularity
                </span>
              </div>
              {selectedSkipData.savings && (
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm">
                    Save £{selectedSkipData.savings}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            £{selectedSkipData.price}
          </div>
          <div className="text-gray-300">inc. VAT & delivery</div>
        </div>
      </div>
    </div>
  );
};

export default SkipSummary;
