import mc from "../assets/mc.png";
function Hero() {
  return (

        <section className="py-2 md:py-5">

            <div className="container max-w-screen-xl mx-auto px-4">

                <nav className="flex items-center justify-between mb-40">
                     <img src="/portfolio/navbar-logo.png" alt="Navbar Logo" />
                </nav>

                <div className="text-center">
                    <div className="flex justify-center mb-10">
                         <img src={mc} alt="Profile"/>
                    </div>

                    <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Marvin Cortes</h6>

                    <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"> A Programmer Developer</h1>

                    <p className="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software and enjoying creating tools that make life easier for people. I am a web developer from Nabunturan, Davao De Oro, Philippines. I love building new things on the web, both online and offline.

                    </p>

                  </div>

            </div>

        </section>
  );
}

export default Hero;