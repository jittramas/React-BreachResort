import React from 'react'
import RoomList from './RoomList'
import RoomsFiler from './RoomFilter'
import {  WithRoomConsumer } from '../Context'
import Loading from './Loading'


function RoomsContainer({context}) {
    const {loading, sortedRooms,rooms} = context;
    if (loading) {
        return <Loading/>
    }
        return (
            <>
                hi
                <RoomsFiler rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </>
            )
}

export default WithRoomConsumer(RoomsContainer)

