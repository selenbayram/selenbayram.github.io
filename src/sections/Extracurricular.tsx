const Extracurricular = () => {
  const activities = [
    {
      organization: "Neurotech U of T Student Design Team",
      logo: "src/assets/neurotech_logo.png",
      role: "Co-President, Community | NeurOn Air Podcast Founder and Co-Host",
      achievements: [
        "I am leading a student design team of 70 members spanning the Faculties of Applied Science & Engineering and Arts & Science. In 2023, I founded the Neuroscience Subsystem to improve R&D and provide more space for Arts & Science students to get involved in developing neurotechnology solutions. My team conducted extensive research on Machine Learning and Deep Learning based Brain-Computer Interface models to streamline decision making processes of Hardware and Software Subsystems. Based on my initiatives and commitment to the club operations, I was elected as the Co-President | Community for the 2024-2025 term. Currently, as one of three members of the Executive Committee, I oversee the operations of all subsystems and suggest constitutional amendments to increase efficiency and equitable access to resources within the team. I am also spearheading a podcast initiative, NeurON Air, that brings the fascinating world of neurotechnology to the UofT community and beyond by featuring in-depth conversations with leading researchers, industry professionals, and clinician scientists with the mission of bridging the gap between science and engineering. By initiating a partnership with CRANIA Neuromodulation Institute, I created an opportunity for my members to do all-expenses-covered neurosurgery observerships at UHN, worth around $1,000. I started collaborations with CUBE, UofT’s undergraduate biomedical engineering club, and iGEM, UofT’s synthetic biology student design team. This tri-club partnership allowed us to organize a series of events including a prosthetic arm circuit design workshop, a panel talk on careers in neurotechnology, and, most prominently, Canada’s largest biomedical engineering hackathon, reaching out to 300+ people. Under my leadership, Neurotech UofT received $20,000 in funds, a 4-fold increase in budget compared to last year, to build an EEG and exoskeleton-based solution to alleviate symptoms like tremors in Parkinson’s patients. "
      ]
    },
    {
      organization: "University College Literary and Athletic Society",
      logo: "src/assets/uclit_logo.png",
      role: "University and Academic Affairs Commissioner",
      achievements: [
        "University College Literary and Athletic Society is the student government for University College. We strive to enhance student life by fostering community, advocating for student interests, and promoting accessibility, equity, and transparency. I was elected two years in a row to represent the college student body of 5000+ as part of Canada’s oldest democratically elected student government. Through advocating student engagement in academics using social media, I increased engagement by 300% compared to previous years. I organize events promoting community building and interaction, having reached out to 400+ students so far, achieving highest overall in-person participation for my commission since 2020. Recently, I initiated a collaboration with the Academic Advising and Registrar’s Office to help address frequently asked questions by students as well as to provide first-hand information on academics and program-related matters through interview-style videos. Through this project, I aim to inform the student body on major topics – including course and program enrollment, graduate school applications, petitions, awards and financial aid, and mental health resources. I am also organizing an upper year student panel to assist first and second year students in finding internships and research positions, with panelists representing top companies like Amazon, Deloitte, P&G, SunLife, and Twitch. As an appointed student representative, I advise the University College Curriculum Committee on program and course modifications for Cognitive Science, Health Studies, and Canadian Studies programs, with a focus on providing equitable and fair access to courses for students from various backgrounds."
      ]
    },
    {
      organization: "Hart House Singers",
      logo: "src/assets/harthousesingers_logo.png",
      role: "Executive | First Soprano",
      achievements: [
        "Hart House Singers is a UofT choir that welcomes first-time and experienced singers to share the enthusiasm for choral singing. Each semester, we sing culturally and historically diverse repertoires and collaborate with musical groups, such as the Hart House Orchestra and Canada’s National Ballet School, for performances. As an Executive, I manage registration, email communications, and planning for a choir with ~150 members from across UofT divisions, faculties, and colleges. I am responsible for music score copying and distribution as a librarian. In addition, I manage social media channels for the Singers and create content that reaches 700+ people on average, with a 5-fold increase in community engagement compared to previous years. I also help with collaborations with other musical ensembles as well as the logistics of concerts each semester to welcome an audience of 150+ people per performance."
       ]
    },
    {
      organization: "University College Residence Council",
      logo: "src/assets/ucrc_logo.jpeg",
      role: "House President",
      achievements: [
        "Created in 1992, University College Residence Council is the student government representing students living on-campus residences. It encompasses individual house councils that organize various events, from charity toy drives and environmental awareness campaigns to fun socials and community building activities. I was elected as the President to represent the views of 65 students who lived in my residence house for 2 consecutive years. I dedicated 150+ hours throughout 4 semesters for meetings and event planning. I was responsible for attending monthly Residence Council meetings where I reported any suggestions or complaints from the residents to seek resolution. I also chaired House Council meetings and led my house’s executive committee consisting of our Vice President, Secretary, and Treasurer. In addition, I led monthly House Meetings in coordination with Residence Dons. Through my term, I put special effort into fostering an inclusive and tight-knit community in my residence where everyone could share ideas and felt respected."
       ]
    },
    {
      organization: "University College",
      logo: "src/assets/uc_logo.png",
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
      logo: "src/assets/caffiends_logo.png",
      role: "Barista",
      achievements: [
        "Caffiends is a student-run fair trade café at Victoria College. We offer a welcoming space for studying and socializing while promoting Fair-Trade awareness and social justice education. As a Barista, I serve students, instructors, and executives from around campus hand-crafted coffee and tea-based drinks with focus on customer satisfaction. As an experienced volunteer, I help new volunteers get onboarded by assisting in coffee making procedures. I also promote our seasonal fundraiser drinks, proceeds from which are donated to organizations including Toronto Indigenous Harm Reduction, Canadian Centre for Refugee and Immigrant Healthcare, and METRAC."
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
            <p className="list-disc list-inside space-y-2">
              {activity.achievements.map((achievement, i) => (
                <p key={i} className="text-white/50">{achievement}</p>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;