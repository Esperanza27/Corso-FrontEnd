import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return <img src={this.props.srcImage} alt={this.props.altText} style={{width: '250px', borderRadius: '25px'}}/>
    }
}
export default ImageComponent