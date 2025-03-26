import { forwardRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ id, children }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className="opacity-0 translate-y-8 animate-fade-in"
    >
      {children}
    </section>
  );
});

export default Section;