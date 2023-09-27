import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
   <div className="h-fit  p-12  bg-gray-900 text-white "> <div
      className=" space-y-8 lg:space-y-0 lg:space-x-32 overflow-hidden
    
    flex flex-col items-center lg:flex-row  lg:items-start text-center lg:text-start space"
    >
      <div className="flex flex-col space-y-8">
        <h1 className="font-bold text-2xl">Career Launch Consultancy</h1>
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
    <h4 className="text-xl mb-4">About CLC</h4>
    <ul className="flex flex-col space-y-2 font-light items-center lg:items-start">
        <li className="links">Who We Are</li>
        <li className="links">Our Services</li>
        <li className="links">Mission and Values</li>
        <li className="links">Career Opportunities</li>
        <li className="links">Privacy Policy</li>
    </ul>
</div>
<div>
    <h4 className="text-xl mb-4">Services</h4>
    <ul className="flex flex-col space-y-2 font-light items-center lg:items-start">
        <li className="links">Career Coaching</li>
        <li className="links">Resume Building</li>
        <li className="links">Interview Preparation</li>
        <li className="links">Job Search Strategies</li>
        <li className="links">Business Plan Launch & Implementation</li>
        <li className="links">Networking & Collaboration</li>
    </ul>
</div>
      <div id="contact-us" className=" flex-1">
        <h4 className="text-xl mb-2">Stay up to date with our programs</h4>
        <p className="mb-8 font-light ">Sign up to the CLC newsletter</p>
        <div>
          <form className="flex flex-col items-center md:items-start">
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
    <div className="mt-12 ">
          <p className="text-center">
            Copyright &copy; 2023 Career Launch Consultancy

          </p>
        </div>
    </div>
  );
}

export default Footer;
