import neurotechLogo from '../assets/neurotech_logo.png';
import uclitLogo from '../assets/uclit_logo.png';
import harthouseSingersLogo from '../assets/harthousesingers_logo.png';
import ucrcLogo from '../assets/ucrc_logo.jpeg';
import ucLogo from '../assets/uc_logo.png';
import caffiendsLogo from '../assets/caffiends_logo.png';

const Extracurricular = () => {
  const activities = [
    {
      organization: "Neurotech U of T Student Design Team",
      logo: neurotechLogo,
      role: "Co-President, Community | NeurOn Air Podcast Founder and Co-Host",
      achievements: [
        "Leading a student design team of 70+ members spanning the Faculties of Applied Science & Engineering and Arts & Science.",
        "Founded the Neuroscience Subsystem to boost R&D and bridge science/engineering gaps.",
        "Launched the NeurOn Air Podcast where we chat with leaders driving neurotec innovation.",
        "Partnered with CRANIA, securing $1k neurosurgery observerships for members.",
        "Teamed up with CUBE & iGEM to host Canada’s largest biomed hackathon series, reaching 300+ attendees.",
        "Secured $20k in funds to build an EEG and exoskeleton-based wearable device for Parkinson’s patients.",
      ]
    },
    {
      organization: "University College Literary and Athletic Society",
      logo: uclitLogo,
      role: "University and Academic Affairs Commissioner",
      achievements: [
        "Serving 5,000+ students at Canada’s oldest student government as a 2x elected Commissioner.",
        "Boosted student engagement by 300% through creative social media campaigns.",
        "Organized events to advocate, engage, and build community reaching 400+ students — highest turnout since 2020.",
        "Partnered with Academic Advising & Registrar's Office to create video guides on essential topics concerning academics.",
        "Hosted an upper-year student panel with reps from Amazon, Deloitte, P&G & more to guide first-years in career planning.",
        "Advise the University College Curriculum Committee on program/course modifications for Cognitive Science, Health Studies, and Canadian Studies."
      ]
    },
    {
      organization: "Hart House Singers",
      logo: harthouseSingersLogo,
      role: "Executive | First Soprano",
      achievements: [
        "Manage registration, email communications, and planning for a choir with ~150 members from across UofT divisions, faculties, and colleges.",
        "Create content for social media channels, reaching 700+ people on average – 5x increase in community engagement compared to previous years."
      ]
    },
    {
      organization: "University College Residence Council",
      logo: ucrcLogo,
      role: "House President",
      achievements: [
        "Represented 65+ on-campus residents as 2x President-elect, dedicating 150+ hours to leadership and event planning.",
      ]
    },
    {
      organization: "University College",
      logo: ucLogo,
      role: "",
      achievements: [
        "Orientation Head Leader",
        "Summer E-Mentor",
        "UC Gargoyle Staff, Avant-Garg",
        "Intramurals Div-1 Women's Volleyball Team Captain"
      ]
    },
    {
      organization: "Caffiends - Vic Fair Trade Cafe",
      logo: caffiendsLogo,
      role: "Barista",
      achievements: [
        "Served fair-trade coffee/tea with a focus on customer experience",
        "Promoted seasonal fundraiser drinks, proceeds from which are donated to non-profits."
    ]
    },
  ];

  return (
    <div>
      <h2 className="section-title">Extracurricular Activities</h2>
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="card">
            <div className="flex items-center gap-6 mb-4">
              <img
                src={activity.logo}
                alt={activity.organization}
                className="w-32 object-contain"
              />
              <div>
                <h3 className="text-xl font-optima">{activity.organization}</h3>
                <p className="text-purple-400">{activity.role}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {activity.achievements.map((achievement, i) => (
                <li key={i} className="text-white/65">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;