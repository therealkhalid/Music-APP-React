import React from 'react'
import {Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function ItemMusic({Albums}) {

    const checkAlbums=(albums,album)=>{
        let found=albums.find((item)=>{
          return item.title===album.title
        })
        return found;
      }
      /*-----------------------------------------------------------------------------------------------------*/
      const addToFavories=(album)=>{
      let oldFavories=JSON.parse(localStorage.getItem('favorites')) || [];
      if(checkAlbums(oldFavories,album)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This Track Already Exist',
        })
        return false
              
      }else{
      oldFavories.push(album)
      let favories=oldFavories;
      localStorage.setItem('favorites',JSON.stringify(favories))
      Swal.fire({
        title: album.title,
        text: 'New Track is Aded succesfuly.',
        imageUrl: album.album.cover_big,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      }}
      /*-----------------------------------------------------------------------------------------------------*/
    return Albums && Albums.length?
    Albums.map((item)=>{
      return(
        <div className='col-4 mb-2' key={item.id}>
          <div className='card border-danger'>
            <img src={item.album.cover_big} alt="" className='card-img-top' />
            <div className='card-body'>
              <span className='text-primary'>{item.artist.name}</span>
              <div className='card-title'>{item.title}</div>
            </div>
            <div className='card-footer'>
              <div className='d-flex justify-content-between'>
                <button className='btn btn-danger'><i className="bi bi-heart-fill" onClick={()=>addToFavories(item)}></i></button>
                <button className='btn btn-primary'><Link to={`/detail/${item.album.id}`} className='text-light'><i className="bi bi-info-circle-fill"></i></Link></button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    :null
}

export default ItemMusic