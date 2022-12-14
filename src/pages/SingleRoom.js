import React, { useContext, useState } from 'react'
import defaultDbg from '../images/room-1.jpeg'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link, useLocation, useParams } from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../component/StyledHero'

export default function SingleRoom() {
  const  {getRoom}  = useContext(RoomContext)
  const {slug} = useParams()
  const room = getRoom(slug)
  const [image]= defaultDbg
  

  
  if(!room) {
    return <div className="error">
      <h3>no such room could be found...</h3>
      <Link to="/rooms" className='btn-primary'>Back to Room</Link>
    </div>
  }

  const {name, description,capacity,size,price,extras,breakfast, pets,images } = room;

  const [mainImg,...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || image}>
        <Banner title={`${name} room`}>
          <Link to="/room" className="btn-primary">Back to Room</Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item,index) => {
            return <img key={index} src={item} alt={name} />
          })}
        </div>
        <div className='single-room-info'>
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT </h6>
            <h6>Max capacity : {""} {capacity > 1 ? `${capacity} people` : `${capacity} person` } </h6>
            <h6>{pets?"pets allowed" : "no pets allowed" }</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <ul className='extras'>
          {extras.map((item,index) => { return <li key={index}>{item}
          </li>})}
        </ul>
      </section>

    </>
  )
}
