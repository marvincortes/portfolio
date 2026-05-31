
// import navlogo from "../assets/navbar-logo.png";
function PortfolioMessages() {
  return (
   <div className="grid gap-6  bg-linear-to-bl from-violet-500 to-fuchsia-500">
  <div className="flex justify-center">
    <div className="w-64 p-4 font-medium rounded text-3xl text-center mt-5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent text-shadow-sm">
      Portfolio
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <div className="p-4  rounded font-normal text-white text-shadow-lg text-md md:text-lg ">
        Hi I'm marvincortes, Computer Science graduate from South Philippine Adventist College (SPAC), Class of 2015.
        Backend-focused Full Stack Web Developer experienced in PHP, Laravel, Python Django, Linux server deployment, database management, and web application hosting.
    </div>
    <div className="p-4  rounded font-normal text-white text-shadow-lg text-md md:text-lg ">
        I was the designer and creator of the official logo of the Teacher Education Department at South Philippine Adventist College in 2015.
        Sir Moises Ratilla Perral assigned me to create a new logo to replace their old one.
        Through the help of God’s guidance and wisdom,
        the logo I designed continues to be officially used by the department up to the present day.
        This experience reflects my creativity, dedication, and passion for design and digital work.
        <a href="https://spac.edu.ph/department/ted" target="_blank" className="text-blue-900">The logo found here!</a>
    </div>
    <div className="p-4  rounded font-normal text-white text-shadow-lg text-md md:text-lg">
        Awesome! Lately, I found out that the CSG Voting System I developed for South Philippine Adventist College is still being used until the present day. It is a blessing to see that the system continues to serve the students and the organization through the years.
    </div>
  </div>
</div>
  );
}

export default PortfolioMessages;