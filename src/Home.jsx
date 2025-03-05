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
                <p className='opacity-0 intersect:opacity-100 intersect:animate-fade-left intersect-once intersect-full animate-duration-1000 animate-delay-1000 animate-ease-in text-[5vb] p-10 bg-linear-to-l from-emerald-500 to-teal-400 mx-10 rounded-3xl mb-5'>
                    Well, if you aren't aware, nearly 80% of consumers research online before buying anything. A well crafted webpage can bring you new customers/clients that otherwise might not have known about you!
                </p>
                <div>
                    <h3 className='text-[2vw]'>You/Your Brand/Your Business</h3>
                    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmNzMmM5dWFudzFqZncyMXlsNnQ2N283NnRuczI2eW4yeWR0aGNuciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cp3EXAJY259ctiQP9K/giphy.gif" className="w-[33%]"></img>
                    <h3 className='text-[2vw]'>Consumers/Clients</h3>
                    <p className='opacity-0 intersect:opacity-100 intersect:animate-jump-in intersect-once intersect-full animate-duration-1000 animate-delay-1000 animate-ease-in text-[5vb] p-10 bg-linear-to-l from-emerald-900 to-gray-400 mx-10 rounded-3xl text-center w-[50vw] place-self-center'>
                        That's where I come in 😎
                    </p>
                    <p className='opacity-0 intersect:opacity-100 intersect:animate-flip-down intersect-once intersect-full animate-duration-1000 animate-delay-1000 animate-ease-in text-[5vb] p-10 bg-linear-to-l from-emerald-900 to-gray-400 mx-10 rounded-3xl text-center w-[50vw] place-self-center mt-3'>
                        With my skills and expertise new customers/clients will find you precisely when they need your products or services!
                    </p>
                </div>
               
            </div>
        </div>
    )
}

export default Home;