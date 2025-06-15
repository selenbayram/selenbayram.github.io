const Awards = () => {
  const awards = [
    "2021 - Lester B. Pearson International Scholarship",
    "2022 - Dean's Honour List",
    "2022 - University of Toronto Scholarship",
    "2022 - Dr. James A. and Connie P. Dickson Scholarship in Science and Mathematics",
    "2023 - Pearson Peer Mentor of the Year Award",
    "2023 - Dean's Honour List",
    "2023 - Louis Savlov (UC'37) Scholarship in Sciences and Humanities",
    "2024 - Summer Undergraduate Data Sciences (SUDS) Research Scholarship (awarded, declined)",
    "2024 - Victoria College Research Day Science, Technology, and Society Program Prize",
    "2024 - PURC Undergraduate Symposium First Place for Poster Presentation",
    "2024 - Donald C. Ainslie Leadership Award in University College",
    "2024 - Collision Scholarship",
    "2024 - Dean's Honour List",
    "2024 - Human Biology Excellence Award",
    "2025 - Dr. James A. and Connie P. Dickson Scholarship in Science and Mathematics",
    "2025 - University of Toronto Student Leadership Award",
    "2025 - Susan J. Serena Scholarship",
    "2025 - Ali Saeed Memorial Award",
    "2025 - Dora Burke Playfair Leadership Award",
    "2025 - Dean's Honour List"
  ];

  return (
    <div>
      <h2 className="section-title">Awards and Recognitions</h2>
      <div className="card">
        <ul className="space-y-2 list-disc list-inside">
          {awards.map((award, index) => (
            <li key={index} className="text-white/80">{award}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;