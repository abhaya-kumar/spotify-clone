import React from 'react'
import './PlayerPlaylist.css'
const playlist = [
  {
    id: 1,
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    album: 'Aashiqui 2',
    duration: '4.24',
  },
  {
    id: 2,
    title: 'Jeene Laga Hoon',
    artist: 'Atif Aslam',
    album: 'Ramaiya Vastavaiya',
    duration: '3.22',
  },
  {
    id: 3,
    title: 'Tere Bina',
    artist: 'A.R. Rahman, Chinmayi',
    album: 'Guru',
    duration: '4.47',
  },
  {
    id: 4,
    title: 'Channa Mereya',
    artist: 'Arijit Singh',
    album: 'Ae Dil Hai Mushkil',
    duration: '4.49',
  },
  {
    id: 5,
    title: 'Tere Sang Yaara',
    artist: 'Atif Aslam',
    album: 'Rustom',
    duration: '4.55',
  },
  {
    id: 6,
    title: 'Hasi Ban Gaye',
    artist: 'Shreya Ghoshal',
    album: 'Hamari Adhuri Kahani',
    duration: '4.24',
  },
  {
    id: 7,
    title: 'Raabta',
    artist: 'Arijit Singh, Shreya Ghoshal',
    album: 'Agent Vinod',
    duration: '4.03',
  },
  {
    id: 8,
    title: 'Sun Saathiya',
    artist: 'Divya Kumar, Priya Saraiya',
    album: 'ABCD 2',
    duration: '3.40',
  },
  {
    id: 9,
    title: 'Tera Ban Jaunga',
    artist: 'Akhil Sachdeva, Tulsi Kumar',
    album: 'Kabir Singh',
    duration: '3.56',
  },
  {
    id: 10,
    title: 'Ae Watan',
    artist: 'Arijit Singh',
    album: 'Raazi',
    duration: '4.56',
  },
];

export default function PlayerPlaylist() {
  return (
    <div className='playlist-container'>
      <div className='playlist-header'>
        <div className='playlist-image'>

        </div>
        <div className='playlist-body'>
          <p>PLAYLIST</p>
          <h1>My Favourite</h1>

        </div>

      </div>
      <div className='playlist-list'>
        <div className='playlist-list-title'>
          TITLE
        </div>
        <div className='playlist-list-artist'>
          ARTIST

        </div>
        <div className='playlist-list-album'>
          ALBUM

        </div>
        <div className='playlist-list-duration'>
          DURATION

        </div>

      </div>
      <div className='playlist-list-container'>
        {
          playlist.map(item => {
            return (
              <div className='playlist-list'>
                <div className='playlist-list-title'>
                  {item.title}
                </div>
                <div className='playlist-list-artist'>
                  {item.artist}
                </div>
                <div className='playlist-list-album'>
                  {item.album}

                </div>
                <div className='playlist-list-duration'>
                  {item.duration}

                </div>


              </div>

            )
          })
        }
      </div>

    </div>
  )
}
