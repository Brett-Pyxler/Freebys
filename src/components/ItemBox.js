import React, { useEffect } from 'react'
import './ItemBox.scss'
import nike from '../img/nike.png'

class ItemBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src: '',
            alt: ''
        }
        this.imgRef = React.createRef()
    }

    setImage() {

      let newImage = this.imgRef.current.src
        console.log("aasdda " ,newImage)
            //this.setState({src: nike})
        
    }

    changeHandler(event) {
        console.log(event)
    }

    componentDidMount() {
        console.log(this.state)
    }
    /* 
        ToDo: Set state
        -item image
        -item name
        -item brand
        -link to store
        -logo for type of deal
    */

   //<img src={this.state.src} alt={this.state.alt} ref={this.imgRef} onChange={this.changeHandler} />
    render(){
        return (
            <div className="itemBox">
            
            </div>
        )
    }
}

export default ItemBox
