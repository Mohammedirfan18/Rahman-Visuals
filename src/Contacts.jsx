import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  const socials = [
    {
      platform: "Facebook",
      link: "https://www.facebook.com/share/1PgdTtwc78/",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/vidvirtue/?igsh=MXdlb2lwNjJsMTBjZg%3D%3D",
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/abdul-rahman-0310b92aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
  ];

  const contactInfo = [
    {
      type: "PHONE",
      value: "+91 9391060563",
      icon: <FaPhone className="w-6 h-6" />,
    },
    {
      type: "EMAIL",
      value: "ar5279354@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "9391060563";
    const whatsappUrl = `https://wa.me/91${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="pt-20 pb-10 bg-black relative overflow-hidden text-white">
      
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full
        bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
        from-customTeal2 via-customTeal2 to-customTeal"
        style={{
          filter: "blur(180px)",
          transform: "translate(-20%, -30%)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]
        from-customTeal2 via-customTeal2 to-customTeal"
        style={{
          filter: "blur(180px)",
          transform: "translate(-20%, -30%)",
          zIndex: 0,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4">READY TO SCALE?</h2>
        <p className="text-customTeal2 text-4xl sm:text-5xl font-serif mb-6">
          Let's get started
        </p>

        
        <div className="bg-gray-900 p-8 max-w-3xl mx-auto rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {social.icon}
                  <span className="text-lg font-medium">{social.platform}</span>
                </a>
              ))}
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.type}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {info.icon}
                  {info.type === "PHONE" ? (
                    <a
                      href={`tel:${info.value.replace(/\s+/g, "")}`}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <a
                      href={`mailto:${info.value}`}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      {info.value}
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 bg-customTeal2 hover:bg-green-600 transition-colors text-white px-4 py-3 rounded-lg text-lg font-medium"
            >
              <FaWhatsapp className="w-6 h-6" />
              Message on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
