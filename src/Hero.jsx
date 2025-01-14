import React from 'react';
import client1 from './assets/client1.jpg';
import client2 from './assets/client2.png';
import client3 from './assets/client3.jpg';
import client4 from './assets/client4.jpg';
import profile4 from './assets/profile4.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Remove any spaces or special characters from the phone number
    const phoneNumber = '9391060563';
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/91${phoneNumber}`;
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative min-h-screen overflow-hidden">
        {/* Top Bar - Moved to very top */}
        <div className="relative px-4 sm:px-8 lg:px-20 pt-8">
          <div className="flex flex-col sm:flex-row items-center w-full relative gap-4">
            {/* Gradient background - Only visible on desktop */}
            <div className="hidden lg:block absolute top-0 left-0 w-[400px] h-[400px] rounded-full
                  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
                  from-customTeal2 via-customTeal2 to-customTeal"
              style={{
                filter: 'blur(150px)',
                transform: 'translate(-20%, -30%)',
                zIndex: 0
              }}
            />

            {/* Left section */}
            <div className="flex items-center space-x-2 relative z-10 w-full sm:w-auto justify-center sm:justify-start">
              <div className="flex -space-x-2">
                <img src={client1} alt="Client 1" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white" />
                <img src={client2} alt="Client 2" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white" />
                <img src={client3} alt="Client 3" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white" />
                <img src={client4} alt="Client 4" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white" />
              </div>
              <div className="text-white font-extrabold">
                <div className="flex items-center gap-1 text-sm sm:text-base">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs sm:text-sm">Transforming Stories into Stunning Visuals</p>
              </div>
            </div>

            {/* Middle section */}
            <div className="hidden sm:block flex-1 mx-8 relative z-10">
              <div className="h-[3.2px] bg-white rounded-full w-full mt-[24px]" />
            </div>

            {/* Right section */}
            <button
              onClick={handleWhatsAppClick}
              className="relative z-10 font-bold bg-gradient-to-br from-customTeal2 via-customTeal to-customTeal2  bg-opacity-50 border-2 border-white  hover:bg-black hover:border-gray-500 hover:border-2 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full flex items-center text-base sm:text-xl transition-colors w-full sm:w-auto justify-center"
            >
              <span>Hire Me</span>
            </button>
          </div>
        </div>

        {/* Profile Circle - Moved below top bar */}
        <div className="block lg:hidden relative w-full pt-8">
          <div className="relative w-48 h-48 mx-auto">
            <img
              src={profile4}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-full border-2 border-customTeal"
              style={{
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            />
          </div>
        </div>

        {/* Desktop Profile - Hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-customTeal2 via-customTeal to-black bg-opacity-50 rounded-l-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-3/5 h-4/5 flex items-center justify-center">
              <img
                src={profile4}
                alt="Profile"
                className="object-cover object-center w-full h-full rounded-full"
                style={{
                  filter: 'contrast(1.1) brightness(1.05)',
                  transformOrigin: 'center',
                  transform: 'scale(1.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Hero Content - Below profile on mobile */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:ml-20 pt-8 lg:pt-28 font-extrabold">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 5,
                type: "spring",
                stiffness: 100
              }}
              className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-white to-customTeal2 bg-clip-text text-transparent text-center lg:text-left"
            >
              Ready to scale your brand with video?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-xl sm:text-2xl mb-8 sm:mb-12 font-serif max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              Hire me for top-notch editors who are dedicated to deliver your vision
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-br from-customTeal2 via-customTeal to-customTeal2 bg-opacity-50 border-2 border-white  hover:bg-customTeal2  border-transparent hover:border-gray-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center text-lg sm:text-xl transition-colors mx-auto lg:mx-0"
            >
              <span>Hire Me</span>
            </motion.button>

          </div>
        </div>
      </header>

    </div>
  );
};

export default Hero;