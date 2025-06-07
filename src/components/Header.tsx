import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";
const Header = () => {
  const steps = [
    { icon: MapPin, label: "Location", color: "from-purple-500 to-pink-500" },
    { icon: Trash2, label: "Waste", color: "from-green-500 to-teal-500" },
    {
      icon: Truck,
      label: "Skip",
      color: "from-blue-500 to-cyan-500",
      active: true,
    },
    { icon: Shield, label: "Permit", color: "from-orange-500 to-red-500" },
    { icon: Calendar, label: "Date", color: "from-indigo-500 to-purple-500" },
    { icon: CreditCard, label: "Pay", color: "from-pink-500 to-rose-500" },
  ];
  return (
    <div className="relative z-10">
      {/* Creative Progress Steps */}
      <div className=" border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <div className="flex items-center justify-center space-x-4 h-full">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="relative group">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${
                      step.color
                    } flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      step.active
                        ? "scale-110 shadow-2xl"
                        : "scale-90 opacity-60"
                    } group-hover:scale-105`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {step.active && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  )}
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span
                      className={`text-xs font-medium ${
                        step.active ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-white/30 to-white/10 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
