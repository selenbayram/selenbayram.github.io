const Projects = () => {
  const projects = [
    {
      title: "Society Management System",
      tech: "Python",
      image: "./dist/assets/martian_robot_society.png",
      description: "A program that makes use of recursive operations and models a society hierarchy using tree data structure."
    },
    {
      title: "Raccoon Raiders!",
      tech: "Python",
      image: "./dist/assets/raccoon_raiders.gif",
      description: "A game that makes use of object-oriented programming practices such as inheritance and composition."
    },
    {
      title: "TETRIS",
      tech: "MIPS Assembly",
      image: "./dist/assets/tetris.gif",
      description: "Traditional game of Tetris. Game functionality includes: gravity, increased gravity speed based on score, Game Over screen, Retry to start a new game, and sound effects for key press (a,s,d,w) and Game Over."
    }
  ];

  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-optima mb-2">{project.title}</h3>
            <p className="text-purple-400 mb-2">{project.tech}</p>
            <p className="text-white/80">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;