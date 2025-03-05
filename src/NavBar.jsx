import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function NavBar(){
    return(
        <div className='border-double border-5 rounded-b-lg border-emerald-900 w-[10vw] sm:w-[60vw] sm:place-self-center sm:px-5 py-1 flex flex-col sm:flex-wrap sm:gap-10 justify-evenly bg-gray-200 sm:flex-row fixed sm:static mt-25 sm:mt-0'>
        <button className='hover:bg-emerald-700 text-[2vw] sm:rounded-3xl sm:p-1'><HomeIcon /> Home</button>
        <button className='hover:bg-emerald-700 text-[2vw] sm:rounded-3xl sm:p-1'><NewspaperIcon /> Skills</button>
        <button className='hover:bg-emerald-700 text-[2vw] sm:rounded-3xl sm:p-1'><PersonIcon /> About</button>
        <button className='hover:bg-emerald-700 text-[2vw] sm:rounded-3xl sm:p-1'><MailIcon /> Contact</button>
        <button className='hover:bg-emerald-700 text-[2vw] sm:rounded-3xl sm:p-1'><CollectionsBookmarkIcon /> Portfolio</button>
      </div>
    )
}

export default NavBar;