import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

const carouselItems = [
  {
    type: "name",
    content: "M3ad",
    subtitle: "Online Handle",
  },
  {
    type: "realname",
    content: "Adonis",
    subtitle: "Software Developer & Tech Enthusiast",
  },
  {
    type: "contact",
    content: "Get In Touch",
    subtitle: "Let's build something amazing together",
    links: [
      {
        icon: Mail,
        label: "Email",
        href: "mailto:adonis@example.com",
      },
      {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/m3ad",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/adonis",
      },
      {
        icon: Globe,
        label: "Website",
        href: "https://m3ad.dev",
      },
    ],
  },
];

export function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % carouselItems.length,
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {carouselItems[currentIndex].type === "contact" ? (
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-amber-900">
                  {carouselItems[currentIndex].content}
                </h2>
                <p className="text-amber-800">
                  {carouselItems[currentIndex].subtitle}
                </p>
              </div>
              <div className="flex justify-center gap-6">
                {carouselItems[currentIndex].links?.map(
                  (link) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm">
                          {link.label}
                        </span>
                      </motion.a>
                    );
                  },
                )}
              </div>
            </div>
          ) : (
            <div>
              <motion.h2
                className="text-3xl font-bold mb-2 text-amber-900"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {carouselItems[currentIndex].content}
              </motion.h2>
              <motion.p
                className="text-amber-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {carouselItems[currentIndex].subtitle}
              </motion.p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}