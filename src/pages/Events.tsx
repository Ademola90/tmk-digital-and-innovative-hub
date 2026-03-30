import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EventsHero from "../components/heros/eventsHero";
import EventCard from "../components/cards/EventCard";
import { eventsData } from "../data/eventsData";
import { useToastStore } from "../store/toastStore";

const Events: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "upcoming" | "past" | "sold-out"
  >("all");
  const addToast = useToastStore((state) => state.addToast);

  // Filter and search events
  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    if (selectedFilter === "all") return matchesSearch;
    return matchesSearch && event.status === selectedFilter;
  });

  const handleRegister = (eventTitle: string) => {
    addToast(`Successfully registered for "${eventTitle}"!`, "success");
  };

  const filterTabs = [
    { label: "All Events", value: "all" as const },
    { label: "Upcoming", value: "upcoming" as const },
    { label: "Past Events", value: "past" as const },
    { label: "Sold Out", value: "sold-out" as const },
  ];

  // Count events by status
  const eventCounts = {
    all: eventsData.length,
    upcoming: eventsData.filter((e) => e.status === "upcoming").length,
    past: eventsData.filter((e) => e.status === "past").length,
    "sold-out": eventsData.filter((e) => e.status === "sold-out").length,
  };

  return (
    <div>
      <Navbar />
      <EventsHero onSearchChange={setSearchQuery} />

      {/* Filter Section */}
      <section className="py-8 px-5 md:px-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === tab.value
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "bg-white text-[#1E3A8A] border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm">({eventCounts[tab.value]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          {filteredEvents.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                  {selectedFilter === "all"
                    ? "All Events"
                    : selectedFilter.charAt(0).toUpperCase() +
                      selectedFilter.slice(1)}{" "}
                  Events
                </h2>
                <p className="text-gray-600 mt-2">
                  Showing {filteredEvents.length} event
                  {filteredEvents.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    type={event.type}
                    location={event.location}
                    description={event.description}
                    image={event.image}
                    speaker={event.speaker}
                    registered={event.registered}
                    capacity={event.capacity}
                    status={event.status}
                    onRegister={() => handleRegister(event.title)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">
                No events found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1E40AF] transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Never Miss an Event
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe to our newsletter and get notified about upcoming events,
            webinars, and exclusive offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToast("Successfully subscribed to our newsletter!", "success");
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#2563EB] text-white font-bold rounded-lg hover:bg-[#1E40AF] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
