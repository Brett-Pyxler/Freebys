import React from 'react'
import './Trending.scss'
import nike from '../img/nike.png'
import calvinKlein from '../img/adidas_logo.svg'
import converse from '../img/converse.svg'
import champion from '../img/champion-logo.svg'
import rayBan from '../img/ray-ban-logo.png'

export default function Trending() {
  return (
    <div className="trending">
      <h2 className="section-title">
        Hot Brands <span className="material-icons">local_fire_department</span>
      </h2>
      <div className="explore-carousel">
        <div className="box itemBox">
          <img src={nike} alt="{books}" />
        </div>
        <div className="box itemBox ">
          <img src={calvinKlein} alt="{home}" />
        </div>
        <div className="box itemBox ">
          <img src={converse} alt="{videogames}" />
        </div>
        <div className="box itemBox ">
          <img src={champion} alt="{sports}" />
        </div>
        <div className="box itemBox">
          <img src={rayBan} alt="{clothes}" />
        </div>
      </div>
      </div>
  )
}
