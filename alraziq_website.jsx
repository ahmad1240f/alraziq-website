import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Al-Raziq International';
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const productSections = [
    {
      id: 'drygreengrass',
      title: 'Dry Green Grass',
      img: 'https://alraziqinternational.com/img/DRY%20GREEN%20GRASS.jpg',
      desc: 'Premium quality grass ideal for livestock feeding and export.'
    },
    {
      id: 'rhodes',
      title: 'Rhodes Grass',
      img: 'https://alraziqinternational.com/img/DRY%20GREEN%20GRASS.jpg',
      desc: 'Known for its nutrition and softness — perfect for livestock feed and trusted by major importers globally.'
    },
    {
      id: 'alfalfa',
      title: 'Alfalfa',
      img: 'https://image.shutterstock.com/image-photo/sunset-over-field-young-alfalfa-mixed-1694929936',
      desc: 'High-protein forage crop suitable for a variety of livestock diets.'
    },
    {
      id: 'wheatstraw',
      title: 'Wheat Straw',
      img: 'https://alraziqinternational.com/img/RICE%20STRAW.jpg',
      desc: 'Durable and versatile straw, ideal for bedding and export.'
    },
    {
      id: 'peanutstraw',
      title: 'Peanut Straw',
      img: 'https://alraziqinternational.com/img/PEANUT.jpg',
      desc: 'Nutritious peanut straw, great for livestock and packing material.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % productSections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [productSections.length]);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="relative h-screen flex items-center justify-center text-center px-4 md:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src="https://ak.picdn.net/shutterstock/videos/3604201669/preview/stock-footage-cargo-container-ship-carrying-running-out-international.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-black bg-opacity-70 p-8 md:p-12 rounded-xl max-w-4xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Al-Raziq International</h1>
          <p className="text-lg md:text-2xl mb-6">
            Premium Exporters of Rhodes Grass, Alfalfa, Wheat Straw & More
          </p>
          <Button className="text-lg px-6 py-3 bg-green-600 hover:bg-green-500 w-full sm:w-auto" onClick={() => scrollToSection('products')}>
            Explore Our Products
          </Button>
        </div>
      </section>

      <div className="md:hidden p-4 text-right">
        <button onClick={() => setNavOpen(!navOpen)} className="text-white text-lg w-full text-left">☰ Menu</button>
      </div>
      <nav className={`flex flex-col md:flex-row justify-center md:gap-6 py-4 bg-black border-b border-gray-700 text-sm md:text-base transition-all ${navOpen ? 'block' : 'hidden md:flex'}`}>
        {productSections.map(({ title, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="hover:text-green-400 py-2 w-full md:w-auto text-left md:text-center"
          >
            {title}
          </button>
        ))}
        <button onClick={() => scrollToSection('contact')} className="hover:text-green-400 py-2 w-full md:w-auto text-left md:text-center">Contact</button>
        <button onClick={() => scrollToSection('map')} className="hover:text-green-400 py-2 w-full md:w-auto text-left md:text-center">Location</button>
      </nav>

      <section id="products" className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {productSections.map((item, index) => (
            currentSection === index && (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center text-center px-4 md:px-8"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 bg-black bg-opacity-60 p-6 md:p-12 rounded-xl max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Export Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productSections.map((item) => (
            <div key={item.id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => scrollToSection(item.id)}>
              <img src={item.img} alt={item.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm">Export quality {item.title.toLowerCase()} for international clients.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-12 px-6 md:px-20 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Email: info@alraziqint.com</p>
        <p className="mb-4">Phone: +92 300 1234567</p>
        <Button className="bg-green-600 hover:bg-green-500 w-full sm:w-auto">Chat on WhatsApp</Button>
      </section>

      <section id="map" className="py-12 px-6 md:px-20 bg-black">
        <h2 className="text-2xl font-bold mb-4 text-white">Our Location</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.278726211607!2d67.01665116321735!3d24.851132025583215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1718351100000!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </section>

      <footer className="text-center text-xs py-6 bg-black border-t border-gray-700 text-gray-500">
        © 2025 Al-Raziq International. All rights reserved.
      </footer>
    </main>
  );
}
