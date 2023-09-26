import { navLinks } from "../data";

function NavBar() {
  const scrollTo = (id)=>{
    const section = document.getElementById(id)
    section&&section.scrollIntoView({behavior:"smooth"})
  }
  return (
    <nav className="w-full p-8 flex justify-between items-center shadow-lg  top-0 bg-white z-50 fixed">
      <div>
        <h1 to="/" className="font-bold text-[#007BFF] text-xl">
          Career Launch Consultancy
        </h1>
      </div>
      <div className="flex-1">
        <ul className="flex justify-center space-x-10 ">
          {navLinks.map((item, index) => (
           
              <p key={index} onClick={()=>scrollTo(item.scrollTo)} className="hover:text-[#007BFF] cursor-pointer">
                {item.navTitle}
              </p>

              
            
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
