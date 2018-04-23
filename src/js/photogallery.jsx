import React, {Component} from 'react';
import '../css/photogallery.scss';
import leftarrow from '../images/circle-left.svg';
import rightarrow from '../images/circle-right.svg';

export class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }

        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    previousImage() {
        this.setState({
            selectedIndex: Math.max(this.state.selectedIndex - 1, 0)
        });
    }

    nextImage() {
        this.setState({
            selectedIndex: Math.min(this.state.selectedIndex + 1, this.props.images.length - 1)
        });
    }

    render() {
        let selectedImage = this.props.images[this.state.selectedIndex];
        return (
            <div class="photo-gallery-container">
                <div class="photo-gallery">
                    <button class="left" onClick={this.previousImage}><img src={leftarrow} /></button>
                    <figure>
                        <img src={selectedImage.url} />
                        <figcaption>{selectedImage.caption}</figcaption>
                    </figure>
                    <button class="right" onClick={this.nextImage}><img src={rightarrow}/></button>
                </div>
            </div>
       ) 
    }
}