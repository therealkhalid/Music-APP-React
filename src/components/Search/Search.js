
import React from 'react'

function Search({searchAlbum}) {
  const[name,setName]=React.useState('')
  const handelSubmit=(e)=>{e.preventDefault();searchAlbum(name)}
  return (
    <div className='container my-2 '>
         <form onSubmit={(e)=>handelSubmit(e)}>
             <div className='row ms-5'>
                 <div className='col-10'>
                     <div className='form-group'>
                         <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
                     </div>
                 </div>
                 <div className='col-2'>
                     <div className='form-group'>
                         <button className='btn btn-danger px-3'>
                             <i className='bi bi-search'></i>
                         </button>
                     </div>
                 </div>
             </div>
         </form>
       </div>
  )
}

export default Search