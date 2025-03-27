import { FC } from 'react';

interface NavbarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'extracurricular', label: 'Extracurriculars' },
];

const Navbar: FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  return (
    <nav className="border-t border-white/20">
      <ul className="flex justify-between overflow-x-auto py-2 gap-8">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => onSectionClick(id)}
              className={`text-sm font-optima transition-colors hover:text-purple-400 whitespace-nowrap
                ${activeSection === id ? 'text-purple-400' : 'text-white/80'}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;