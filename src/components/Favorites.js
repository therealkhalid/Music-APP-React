
import React from 'react'
import ItemFavorites from './ItemFavorites'
import Navbar from './Navbar/Navbar'
import {GetFavories } from './API/Data'
import Swal from 'sweetalert2'
function Favorites() {
  const[Albums,setAlbums]=React.useState([])
  React.useEffect(()=>{
    let favorites=JSON.parse(GetFavories());
    setAlbums(favorites)
  },[])

  const deleteFavories=(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
          },
          buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            let albums = Albums.filter(item => item.id !== id);
            setAlbums(albums);
            localStorage.setItem('favorites', JSON.stringify(albums));
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
    }
  return (
    <div className='container'>
         <div className='row mt-4'>
           <div className='col-md-12 mx-auto'>
             <Navbar/>
             <div className='row'>
               <ItemFavorites Albums={Albums} deleteFavories={deleteFavories}/>
             </div>
           </div>
         </div>
       </div>
  )
}

export default Favorites