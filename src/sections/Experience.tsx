import next36Logo from '../assets/next36.png';
import coveLogo from '../assets/cove.png';
import noredioLogo from '../assets/noredio_logo.png';
import accentureLogo from '../assets/accenture.png';
import baycrestLogo from '../assets/baycrest_website.png';
import camhLogo from '../assets/camh_logo.png';
import ozelSaglikLogo from '../assets/ozel_saglik_hastanesi_logo.png';
import csLogo from '../assets/uoft_cs_logo.png';

const Experience = () => {
  const experiences = [
    {
      company: "NEXT36",
      logo: next36Logo,
      date: "Dec 2024 - May 2025",
      title: "Entrepreneur, 2025 Cohort",
      description: [
        "Selected as one of Canada's top 36 most promising students & recent grads from a national pool of 1,000 applicants to create a high-impact venture with mentorship from leading entrepreneurs, international business experts, and renown faculty from Harvard Business School, MIT Sloan School of Management, and Rotman School of Management."
      ]
    },
    {
      company: "Department of Computer Science, University of Toronto",
      logo: csLogo,
      date: "Jan 2025 - Apr 2025",
      title: "Undergraduate Researcher",
      supervisor: "Dr. Steve Engels",
      description: [
        "Worked on investigating the potential use of AI in the mining industry and developing software for mining permit applications."
      ]
    },
    {
      company: "Cove Neurosciences Inc.",
      logo: coveLogo,
      date: "Sep 2024 - Apr 2025",
      title: "Software Developer",
      description: [
        "Explored the integration of ML-based denoising techniques into Cove’s end-to-end analytics pipeline to improve precision and signal quality in EEG data preprocessing, supporting platform’s differentiation in the market.",
        "Implemented and benchmarked three advanced denoising algorithms in Python, demonstrating improved artifact attenuation for EEG data sourced from control participants.",
        "Implemented and trained CNNs using TensorFlow on Amazon EC2 and Google Colab to support complex architectures and optimize DL model performance."
      ]
    },
    {
      company: "Noredio",
      logo: noredioLogo,
      date: "Aug 2024 - Dec 2024",
      title: "Web Developer",
      description: [
        "Implemented the website for an AI music generation & streaming platform that enables copyright acquisition.",
        "Accepted to Microsoft for Startups Founders Hub, securing technology and consulting benefits worth up to $370,000.",
        "Utilized HTML, CSS, and added custom functionality with JavaScript."
      ]
    },
    {
      company: "Accenture",
      logo: accentureLogo,
      date: "Jun - Aug 2024",
      title: "Technology Analyst Intern",
      skills: "design thinking, facilitation, storytelling, Microsoft PowerPoint and Excel, MURAL",
      description: [
        "Supported the Client Innovation Services team on various client accounts by applying cutting edge technologies and human-centred design principles to create innovative solutions and deliver 360° value.",
        "Worked directly with Subject Matter Experts and Senior Leadership in fast-paced projects, adopting agile principles.",
        "Analyzed the current healthcare trends and emerging technologies to co-develop a futures thinking project on reimagining the Canadian healthcare system."
      ]
    },
    {
      company: "Rotman Research Institute, BAYCREST",
      logo: baycrestLogo,
      date: "Sep 2023 - Apr 2024",
      title: "Research Opportunities Program Student",
      supervisor: "Dr. Allison Sekuler",
      skills: "MATLAB, GitLab, RedCAP, Pavlovia, Excel, Biosemi EEG",
      description: [
        "Worked on characterizing blink-related oscillations in healthy older adults vs. in older adults with mild cognitive impairment utilizing neuropsych tests and analyzing EEG data using MATLAB.",
        "Investigated the impact of horizontal bias training on face identification using PsychoPy tests."
      ]
    },
    {
      company: "Krembil Centre for Neuroinformatics, CAMH",
      logo: camhLogo,
      date: "Jan - Sep 2023",
      positions: [
        {
          title: "Undergraduate Researcher at the Laboratory for Computational Genomics",
          supervisor: "Dr. Shreejoy Tripathy",
          skills: "R, Specialized Computing Cluster (SCC), SSH, bash",
          description: [
            "Integrated cross-modal scRNA-seq and patch-seq datasets using the Seurat package in R to infer electrophysiological properties of neuronal cells based on gene expression data.",
            "Performed de novo cell clustering, UMAP, PCA, differential gene expression analysis, statistical modeling, and visualizations on large-scale mice and human datasets using the CAMH Specialized Computing Cluster."
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
      logo: ozelSaglikLogo,
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
            
            {/* For positions with multiple roles */}
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