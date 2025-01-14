
import Hero from './Hero';
import ServicesSection from './Services.jsx';
import HighlightedSection from "./Highlights.jsx";
import VideoSection from './VideoSection.jsx';
import ContactSection from './Contacts.jsx';
import Footer from './Footer.jsx';

import client1 from "./assets/client1.jpg";
import client2 from "./assets/client2.png";
import client3 from "./assets/client3.jpg";
import client4 from "./assets/client4.jpg";
function App() {
  const clients = [
    { image: client1 },
    { image: client2 },
    { image: client3 },
    { image: client4 },
  ];
  

  return (
    <>
      <Hero/>
      <ServicesSection/>
      <HighlightedSection clients={clients} />
      <VideoSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}


export default App
