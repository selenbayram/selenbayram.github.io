import profilePic from '../assets/profile_pic_website.png';

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-64 h-64 rounded-2xl overflow-hidden">
        <img
          src={profilePic}
          alt="Selen Bayram"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <p className="text-2xl text-purple-400">Welcome to my webpage!</p>
        <div className="space-y-2 text-white/90">
          <p>My name is Selen.</p>
          <p>I currently live in Toronto, ON.</p>
          <p>My hometown is Izmir, TURKIYE.</p>
          <p>
            Here, you can learn more about my involvements and interests. Feel free to
            contact me for potential collaborations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;