import React from "react";

interface StatCardProps {
  number: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  description,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-4xl font-bold text-[#2563EB] mb-2">{number}</p>
          <p className="text-lg font-semibold text-[#1E3A8A] mb-1">{label}</p>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
        {icon && (
          <div className="text-3xl text-[#2563EB] opacity-20">{icon}</div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
