import type { Skip } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BottomNav = ({
  selectedSkip,
  selectedSkipData,
}: {
  selectedSkip: string | null;
  selectedSkipData: Skip | undefined;
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="hidden sm:flex items-center space-x-4">
            {selectedSkipData && (
              <>
                <span className="text-gray-300 text-sm">Selected:</span>
                <span className="font-semibold text-white">
                  {selectedSkipData.name}
                </span>
                <div className="w-px h-6 bg-white/20"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  £{selectedSkipData.price}
                </span>
              </>
            )}
          </div>

          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 rounded-xl px-8 shadow-lg"
            disabled={!selectedSkip}
          >
            Continue to Permit Check
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
