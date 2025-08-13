import { motion } from "motion/react";
import { Project } from "../types/project";
import bookSpineImage from "figma:asset/142c1e8f1c0f65402413ed5238b6bd02fef7ff8c.png";

interface BookProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
  width?: number;
}

export function Book({ project, onSelect, index, width = 24 }: BookProps) {
  // Book height is proportional to the spine template - make it responsive
  const height = Math.round(width * 4.5); // Maintain aspect ratio
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ z: 10 }}
      onClick={() => onSelect(project)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Book spine with template */}
      <motion.div
        className="relative overflow-hidden rounded-sm"
        style={{ width: `${width}px`, height: `${height}px` }}
        whileHover={{ 
          x: 8,
          rotateY: -5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Book spine template background */}
        <img 
          src={bookSpineImage} 
          alt="Book spine"
          className="absolute inset-0 w-full h-full object-fill"
        />
        
        {/* Color overlay */}
        <div 
          className="absolute inset-0 mix-blend-multiply opacity-60"
          style={{ backgroundColor: project.color }}
        />
        
        {/* Book title on spine */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center">
          <p className="text-white font-medium transform -rotate-90 whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-lg"
             style={{ 
               fontSize: `${Math.max(6, width * 0.3)}px`,
               maxWidth: `${height - 20}px`,
               lineHeight: '1.1'
             }}>
            {project.title}
          </p>
        </div>
        
        {/* Creation year at bottom */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <span className="text-white font-medium drop-shadow-lg"
                style={{ fontSize: `${Math.max(4, width * 0.2)}px` }}>
            {new Date(project.createdDate).getFullYear()}
          </span>
        </div>
        
        {/* Book spine edge highlight */}
        <div className="absolute top-0 right-0 w-0.5 h-full bg-white/40" />
        
        {/* Book spine shadow */}
        <div className="absolute top-0 left-0 w-1 h-full bg-black/20" />
      </motion.div>
      
      {/* Hover info card */}
      <motion.div
        className="absolute left-full top-0 ml-3 w-64 bg-white rounded-lg shadow-xl border border-border p-4 z-20"
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: 'none' }}
      >
        <h3 className="font-medium mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Created: {new Date(project.createdDate).toLocaleDateString()}
        </p>
      </motion.div>
    </motion.div>
  );
}