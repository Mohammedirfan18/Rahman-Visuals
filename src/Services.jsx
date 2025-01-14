import React from 'react';

const ServicesSection = () => {
  // Services data - you can move this to a separate data file if needed
  const services = [
    {
      title: "Short Form Videos",
      description: "Nail your Reels, TikToks, and YouTube shorts to optimize engagement and shareability.",
    },
    {
      title: "YouTube Videos",
      description: "YouTube videos made more engaging than ever for longer watch time and more subscribers.",
    }
  ];
  const handleWhatsAppClick = () => {
    // Remove any spaces or special characters from the phone number
    const phoneNumber = '9391060563';
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/91${phoneNumber}`;
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
};
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center mb-3 sm:mb-4 text-white">
          What can i help you?
        </h2>
        
        {/* Subheading */}
        <p className="text-customTeal2 text-lg sm:text-xl lg:text-2xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto px-2 sm:px-4">
          FROM SHORT-FORM VIDEOS TO LONG-FORM VIDEOS, I GOT YOU COVERED
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 py-6 sm:py-8 lg:py-12 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col gap-4 sm:gap-6 bg-gradient-to-br from-customTeal2 via-customTeal to-black bg-opacity-50 shadow-xl rounded-lg p-4 sm:p-5 lg:p-6 hover:shadow-2xl hover:shadow-customTeal2 hover:border hover:border-white transition-all duration-300"
          >
            <div className="text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
       {/* Centered Button */}
       <div className="flex justify-center mt-8">
                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-zinc-800 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-2xl  border border-customTeal2 transition-all duration-300 hover:bg-gradient-to-br from-customTeal2 via-customTeal to-black hover:shadow-customTeal2 bg-opacity-50 flex items-center gap-2"
                    >
                        Message me

                    </button>
                </div>
    </section>
  );
};

export default ServicesSection;