import { FiFeather } from "react-icons/fi";
function Footer() {
  return (
    <footer className="bg-black">

            <div className="container max-w-screen-xl mx-auto px-4 py-16 ">

                <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 ">

          <h1 className="text-gray-100">
            Feel free to contact me at:
            <span className="text-blue-300">
              {" "}
              hello.skapar.here@gmail.com
            </span>
          </h1>
          <span className="text-gray-100"><FiFeather size={24} /></span>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;