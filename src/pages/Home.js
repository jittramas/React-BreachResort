import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link,} from 'react-router-dom'
import Service from "../component/Service"
import FeaturesRoom from '../component/FeaturesRoom'
import Button from '../component/StyledHero'


export default function Home() {
  // const query = newURLSearchParams(useLocation().search);
  // console.log(query)

  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/room" className='btn-primary'>Our rooms
          </Link>
        </Banner> 
      </Hero>
      <Service/>
      <FeaturesRoom/>

    </>
  )
}
