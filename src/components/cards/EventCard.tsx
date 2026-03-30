import React from "react";
import { HiCalendar, HiLocationMarker, HiUser } from "react-icons/hi";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  type: "webinar" | "workshop" | "conference" | "meetup";
  location: string;
  description: string;
  image: string;
  speaker?: string;
  registered: number;
  capacity: number;
  status: "upcoming" | "past" | "sold-out";
  onRegister?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  type,
  location,
  description,
  image,
  speaker,
  registered,
  capacity,
  status,
  onRegister,
}) => {
  const typeColorMap = {
    webinar: "bg-blue-100 text-[#2563EB]",
    workshop: "bg-purple-100 text-purple-600",
    conference: "bg-orange-100 text-orange-600",
    meetup: "bg-green-100 text-green-600",
  };

  const statusColorMap = {
    upcoming: "bg-green-100 text-green-700",
    past: "bg-gray-100 text-gray-700",
    "sold-out": "bg-red-100 text-red-700",
  };

  const spotsAvailable = capacity - registered;
  const isSoldOut = spotsAvailable === 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColorMap[type]}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColorMap[status]}`}
          >
            {status === "sold-out"
              ? "Sold Out"
              : status === "upcoming"
                ? "Upcoming"
                : "Past"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <HiCalendar size={16} className="text-[#2563EB]" />
            <span>
              {date} • {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker size={16} className="text-[#2563EB]" />
            <span>{location}</span>
          </div>
          {speaker && (
            <div className="flex items-center gap-2">
              <HiUser size={16} className="text-[#2563EB]" />
              <span>{speaker}</span>
            </div>
          )}
        </div>

        {/* Registration Info */}
        {status === "upcoming" && (
          <div className="mb-4 text-xs text-gray-500">
            {isSoldOut ? (
              <span className="text-red-600 font-semibold">Sold Out</span>
            ) : (
              <span>{spotsAvailable} spots available</span>
            )}
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={onRegister}
          disabled={isSoldOut || status === "past"}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm ${
            status === "past"
              ? "bg-gray-100 text-gray-600 cursor-not-allowed"
              : isSoldOut
                ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                : "bg-[#2563EB] text-white hover:bg-[#1E40AF] cursor-pointer"
          }`}
        >
          {status === "past"
            ? "Event Ended"
            : isSoldOut
              ? "Sold Out"
              : "Register Now"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
