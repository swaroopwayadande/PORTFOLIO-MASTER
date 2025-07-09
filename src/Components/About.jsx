import React from 'react';
import aboutImg from "../assets/swaroopstage.jpeg";


const About = () => {
    return (
        <div className=' border-neutral-900 pb-4'>
            <h2 className='my-5 text-center text-4xl'>About
                <span className='text-neutral-500 pl-2'>Me</span>
            </h2>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-1/2 flex justify-center '>
                    <img className="rounded-2xl" src={aboutImg} alt="aboutimage" />
                </div>
             <div className="w-full lg:w-1/2 pr-5 text-center py-40 font-thin text-2xl leading-relaxed text-white">
  <p>
    I’m <span className="font-semibold text-blue-400">Swaroop Wayadande</span>, a final year B.Tech student in Computer Science and Engineering at T.K.I.E.T , Warananagar. Passionate about Linux, web development, and software engineering, I’ve been actively involved in open-source and technical communities. From 2024 to 2025, I served as the <span className="font-medium text-blue-400">Technical Head</span> of the <span className="italic text-blue-400">T.K.I.E.TLinux User Group (TLUG)</span>, where I led initiatives to promote Linux literacy and system-level development among peers. With a strong foundation in full-stack development and a keen interest in building efficient, scalable software, I’m driven by curiosity and a commitment to continuous learning.
  </p>
</div>


            </div>
        </div>
    );
};

export default About;
