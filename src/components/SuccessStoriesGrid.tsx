
import { HiStar } from "react-icons/hi";
import type { SuccessStory } from "../data/successStoriesData";

interface SuccessStoriesGridProps {
  stories: SuccessStory[];
}

const SuccessStoriesGrid = ({ stories }: SuccessStoriesGridProps) => {
  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real students, real results. See how our learners transformed their
            careers
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary hover:scale-105 transform"
            >
              {/* Card Content */}
              <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <HiStar
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic leading-relaxed text-base md:text-sm flex-grow">
                  "{story.quote}"
                </p>

                {/* Achievement Badge */}
                <div className="bg-blue-50 border border-primary/20 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-primary">
                    {story.achievement}
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-dark text-base">
                      {story.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                    {story.company && (
                      <p className="text-primary text-xs font-semibold">
                        {story.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to write your success story?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of students who have transformed their careers with
            our comprehensive courses
          </p>
          <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesGrid;
