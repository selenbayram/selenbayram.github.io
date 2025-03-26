import { useRef, useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { Education, Introduction, Awards, Projects, Experience, Extracurricular } from './sections';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = {
    introduction: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    extracurricular: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    sectionRefs[sectionId as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-6">
            <h1 className="text-3xl font-optima text-center">Selen Bayram</h1>
            <div className="flex justify-center gap-6 mt-4">
              <a href="mailto:selen.bayram@mail.utoronto.ca" className="hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/selenbayram" className="hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/selenbayram" className="hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </header>
          <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />
        </div>
      </div>

      <main className="pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            <Section id="introduction" ref={sectionRefs.introduction}>
              <Introduction />
            </Section>
            
            <Section id="education" ref={sectionRefs.education}>
              <Education />
            </Section>
            
            <Section id="awards" ref={sectionRefs.awards}>
              <Awards />
            </Section>
            
            <Section id="projects" ref={sectionRefs.projects}>
              <Projects />
            </Section>
            
            <Section id="experience" ref={sectionRefs.experience}>
              <Experience />
            </Section>
            
            <Section id="extracurricular" ref={sectionRefs.extracurricular}>
              <Extracurricular />
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;