import React from 'react'
import { Link } from 'react-router-dom'
function ItemFavorites({Albums,deleteFavories}) {
    
    return Albums && Albums.length?
         Albums.map((item,index)=>{
           return(
             <div className='col-4 mb-2' key={index}>
               <div className='card border-danger'>
                 <img src={item.album.cover_big} alt="" className='card-img-top' />
                 <div className='card-body'>
                   <span className='text-primary'>{item.artist.name}</span>
                   <div className='card-title'>{item.title}</div>
                 </div>
                 <div className='card-footer'>
                   <div className='d-flex justify-content-between'>
                     <button className='btn btn-danger'><i className="bi bi-trash" onClick={()=>deleteFavories(item.id)}></i></button>
                     <button className='btn btn-primary'><Link to={`/detail/${item.album.id}`} className='text-light'><i className="bi bi-info-circle-fill"></i></Link></button>
                   </div>
                 </div>
               </div>
             </div>
           )
         })
         :null
       }


export default ItemFavorites