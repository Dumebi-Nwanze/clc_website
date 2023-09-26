import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="h-fit  p-12  bg-gray-900 text-white space-y-8 lg:space-y-0 lg:space-x-32 overflow-hidden
    
    flex flex-col items-center lg:flex-row  lg:items-start text-center lg:text-start space"
    >
      <div className="flex flex-col space-y-8">
        <h1 className="font-bold text-2xl">Graydawn</h1>
        <div className="flex space-x-8 text-xl transition-all duration-150 ease-in-out cursor-pointer">
          <FaInstagram
            onClick={() => {
              window.location.href = "https://instagram.com";
            }}
            className="hover:animate-pulse"
          />
          <FaFacebook
            onClick={() => {
              window.location.href = "https://facebook.com";
            }}
            className="hover:animate-pulse"
          />
          <FaTwitterSquare
            onClick={() => {
              window.location.href = "https://twitter.com";
            }}
            className="hover:animate-pulse"
          />
          <FaLinkedin
            onClick={() => {
              window.location.href = "https://linkedin.com";
            }}
            className="hover:animate-pulse"
          />
          <FaYoutube
            onClick={() => {
              window.location.href = "https://youtube.com";
            }}
            className="hover:animate-pulse"
          />
        </div>
      </div>
      <div>
        <h4 className="text-xl mb-4">Support</h4>
        <ul className="flex flex-col space-y-2  font-light items-center lg:items-start">
          <li className="links">What is Graydawn</li>
          <li className="links">Help desk software</li>
          <li className="links">Explore all products</li>
          <li className="links">Product pricing</li>
          <li className="links">Customer success</li>
          <li className="links">Privacy</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl mb-4">Graydawn</h4>
        <ul className="flex flex-col space-y-2  font-light items-center lg:items-start">
          <li className="links">New release features</li>
          <li className="links">Graydawn for startups</li>
          <li className="links">CRM software</li>
          <li className="links">Graydawn mobile</li>
          <li className="links">Newsletter signup</li>
          <li className="links">Manage subscriptions</li>
        </ul>
      </div>
      <div className=" flex-1">
        <h4 className="text-xl mb-2">Stay up to date with the newest tech</h4>
        <p className="mb-8 ">Sign up to the Graydawn newsletter</p>
        <div>
          <form className="flex flex-col">
            <input
              className="p-4 rounded-full w-full mb-4"
              type="email"
              placeholder="Email"
            />
            <button className="cta_btn w-[180px] text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
