import uoftLogo from '../assets/uoft_logo.png';

const Education = () => {
  return (
    <div>
      <h2 className="section-title">Education</h2>
      <div className="card">
        <div className="flex items-center gap-6 mb-4">
            <img
              src={uoftLogo}
              alt="University of Toronto"
              className="object-cover w-32"
            />
          <div>
            <p className="text-xl font-optima">University of Toronto (Sep 2021 - Jun 2025)</p>
            <p className="text-lg text-white/70">HBSc. Neuroscience and Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;