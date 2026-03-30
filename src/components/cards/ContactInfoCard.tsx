import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  linkHref?: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  content,
  linkHref,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="text-3xl text-[#2563EB] mt-1">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">{title}</h3>
          {Array.isArray(content) ? (
            <div className="space-y-1">
              {content.map((item, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {item}
                </p>
              ))}
            </div>
          ) : linkHref ? (
            <a
              href={linkHref}
              className="text-[#2563EB] hover:text-[#1E40AF] font-medium text-sm transition-colors"
            >
              {content}
            </a>
          ) : (
            <p className="text-gray-600 text-sm">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
