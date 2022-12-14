import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Service extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info : "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info : "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            },
            {
                icon: <FaShuttleVan/>,
                title: "free cocktails",
                info : "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info : "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            },
        ]
    }

  render() {
    return (
      <div className='services'>
        <Title title="services"/> 
        <div className='services-center'>
            {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </div>
    )
  }
}
