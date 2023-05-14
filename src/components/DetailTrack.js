
import React from 'react'
import { useParams } from 'react-router-dom'
import { getAlbum } from './API/Data'
import Navbar from './Navbar/Navbar'
import Track from './Track'

function DetailTrack() {
  const[albums,setAlbums]=React.useState([])
  const[tracks,setTracks]=React.useState([])
  const param=useParams()
  console.log(param.id)
  React.useEffect(()=>{
    getAlbum(param.id).then(item=>setAlbums(item))
    getAlbum(param.id).then(item=>setTracks(item.tracks.data))
  },[param])
  console.log('albums10',albums);
  console.log('traks10',tracks);

  const renderAlbums=()=>{
      return(
        <>
        <div className='col-4  mb-2'>
          <div className='card border-danger w-100 mx-auto'>
            <img src={albums.cover_big} alt="" className='card-img-top' />
            <div className='card-body'>
              <span className='text-primary'>{albums.release_date}</span>
              <div className='card-title'>{albums.title}</div>
            </div>
          </div>
        </div>
        <div className='col-8  mb-2'>
          <div className='row'>
            <Track tracks={tracks} albums={albums}/>
          </div>
        </div>
        </>
      )
    
  }
  
  return (
    <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-12 mx-auto'>
            <Navbar/>
            <div className='row'>
              {renderAlbums()}
            </div>
          </div>
        </div>
      </div>
  )
}

export default DetailTrack