import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Award, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "./ui/button";
import withLoading from "./withLoading";
import type { Skip } from "@/lib/utils";

type Props = {
  skips: Skip[];
  selectedSkip: string | null;
  hoveredSkip: string | null;
  setSelectedSkip: (id: string | null) => void;
  setHoveredSkip: (id: string | null) => void;
};

const SkipSelectionGrid: React.FC<Props> = ({
  skips,
  selectedSkip,
  hoveredSkip,
  setSelectedSkip,
  setHoveredSkip,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {skips.map((skip, index) => (
        <div
          key={skip.id}
          className={`relative pb-8 group cursor-pointer transform transition-all duration-500 ${
            selectedSkip === skip.id ? "scale-105 z-20" : "hover:scale-102"
          } ${index % 2 === 0 ? "md:translate-y-8" : ""}`}
          onClick={() =>
            setSelectedSkip(selectedSkip === skip.id ? null : skip.id)
          }
          onMouseEnter={() => setHoveredSkip(skip.id)}
          onMouseLeave={() => setHoveredSkip(null)}
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl transition-opacity duration-300 ${
              selectedSkip === skip.id || hoveredSkip === skip.id
                ? "opacity-100"
                : "opacity-0"
            }`}
          ></div>

          <Card className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl pt-0 overflow-hidden shadow-2xl">
            {/* Recommendation Badge */}
            {skip.isRecommended && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>RECOMMENDED</span>
                </div>
              </div>
            )}

            {/* Savings Badge */}
            {skip.savings && (
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  Save £{skip.savings}
                </div>
              </div>
            )}

            <CardContent className="p-0">
              {/* Skip Visual */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-400 via-cyan-400 to-emerald-400 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-center">
                  <img
                    src={skip.image}
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-full object-contain rounded-t-3xl"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/30 rounded-full animate-float-delay"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{skip.name}</h3>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">
                      {skip.popularity}% popular
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex space-x-2 mb-2">
                    {skip.allowedOnRoad && (
                      <div className="bg-blue-500/20 text-blue-300 px-2 py-1 text-xs rounded-full font-medium">
                        Road Placement OK
                      </div>
                    )}
                    {skip.allowsHeavyWaste && (
                      <div className="bg-yellow-500/20 text-yellow-300 px-2 py-1 text-xs rounded-full font-medium">
                        Heavy Waste Allowed
                      </div>
                    )}
                  </div>
                  {skip.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      £{skip.price}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {skip.hire_period} days included
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs">Premium service</div>
                  </div>
                </div>
                {(skip.transportCost || skip.perTonneCost) && (
                  <div className="text-gray-400 text-sm mb-4 space-y-1">
                    {skip.transportCost && (
                      <div>
                        <span className="font-medium text-white">
                          Transport:
                        </span>{" "}
                        £{skip.transportCost.toFixed(2)}
                      </div>
                    )}
                    {skip.perTonneCost && (
                      <div>
                        <span className="font-medium text-white">
                          Per tonne:
                        </span>{" "}
                        £{skip.perTonneCost.toFixed(2)}
                      </div>
                    )}
                  </div>
                )}
                {/* Action Button */}
                <Button
                  className={`w-full h-12 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedSkip === skip.id
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSkip(selectedSkip === skip.id ? null : skip.id);
                  }}
                >
                  {selectedSkip === skip.id ? (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Selected
                    </>
                  ) : (
                    <>
                      Select This Skip
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default withLoading(SkipSelectionGrid);
