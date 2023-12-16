import React from 'react'
import './Sidebar.css'
import { ReactComponent as Homeicon } from '../assets/Homeicon.svg';
import { ReactComponent as Libraryicon } from '../assets/Libraryicon.svg';
import { ReactComponent as Searchicon } from '../assets/Searchicon.svg';
const myPlaylist=[
  {
    id: 1,
    name:'Arijit Singh',
  },
  {
    id: 2,
    name:'Sonu Nigam',
  },
  {
    id: 3,
    name:'Kk',
  },
  {
    id: 4,
    name:'Mithoon',
  },
  {
    id: 5,
    name:'Atif Aslam',
  },
  {
    id: 6,
    name:'Shreya Ghoshal',
  },
  {
    id: 7,
    name:'Jubin Nautiyal',
  },
  {
    id: 8,
    name:'Mohit Chauhan',
  },
  {
    id: 9,
    name:'Arman Malik',
  },
  {
    id: 10,
    name:'Sunidhi Chauhan',
  },
]
export default function Sidebar() {
  return (
    <div className="sidebar-item-container">
    <div className="sidebar-items">
      <Homeicon width={'18px'} strokeWidth={'2px'}/>Home
      </div>
      <div className="sidebar-items">
        <Searchicon width={'18px'} strokeWidth={'2px'}/>Search
      </div>
      <div className="sidebar-items">
        <Libraryicon width={'18px'} strokeWidth={'2px'}/>My Library
      </div>

       <div className="side-options">
        {
          myPlaylist.map(item=>{
            return(
              <div className='side-bar-items' key={item.id}>
                {item.name}
              </div>
            )
          })
        }
       </div>


  </div>

  )
}
