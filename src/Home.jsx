import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home(){
    return(
        <div>
            <div className='animate-fade-left animate-once animate-ease-in pl-20 sm:pl-25 mt-20'>
                <h1 className='text-[8vw]'>Hey there, I'm Matt.</h1>
                <p className='text-[3vw] underline underline-offset-15 decoration-green-400'>✨I'm here to help you maximize your online presence.</p>
                <p className='mt-30 animate-bounce text-center invisible lg:visible'><ArrowDownwardIcon /></p>
            </div>
            <div className='w-[85vw] place-self-center'>
                <h2 className='border-double border-b-10 border-black opacity-0 intersect:opacity-100 bg-linear-to-br from-emerald-500 to-teal-400 bg-clip-text text-center text-[6vb] text-transparent mb-15 intersect:animate-flip-up intersect-once intersect-full animate-duration-1000 animate-ease-in sm:mt-50 mx-10 sm:mx-35 rounded-3xl'>
                    What does that mean for you?
                </h2>
                <p className="place-self-center text-center">Well, to put it simply...</p>
                <p className="place-self-center text-center">A well-crafted, professional webpage!</p>
            </div>
        </div>
    )
}

export default Home;