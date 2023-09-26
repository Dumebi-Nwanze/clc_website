import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Blog() {
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let currentIndex = 0;

  const shiftRight = () => {
    const slides = document.getElementById("slides");

    currentIndex + 1 === imgs.length ? (currentIndex = 0) : (currentIndex += 1);
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  };
  const shiftLeft = () => {
    const slides = document.getElementById("slides");
    currentIndex <= 0 ? (currentIndex = imgs.length - 1) : (currentIndex -= 1);
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  };
  useEffect(() => {
    const interval = setInterval(shiftRight, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="blog" className="  p-8 lg:p-8 flex flex-col  text-white">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#007BFF]">Blog</h2>
      </div>
      <div className="flex-1 flex flex-col p-4 lg:p-12 rounded-xl shadow-2xl ">
        <div className="flex justify-between mb-2 text-[#333]">
          <h4 className=" text-lg font-semibold">Featured Posts</h4>
          <div className="font-extrabold">
            <button
              className="carousel-control prev text-xl mr-8"
              onClick={() => {
                shiftLeft();
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="carousel-control next text-xl"
              onClick={() => {
                shiftRight();
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden   ">
          <div
            id="slides"
            className={`flex  transition-all duration-500 ease-in-out h-full rounded-lg`}
          >
            {imgs.map((itm) => (
              <div
                key={itm}
                onClick={() => {
                  window.location.href =
                    "https://techcrunch.com/2023/08/28/devolut-e-commerce-latin-america-returns/";
                }}
                className="  w-full flex-shrink-0 h-[500px] relative overflow-hidden rounded-lg"
              >
                <div className="cursor-pointer pb-4 pl-4 lg:pb-12 lg:pl-12 flex flex-col justify-end w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0 ">
                  <div className="lg:w-[50%]">
                    <h1 className="font-medium lg:font-bold text-lg lg:text-3xl mb-4 lg:mb-8">
                      Devolut leverages e-commerce growth in Latin America to
                      develop reverse logistics tool
                    </h1>
                    <p className="font-light lg:font-normal text-sm lg:text-base">
                      Devolut enables merchants a returns option that doesn’t
                      require boxes or labels. It also provides a network of
                      “city points” where consumers can go to return
                      merchandise.
                    </p>
                  </div>
                </div>
                <img
                  className="object-cover h-full w-full"
                  alt=""
                  src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              window.location.href = "https://techcrunch.com";
            }}
            className="cta_btn w-[180px] text-white"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
