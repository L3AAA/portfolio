import { motion } from "motion/react";
import { Book } from "./Book";
import { Project } from "../types/project";
import bookshelfImage from "figma:asset/9cd2864b47d612ca9748024388a3867d26affc23.png";

interface BookshelfProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

// Define specific positions for books on each shelf
// These coordinates are relative to the empty bookshelf image
const bookPositions = [
  // Top shelf (shelf 1) - Left to right
  { x: 230, y: 120, width: 24 },
  { x: 260, y: 120, width: 22 },
  { x: 288, y: 120, width: 26 },
  { x: 320, y: 120, width: 20 },
  { x: 346, y: 120, width: 28 },
  { x: 380, y: 120, width: 24 },
  
  // Second shelf (shelf 2) - Left to right
  { x: 230, y: 190, width: 26 },
  { x: 262, y: 190, width: 20 },
  { x: 288, y: 190, width: 24 },
  { x: 318, y: 190, width: 22 },
  { x: 346, y: 190, width: 28 },
  { x: 380, y: 190, width: 26 },
  
  // Third shelf (shelf 3) - Left to right
  { x: 230, y: 260, width: 22 },
  { x: 258, y: 260, width: 26 },
  { x: 290, y: 260, width: 24 },
  { x: 320, y: 260, width: 20 },
  { x: 346, y: 260, width: 28 },
  { x: 380, y: 260, width: 22 },
  
  // Bottom shelf (shelf 4) - Left to right
  { x: 230, y: 330, width: 28 },
  { x: 264, y: 330, width: 22 },
  { x: 292, y: 330, width: 26 },
  { x: 324, y: 330, width: 24 },
  { x: 354, y: 330, width: 20 },
  { x: 380, y: 330, width: 26 },
];

export function Bookshelf({ projects, onSelectProject }: BookshelfProps) {
  // Sort projects by creation date (newest first)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  return (
    <div className="relative flex justify-center max-w-4xl mx-auto">
      {/* Main bookshelf container */}
      <div className="relative">
        {/* Bookshelf background image */}
        <img 
          src={bookshelfImage} 
          alt="Bookshelf" 
          className="max-w-full h-auto block"
          style={{ maxWidth: '600px', width: '100%' }}
        />
        
        {/* Positioned books */}
        {sortedProjects.slice(0, bookPositions.length).map((project, index) => {
          const position = bookPositions[index];
          return (
            <motion.div
              key={project.id}
              className="absolute"
              style={{
                left: `${(position.x / 600) * 100}%`,
                top: `${(position.y / 600) * 100}%`,
                transform: 'translateX(-50%)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Book
                project={project}
                onSelect={onSelectProject}
                index={index}
                width={position.width}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}