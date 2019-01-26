import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';


class ParallaxScroll extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {imgSrc}  = this.props
        return (
            <div>

                <Parallax strength={500}
                >

                    <div style={{ height: "100vh", width: "auto" }}>
                    </div>
                    <Background style={{ height: "100vh" }} className="custom-bg">


                        <div style={{ maxHeight: "100vh", width: "auto" }}>
                            <img style={{ maxHeight: "1200px" }}

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