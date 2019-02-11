import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';


class ParallaxScroll extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {imgSrc, viewPort, imgHeight}  = this.props
        return (
            <div>

                <Parallax strength={500}
                >

                    <div style={{ height: viewPort, width: "auto" }}>
                    </div>
                    <Background  className="custom-bg">


                        <div >
                            <img style={{ maxHeight: imgHeight, minWidth: "100%", paddingTop: "200px" }}

                                src={imgSrc}
                            />
                        </div>

                    </Background>
                </Parallax>
            </div>

        )

    }

}

export default ParallaxScroll