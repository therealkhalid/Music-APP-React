import React from 'react'
import ItemMusic from '../ItemMusic'
import { getAlbums } from './API/Data'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'

function ListMusic() {
  const[Albums,setAlbums]=React.useState([])
  React.useEffect(()=>{
    getAlbums().then(album=>setAlbums(album))
  },[])
  console.log(Albums)
  const searchAlbum=(name)=>{
    getAlbums(name).then(item=>setAlbums(item))
  }



  return (
      <div className='container'>
          <div className='row mt-4'>
              <div className='col-md-12 mx-auto'>
                    <Navbar/>
                    <Search searchAlbum={searchAlbum}/>
                    <div className='row'>
                      <ItemMusic Albums={Albums}/>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default ListMusic