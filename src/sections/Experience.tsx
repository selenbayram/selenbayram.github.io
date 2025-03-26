const Experience = () => {
  const experiences = [
    {
      company: "NEXT36",
      logo: "src/assets/next36.png",
      date: "Dec 2024 - Present",
      title: "Entrepreneur, 2025 Cohort",
      description: [
        "Selected as one of Canada's top 36 most promising students & recent grads from a national pool of 1,000 applicants to create a high-impact venture with mentorship from leading entrepreneurs, international business experts, and renown faculty from Harvard Business School, MIT Sloan School of Management, and Rotman School of Management."
      ]
    },
    {
      company: "Cove Neurosciences Inc.",
      logo: "src/assets/cove.png",
      date: "Sep 2024 - Present",
      title: "Software Developer",
      description: [
        "Develop and implement algorithms for disease-specific biomarker identification pipeline from EEG and MRI data.",
        "Explore the applications of Deep Learning to improve EEG data preprocessing accuracy."
      ]
    },
    {
      company: "Noredio",
      logo: "src/assets/noredio_logo.png",
      date: "Aug 2024 - Present",
      title: "Web Developer",
      description: [
        "Implemented the website for an AI music generation & streaming platform that enables copyright acquisition.",
        "Accepted to Microsoft for Startups Founders Hub, securing technology and consulting benefits worth up to $370,000.",
        "Utilized HTML, CSS, and added custom functionality with JavaScript."
      ]
    },
    {
      company: "Accenture",
      logo: "src/assets/accenture.png",
      date: "Jun - Aug 2024",
      title: "Technology Analyst Intern",
      skills: "design thinking, facilitation, storytelling, Microsoft PowerPoint and Excel, MURAL",
      description: [
        "Supported the Client Innovation Services team on various client accounts by applying cutting edge technologies and human-centred design principles to create innovative solutions and deliver 360◦ value.",
        "Worked directly with Subject Matter Experts and Senior Leadership in fast-paced projects adopting agile principles."
      ]
    },
    {
      company: "Rotman Research Institute, BAYCREST",
      logo: "src/assets/baycrest_website.png",
      date: "Sep 2023 - Apr 2024",
      title: "Research Opportunities Program Student",
      supervisor: "Dr. Allison Sekuler",
      skills: "MATLAB, GitLab, RedCAP, Pavlovia, Excel, Biosemi EEG",
      description: [
        "Work on characterizing blink-related oscillations in healthy older adults vs. in older adults with mild cognitive impairment utilizing neuropsych tests and analyzing EEG data using MATLAB.",
        "Investigate the impact of horizontal bias training on face identification using PsychoPy tests."
      ]
    },
    {
      company: "Krembil Centre for Neuroinformatics, CAMH",
      logo: "src/assets/camh_logo.png",
      date: "Jan - Sep 2023",
      positions: [
        {
          title: "Undergraduate Researcher at the Laboratory for Computational Genomics",
          supervisor: "Dr. Shreejoy Tripathy",
          skills: "R, Specialized Computing Cluster (SCC), SSH, bash",
          description: [
            "Worked on cross-modal data integration using scRNA-seq and patch-seq datasets with Seurat package in R to infer electrophysiology properties of neuronal cells based on gene expression.",
            "Utilized de novo cell clustering, UMAP, differential expression analysis, and statistical modeling techniques on mice and human datasets."
          ]
        },
        {
          title: "Undergraduate Researcher at the Whole-Brain Modelling Group",
          supervisor: "Dr. John David Griffiths",
          skills: "Neuroimaging (EEG, fNIRS), Python, JupyterHub",
          description: [
            "Worked on assessing the capabilities of a new brain imaging device, the Kernel Flow, that employs advanced fNIRS technology for monitoring source-based brain activity and allows detailed haemodynamic recordings.",
            "Ran task-based psychological experiments utilizing infrared tracking (Brainsight Neuronavigation) probing visual, auditory, motor, and higher cognitive function to collect fNIRS data and conduct subsequent Python-based analysis."
          ]
        }
      ]
    },
    {
      company: "Microbiology and Medical Chemistry Lab, OZEL SAGLIK HOSPITAL",
      logo: "src/assets/ozel_saglik_hastanesi_logo.png",
      date: "Jul - Aug 2022",
      title: "Microbiology Intern",
      supervisor: "Dr. Hilmi Tezgel",
      skills: "blood analysis (hemogram and coagulation), urinalysis, in vitro cell culture & incubation, PCR, and transfusion related tests (type & screen and type & crossmatch)",
      description: [
        "Worked on determining antibiotic resistance in patients using in vitro cell cultures with blood and urine samples as well as throat swabs.",
        "Performed over 150 antibiograms to test how susceptible strains of pathogens are to a variety of antibiotics and wrote daily reports."
      ]
    }
  ];

  return (
    <div>
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div className="flex items-center gap-6 mb-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-32 object-contain"
              />
              <div>
                <p className="text-sm text-purple-400">{exp.date}</p>
                <h3 className="text-xl font-optima">{exp.company}</h3>
                <p className="text-white/80">{exp.title}</p>
                {exp.supervisor && (
                  <p className="text-sm text-white/60">Supervisor: {exp.supervisor}</p>
                )}
                {exp.skills && (
                  <p className="text-sm text-white/60">Skills: {exp.skills}</p>
                )}
              </div>
            </div>
            
            {/* For regular positions */}
            {exp.description && (
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-white/80">{item}</li>
                ))}
              </ul>
            )}
            
            {/* For positions with multiple roles (like CAMH) */}
            {exp.positions && (
              <div className="space-y-6">
                {exp.positions.map((position, i) => (
                  <div key={i} className="border-t border-white/10 pt-4 mt-4 first:border-0 first:pt-0 first:mt-0">
                    <h4 className="text-lg font-optima mb-2">{position.title}</h4>
                    {position.supervisor && (
                      <p className="text-sm text-white/60 mb-1">Supervisor: {position.supervisor}</p>
                    )}
                    {position.skills && (
                      <p className="text-sm text-white/60 mb-2">Skills: {position.skills}</p>
                    )}
                    <ul className="list-disc list-inside space-y-2">
                      {position.description.map((item, j) => (
                        <li key={j} className="text-white/80">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;