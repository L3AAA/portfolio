export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  screenshots: string[];
  videoUrl?: string;
  createdDate: string;
  color: string; // Book spine color
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Neural Network Visualizer",
    description: "An interactive web application that visualizes how neural networks learn and make decisions. Features real-time weight adjustments and multiple activation functions.",
    techStack: ["React", "TypeScript", "D3.js", "WebGL"],
    githubUrl: "https://github.com/m3ad/neural-viz",
    liveUrl: "https://neural-viz.m3ad.dev",
    screenshots: [],
    videoUrl: "https://youtube.com/watch?v=example1",
    createdDate: "2024-01-15",
    color: "#8B4513"
  },
  {
    id: "2",
    title: "Quantum Code Editor",
    description: "A specialized code editor for quantum computing languages with syntax highlighting and quantum circuit visualization.",
    techStack: ["Electron", "Monaco Editor", "Qiskit", "Python"],
    githubUrl: "https://github.com/m3ad/quantum-editor",
    downloadUrl: "https://releases.m3ad.dev/quantum-editor",
    screenshots: [],
    createdDate: "2023-11-20",
    color: "#2F4F4F"
  },
  {
    id: "3",
    title: "Blockchain Explorer",
    description: "A comprehensive blockchain explorer with advanced analytics, transaction tracking, and smart contract interaction capabilities.",
    techStack: ["Next.js", "Web3.js", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/m3ad/blockchain-explorer",
    liveUrl: "https://explorer.m3ad.dev",
    screenshots: [],
    createdDate: "2023-09-10",
    color: "#800080"
  },
  {
    id: "4",
    title: "AI Music Composer",
    description: "Machine learning application that generates original music compositions in various styles using transformer models.",
    techStack: ["Python", "TensorFlow", "MIDI", "Flask"],
    githubUrl: "https://github.com/m3ad/ai-composer",
    downloadUrl: "https://releases.m3ad.dev/ai-composer",
    screenshots: [],
    videoUrl: "https://youtube.com/watch?v=example4",
    createdDate: "2023-06-05",
    color: "#DC143C"
  },
  {
    id: "5",
    title: "Cryptography Toolkit",
    description: "Educational toolkit for learning and experimenting with various cryptographic algorithms and protocols.",
    techStack: ["Rust", "WebAssembly", "React", "TypeScript"],
    githubUrl: "https://github.com/m3ad/crypto-toolkit",
    liveUrl: "https://crypto.m3ad.dev",
    screenshots: [],
    createdDate: "2023-03-12",
    color: "#228B22"
  },
  {
    id: "6",
    title: "3D Game Engine",
    description: "Custom 3D game engine built from scratch with modern rendering techniques, physics simulation, and asset pipeline.",
    techStack: ["C++", "OpenGL", "Vulkan", "CMake"],
    githubUrl: "https://github.com/m3ad/3d-engine",
    downloadUrl: "https://releases.m3ad.dev/3d-engine",
    screenshots: [],
    videoUrl: "https://youtube.com/watch?v=example6",
    createdDate: "2022-12-01",
    color: "#FF6347"
  }
];