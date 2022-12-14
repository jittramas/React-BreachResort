import React, { useContext } from 'react'
import {RoomContext} from "../Context"
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"


function FeatureRooms () {
  const value = useContext(RoomContext);
  let {loading, featuredRooms : rooms } = value;
  rooms = rooms.map(room=> {return <Room key={room.id} room={room}/>})

  return (
      <section className='featured-rooms'>
        <Title className="featured rooms"/>
        <div className='featured-rooms-center'>
          {loading ? <Loading/> : rooms}
        </div>
      </section>
  )
}

export default FeatureRooms
// export default class FeatureRooms extends Component {
//     static contextTypes = RoomContext;
//   render() {
//     const value = this.context;
//     console.log(value)
//     return (
//       <div>
//         {value}

//         hi
//       </div>
//     )
//   }
// }
