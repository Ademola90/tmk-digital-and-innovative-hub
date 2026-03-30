import React from "react";
import { HiLink } from "react-icons/hi";

interface Social {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: Social;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  bio,
  social,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">{name}</h3>
        <p className="text-sm font-semibold text-[#2563EB] mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bio}</p>

        {/* Social Links */}
        {social && (
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
                title="LinkedIn"
              >
                <HiLink size={20} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
                title="Twitter"
              >
                <HiLink size={20} />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
                title="GitHub"
              >
                <HiLink size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
