import { useState } from "react";

function ExperienceSection() {
  // const [showAll, setShowAll] = useState(false);

  const [visibleCount, setVisibleCount] = useState(3);




  const experiences = [
    {
      id: "01",
      title: "SPSS developer",
      details: [
        "A Statistical Package for the Social Sciences (SPSS)",
        "On-the-Job Training at Research Study Development",
        "South Philippine Adventist College (SPAC), 2014.",
        "Built and developed statistical tools.",
      ],
    },
    {
      id: "02",
      title: "CSG Voting System",
      details: [
        "eVoting System for College School Governance",
        "South Philippine Adventist College, 2014.",
        "This was the first digital voting machine introduced in the school.",
      ],
    },
    {
      id: "03",
      title: "Physician Management System",
      details: [
        "a 4th Year Student Research Study (Thesis)",
        "Graduated in 2015. ✔️",
        "Where I developed and created the system.",
      ],
    },
    {
      id: "04",
      title: "ASG Voting System",
      details: [
        "eVoting System for Academy School Governance",
        "South Philippine Adventist College, 2015.",
        "The academy uses the voting machine for student governance elections.",
      ],
    },
    {
      id: "05",
      title: "Wordpress Platform",
      details: [
        "Sir Joven Francis C. Agno, the owner, utilized a WordPress platform",
        "One of his developer that time.",
        "2016",
      ],
    },
    {
      id: "06",
      title: "Online Grading System",
      details: [
        "a 4th Year Student Research Study (Thesis)",
        "Graduated in 2016. ✔️",
        "Where I developed and created the system.",
      ],
    },
    {
      id: "07",
      title: "Hospital Information System",
      details: [
        "Junior Developer at Segworks Technologies Corporation, Davao City",
        "Main Office at Southern Philippines Medical Center (SPMC).",
        "Junior developer in the Hospital Informatoin System (HIS)",
        "2016 to 2017",
      ],
    },
    {
      id: "08",
      title: "Senior High Prediction System",
      details: [
        "a 4th Year Student Research Study (Thesis)",
        "Graduated in 2017. ✔️",
        "Where I developed and created the system.",
      ],
    },
    {
      id: "09",
      title: "Mutya ng Bangkerohan Pageant ",
      details: [
        "a Voting System for Mutya ng Bangkerohan Pageants, Davao City",
        "Bangkerohan, Matina, Davao City, Philippines.",
        "Created the system for the Mutya ng Bangkerohan Pageant in Davao City.",
        "The system was designed to provide fast, accurate, and reliable vote tabulation during the pageant event.",
        "2017",
      ],
    },
    {
      id: "10",
      title: "Evaluation of Subjects eAdvisor System",
      details: [
        " a 4th Year Student Research Study (Thesis)",
        "Not yet graduated. ✔️ (she's not commin back to school)",
        "2017",
      ],
    },
    {
      id: "11",
      title: "Website Project",
      details: [
        "Skapar, Mythteor, and Myths",
        "An online website with a landing page.",
        "has a FREE SMS site",
        "2019 to 2020",
      ],
    },
    {
      id: "12",
      title: "Virtual Private Server (VPS)",
      details: [
        "Managed and owned a private VPS used for a Virtual Private Network (VPN)",
        "A VPS (Virtual Private Server) is a web server used for internet connection and web-based services.",
        "It can also be used to connect to the internet using affordable mobile data or load in the Philippines.",
        "2019 to 2021",
      ],
    },
    {
      id: "13",
      title: "Python Programming Language and Django Framework",
      details: [
        "Studied Python Programming Language and the Django Framework",
        "6 months of study under Mentor Reiljun, a Fullstack Developer Master.",
        "2022",
      ],
    },
    {
      id: "14",
      title: "Partsman.ph",
      details: [
        "Web Developer and Contributor at Partsman",
        " A vehicle parts platform offering a one-stop-shop for premium vehicle parts, genuine parts, and aftermarket parts. Davao City",
        "2022 to 2023",
      ],
    },
    {
      id: "15",
      title: "Python Programming Language",
      details: [
        "Studied Python programming language, especially Object-Oriented Programming (OOP), through self-learning since October 2024.",
        "Youtube Videos from my practicing:",
        "Oct 12, 2024 to Dec 4, 2024.",
      ],
       link: "https://www.youtube.com/@marvinskapar/videos"
    },
    {
      id: "16",
      title: "Django Framework",
      details: [
        "Studied the Django Framework through self-study since May 29, 2025.",
      ],
    },
    {
      id: "17",
      title: "Farm Solutions",
      details: [
        "Created a system program for Farm Production Records (personal project and use).",
        "Built using Python, Django, and Postgre.",
      ],
    },
    {
      id: "18",
      title: "Enrollment System Deployment — Laravel VPS Hosting",
      details: [
        "Deployed and configured a production-ready Laravel enrollment system on a cloud VPS server, including Linux server setup, DNS, SSL, and production hosting.",
        "Project Owner: Ivan Entrina a 2nd year college, I.T. student.",
        "Deployment Date: May 25, 2026.",
      ],
      link: "https://www.enrollment.space"
    },
    
    {
      id: "19",
      title: "Frontend ReactJS ",
      details: [
        "Currently practicing these React Framework (JavaScript's)",
        "Date: May 29, 2026.",
      ],
    },
  ];

  const displayedExperiences = experiences.slice(0, visibleCount);

  return (
    <div className="grid gap-6 mt-10 pl-5 pr-5">
      <div className="flex justify-center">
        <div className="w-full p-4 text-center text-3xl font-semibold text-gray-900">
          Previous Programming Experience
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {displayedExperiences.map((exp) => (
    <div key={exp.id} className="flex space-x-6 mt-10">
            <h1 className="text-3xl text-gray-700">
              {exp.id}
            </h1>

            <span className="w-20 h-0.5 bg-gray-300 mt-5"></span>

            <div>
              <h1 className="text-3xl mb-5 text-gray-700">
                {exp.title}
              </h1>

              <div className="text-sm text-gray-500">
                {exp.details.map((detail, index) => (
                  <p key={index} className="mt-3">
                    - {detail}
                  </p>
                ))}
              </div>

              {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                - You can visit here →
              </a>
            )}

            </div>
          </div>
  ))}
</div>

      <div className="flex justify-center mt-8 mb-8">
        {visibleCount < experiences.length ? (
          <button
            onClick={() => setVisibleCount(prev => prev + 3)}
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-pink-500/50 bg-cyan-500 bg-cyan-500/50"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setVisibleCount(3)}
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-pink-500/50 bg-cyan-500 bg-cyan-500/50"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default ExperienceSection;