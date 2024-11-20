import React from 'react'

const page = () => {

const watchData =[
  {id:1, name:'Rolex',price: 12000,description:'Luxury watch',image: '/img5.webp'},
  {id:2, name:'Rolex',price: 12000,description:'Luxury watch',image: '/img6.webp'},
  {id:3, name:'Rolex',price: 12000,description:'Luxury watch',image: '/img4.webp'},
  {id:4, name:'Smart-Watch',price: 13000,description:'Luxury watch',image: '/img3.avif'},
  {id:5, name:'Smart-Watch',price: 13000,description:'Luxury watch',image: '/img2.avif'},
  {id:6, name:'Smart-Watch',price: 13000,description:'Luxury watch',image: '/img1.avif'},
  {id:7, name:'Rolex Watch',price: 12000,description:'Luxury watch',image: '/images11.jpg'},
  {id:8, name:'Rolex Watch',price: 12000,description:'Luxury watch',image: '/images10.jpg'},
  


]

  return (
    <div>
      <div className='wacches'>
        {watchData.map((watch) => (
<div key={watch.id} className='watch-card'>
<img src={watch.image} alt={watch.name} />
<h2>{watch.name}</h2>
<p>Description: {watch.description}</p>
<div>${watch.price}</div>
<button>Add to cart</button>
</div>
        ))}
      </div>
    </div>
  )
}

export default page
