import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Bookshelf } from "./components/Bookshelf";
import { BookDetail } from "./components/BookDetail";
import { InfoCarousel } from "./components/InfoCarousel";
import { mockProjects, Project } from "./types/project";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToShelf = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8C5A0' }}>
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <BookDetail
            key="detail"
            project={selectedProject}
            onBack={handleBackToShelf}
          />
        ) : (
          <div key="shelf" className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-amber-900">Welcome to My Digital Library</h1>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                Each book represents a project I've crafted with passion and curiosity. 
                Hover over any book to peek inside, then click to explore the full story.
              </p>
            </div>

            {/* Bookshelf */}
            <div className="mb-16 flex justify-center">
              <Bookshelf
                projects={mockProjects}
                onSelectProject={handleSelectProject}
              />
            </div>

            {/* Info Carousel */}
            <div className="max-w-2xl mx-auto">
              <InfoCarousel />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}