import { useState } from "react";
import Button from "./ui/buttons";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-gradient-to-r from-primary to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
          Join Our Newsletter
        </h2>
        <p className="text-white/80 mb-8">
          Subscribe our newsletter to get our latest update & news.
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full outline-none text-dark"
          />
          <Button
            text="Subscribe Now"
            onClick={handleSubscribe}
            variant="secondary"
            className="px-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
