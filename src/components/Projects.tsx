import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const Projects = () => {
  const faceBlurImages = [
    'https://github.com/CassidyMabey/face-blur-tracking/blob/1166f7c6e18affb807b75f74833a12a5e2d22b54/assets/10000samples_5epochs.png?raw=true',
    'https://github.com/CassidyMabey/face-blur-tracking/blob/1166f7c6e18affb807b75f74833a12a5e2d22b54/assets/20samples_30epochs.png?raw=true',
    'https://github.com/CassidyMabey/face-blur-tracking/blob/1166f7c6e18affb807b75f74833a12a5e2d22b54/assets/gap_between_training_validation.PNG?raw=true',
    'https://github.com/CassidyMabey/face-blur-tracking/blob/1166f7c6e18affb807b75f74833a12a5e2d22b54/assets/high_accuracy.png?raw=true',
  ];
  const ollamaImages = [
    'https://raw.githubusercontent.com/CassidyMabey/ollama-model-gui/f4e0d04b5845df7765b2ed3ed7e06a3385f75446/assets/will.png',
    'https://raw.githubusercontent.com/CassidyMabey/ollama-model-gui/f4e0d04b5845df7765b2ed3ed7e06a3385f75446/assets/modeldownloads.png'
  ];
  const projects = [
    {
      title: 'Face Blur',
      description: 'Overview: This is a small project using a neural network to locate and then blur your face with your own, or pretrained models.\nTime to make: ~3 hours research and reading documentation.\nTime to code: ~4 hours',
      images: faceBlurImages,
      technologies: ['Python', 'OpenCV', 'Neural Networks'],
      liveUrl: 'https://github.com/CassidyMabey/face-blur-tracking/blob/1166f7c6e18affb807b75f74833a12a5e2d22b54/README.md',
      githubUrl: 'https://github.com/CassidyMabey/face-blur-tracking'
    },
    {
      title: 'Ollama Web Interface',
      description: 'A web interface for Ollama: easily switch between different Ollama models, download new models, manage multiple chat histories, and access a range of LLM tools. Built for flexibility and power users.',
      images: ollamaImages,
      technologies: ['HTML', 'CSS', 'Ollama', 'LLM', 'Local', 'Tools', 'Prompt Engineering', 'MongoDB'],
      liveUrl: 'https://github.com/CassidyMabey/ollama-model-gui#readme',
      githubUrl: 'https://github.com/CassidyMabey/ollama-model-gui'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 5000; 

  useEffect(() => {
    if (!hovered) {
      timeoutRef.current = setTimeout(() => {
        handleNav(1);
      }, duration);
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, hovered]);

  const handleNav = (dir: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isSliding) return;
    const total = faceBlurImages.length;
    let next = (current + dir + total) % total;
    setNextIndex(next);
    setSlideDir(dir);
    setIsSliding(true);
    setTimeout(() => {
      setCurrent(next);
      setIsSliding(false);
    }, 400);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects:</span>
          </h2>
        </div>
        <div className="space-y-16 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <div 
                  className="relative group cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{ height: '20rem' }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative w-full h-full" style={{ height: '20rem' }}>
                    {/* Sliding carousel logic */}
                    <div
                      className="absolute w-full h-full"
                      style={{
                        display: 'flex',
                        transition: isSliding ? 'transform 400ms cubic-bezier(0.4,0,0.2,1)' : 'none',
                        transform: isSliding
                          ? `translateX(${slideDir === 1 ? '-100%' : '100%'})`
                          : 'translateX(0%)',
                        zIndex: 10,
                      }}
                    >
                      <img
                        src={project.images[current]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg shadow-2xl group-hover:shadow-3xl flex-shrink-0"
                        style={{ minWidth: '100%' }}
                      />
                      {isSliding && (
                        <img
                          src={project.images[nextIndex]}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg shadow-2xl group-hover:shadow-3xl flex-shrink-0"
                          style={{ minWidth: '100%' }}
                        />
                      )}
                    </div>
                  </div>
                  {/* Navigation Arrows (show on hover) */}
                  {hovered && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow hover:bg-background"
                        onClick={e => { e.stopPropagation(); handleNav(-1); }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6 text-primary" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow hover:bg-background"
                        onClick={e => { e.stopPropagation(); handleNav(1); }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6 text-primary" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
