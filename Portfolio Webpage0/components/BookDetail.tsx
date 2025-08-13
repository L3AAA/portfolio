import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, Download, Play } from "lucide-react";
import { Project } from "../types/project";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookDetailProps {
  project: Project;
  onBack: () => void;
}

export function BookDetail({ project, onBack }: BookDetailProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen p-8">
        {/* Header with back button */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shelf
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground">
              Created: {new Date(project.createdDate).toLocaleDateString()}
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About This Project</h2>
                <p className="text-base leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            {/* Screenshots placeholder */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                    >
                      <ImageWithFallback
                        src=""
                        alt={`${project.title} screenshot ${i}`}
                        className="w-full h-full object-cover rounded-lg"
                        fallback={
                          <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                            Screenshot {i}
                          </div>
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Video section */}
            {project.videoUrl && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Demo Video</h2>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Video Preview</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Click to watch on YouTube
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Actions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Project Links</h2>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Live Site
                      </a>
                    </Button>
                  )}
                  {project.downloadUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download Software
                      </a>
                    </Button>
                  )}
                  {project.videoUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}