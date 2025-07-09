import React from 'react'
import ProfilePic from "../assets/swarooppic.jpg"

const Hero = () => {
    return (
        <div className='border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:item-start'>

                        <h1 className='pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl items-center'>
                            Swaroop Wayadande
                        </h1>
                        <div class="overflow-hidden h-16 text-center pt-1">
    <div class="space-y-2">
        <div></div>
        <div></div>
       <div className="flex flex-col items-center lg:items-start">
<div className="h-20 overflow-hidden text-center pt-3">
  <div className="animate-rotateText flex flex-col items-center lg:items-start text-4xl font-italic tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
    <span>Front-End Developer</span>
    <span>Software Developer</span>
  </div>
</div>

</div>

     
    </div>
</div>

                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 pl-5'>
                    <div className="flex justify-center h-30">
                        {/* Adjusted image size */}
                        <img
                            src={ProfilePic}
                            alt="Profilepic"
                            className="w-100 h-100 lg:w-100 lg:h-100 object-fill rounded-2xl "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
