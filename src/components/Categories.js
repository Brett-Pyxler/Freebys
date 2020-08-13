import React from 'react'
import './Categories.scss'
import { Nav } from 'react-bootstrap'
import './ItemBox.scss'
import books from '../img/books.jpg'
import home from '../img/home.jpg'
import videogames from '../img/videogames.jpg'
import sports from '../img/sports.jpg'
import clothes from '../img/clothes.jpg'

export default function Categories() {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <div className="explore-carousel">
        <div className="box itemBox category">
          <img src={books} alt="{books}" />
          <p>Books</p>
        </div>
        <div className="box itemBox category">
          <img src={home} alt="{home}" />
          <p>Home</p>
        </div>
        <div className="box itemBox category">
          <img src={videogames} alt="{videogames}" />
          <p>Video Games</p>
        </div>
        <div className="box itemBox category">
          <img src={sports} alt="{sports}" />
          <p>Sports & Outdoors</p>
        </div>
        <div className="box itemBox category">
        <img src={clothes} alt="{clothes}" />
        <p>Clothes</p>
        </div>
      </div>

      <h3 className="explore-more">Explore More...</h3>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">All</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Hot</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">New</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3">Free</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
