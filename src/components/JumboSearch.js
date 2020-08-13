import React from 'react'
import '../components/JumboSearch.scss'
import Hero from '../img/hero-image.jpg'


export default function JumboSearch() {
    return (
        <div className="main jumboSearch">
        <div className={`hero__container`}>
          <div className={`search__container`}>
            <input
              className={`search__input`}
              type="search"
              autoComplete="off"
              placeholder="Search"
              spellCheck="false"
            />
          </div>
          <img alt=" " className="hero__image" src={Hero} />
        </div>
        <div className={`main__container`}>
          <div className={`explore__section`}></div>
          <div className={`category__section`}></div>
        </div>
      </div>
    )
}
