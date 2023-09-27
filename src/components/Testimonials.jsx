import React from 'react'
import { testimonials } from '../data'
import { motion } from 'framer-motion'

function Testimonials() {
  return (
    <div id='testimonials'
    className=' flex flex-col items-center justify-center px-8 py-20 bg-background'
    >
      <div className='min-w-full mb-10'>
        <motion.h2
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false }}
         transition={{ duration: 0.8 }}
         variants={{
           visible: { x:0, opacity: 1 },
           hidden: { x:-80, opacity: 0 },
         }}
        className="text-3xl font-bold mb-4 text-secondary">Testimonials</motion.h2>
      </div>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { y:0, opacity: 1 },
        hidden: { y:80, opacity: 0 },
      }}
      
      class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-20">
        {
          testimonials.map((itm)=>(<div className="max-w-xs h-[24rem] w-full rounded-lg shadow-lg hover:shadow-secondary hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden bg-white">
        
          <div key={itm} className="w-full h-[10rem] overflow-hidden flex items-center justify-center">
              <img src={itm.img} alt="Testimonial Image" className="w-full h-auto object-cover "/>
          </div>
         
          <div className="p-4">
              <p className="text-gray-800 text-base leading-relaxed">
                  {itm.testimony}
              </p>
              <p className="text-secondary  text-sm mt-2 font-bold">
                  - {itm.name}
              </p>
          </div>
      </div>))
        }
</motion.div>
    </div>
  )
}

export default Testimonials