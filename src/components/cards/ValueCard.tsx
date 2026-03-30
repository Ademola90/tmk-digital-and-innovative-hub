import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "orange";
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    green: "bg-green-50 border-green-200",
    orange: "bg-orange-50 border-orange-200",
  };

  const iconColorClasses = {
    blue: "text-[#2563EB]",
    purple: "text-purple-600",
    green: "text-green-600",
    orange: "text-orange-600",
  };

  return (
    <div
      className={`${colorClasses[color]} border rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
    >
      <div className={`text-4xl mb-4 ${iconColorClasses[color]}`}>{icon}</div>
      <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
