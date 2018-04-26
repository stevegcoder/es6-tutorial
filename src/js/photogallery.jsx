import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' 
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
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.xDown = null;
        this.yDown = null;
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

    onTouchStart(touchEvent) {                                         
        this.xDown = touchEvent.touches[0].clientX;                                      
        this.yDown = touchEvent.touches[0].clientY;                                      
    };                                                

    onTouchMove(touchEvent) {
    if ( ! this.xDown || ! this.yDown ) {
        return;
    }

    let xUp = touchEvent.touches[0].clientX;                                    
    let yUp = touchEvent.touches[0].clientY;

    let xDiff = this.xDown - xUp;
    let yDiff = this.yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            this.nextImage();
        } else {
            this.previousImage();
        }                       
    } 

    /* reset values */
    this.xDown = null;
    this.yDown = null;                                             
};

    render() {
        let selectedImage = this.props.images[this.state.selectedIndex];
        return (
            <div className="photo-gallery-container">
                <div className="photo-gallery">
                    <button className="left" onClick={this.previousImage}><img src={leftarrow} /></button>
                    <CSSTransitionGroup
                        transitionName="photo-gallery-figure"
                        transitionEnterTimeout={300}
                        transitionLeave={false}>
                        <figure key={selectedImage.url} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}>
                            <img src={selectedImage.url} />
                            <figcaption>{selectedImage.caption}</figcaption>
                        </figure>
                    </CSSTransitionGroup>
                    <button className="right" onClick={this.nextImage}><img src={rightarrow}/></button>
                </div>
            </div>
       ) 
    }
}