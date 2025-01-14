import React from "react";

const HighlightedSection = ({ clients }) => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Left Radial Gradient */}
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full 
        bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] 
        from-customTeal2 via-customTeal2 to-customTeal"
        style={{
          filter: "blur(180px)",
          transform: "translate(-20%, -30%)",
          zIndex: 0,
        }}
      />
      {/* Right Radial Gradient */}
      <div
        className="absolute top-1/2 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full 
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] 
        from-customTeal2 via-customTeal2 to-customTeal"
        style={{
          filter: "blur(180px)",
          transform: "translate(-20%, -30%)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Highlighted Text */}
        <p className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-snug text-white">
          We focus on <span className="text-customTeal2">delivering results.</span> We're dedicated to{" "}
          <span className="text-customTeal2">scaling</span> your brand with organic video content.
          Let's take your brand to the <span className="text-customTeal2">next level.</span>
        </p>

        {/* Trusted By Section */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex -space-x-4">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.image}
                alt={`Client ${index + 1}`}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-white font-extrabold text-lg mt-4">
            <span className="text-white font-bold">★★★★★</span> Transforming Stories into Stunning Visuals
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
