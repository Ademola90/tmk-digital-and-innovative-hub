import React from "react";

const ContactHero: React.FC = () => {
  return (
    <div className="min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-center px-5 md:px-20 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Get in Touch With Us
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Have questions about our courses, events, or services? We&apos;d love
          to hear from you. Our team is here to help and will respond within 24
          hours.
        </p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <div className="text-center">
            <p className="text-sm text-white/80">Email Response Time</p>
            <p className="text-xl font-bold">24 Hours</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/80">Available Days</p>
            <p className="text-xl font-bold">Mon - Fri</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/80">Support Team</p>
            <p className="text-xl font-bold">Always Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
