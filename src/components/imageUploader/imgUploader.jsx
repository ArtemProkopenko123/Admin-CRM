import React from 'react';
import saveInStorage from '../firebase/storageCreate';
import { Link } from 'react-router-dom';


class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            title: undefined,
            url: undefined,
            tooltipPosition: undefined,
            name: undefined,
            done: false
        }
        this.hadleChange = this.hadleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    hadleChange = (e) => {
        if (e.target.type === 'file') {
            this.setState({
                image: e.target.files[0]
            });
        } else {
            let name = e.target.id;
            this.setState({
                [name]: e.target.value
            });
        }
    }

    handleClick() {
        if (this.state.image && this.state.title && this.state.tooltipPosition) {
            if (saveInStorage(this.state)) {
                this.setState({
                    done: true
                })
            }
        }
    }
    render() {
        return (
            <>
                <div className="center-align" hidden={this.state.done ? false : true}>
                    <h3>File Added Successuly!</h3>

                    <Link to="/"><h5>Check your image in galery</h5> </Link>
                </div>
                <div className="col s6 offset-s3" hidden={this.state.done ? true : false}>
                    <div className="center-align"> <h3>Upload Images</h3></div>
                    <div className="file-field input-field ">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" id="file" onChange={this.hadleChange} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Tooltip Text</label>
                        <input type="text" id="title" onChange={this.hadleChange} />
                    </div>
                    <p className="center-align">Tooltip Position</p>
                    <div className="col s12">

                        <div className="col s3">
                            <label>
                                <input className="with-gap" id="tooltipPosition" name="group1" type="radio" value="top" onChange={this.hadleChange} />
                                <span>Top</span>
                            </label>
                        </div>
                        <div className="col s3">
                            <label>
                                <input className="with-gap" id="tooltipPosition" name="group1" type="radio" value="bottom" onChange={this.hadleChange} />
                                <span>Bottom</span>
                            </label>
                        </div>
                        <div className="col s3">
                            <label>
                                <input className="with-gap" id="tooltipPosition" name="group1" type="radio" value="left" onChange={this.hadleChange} />
                                <span>Left</span>
                            </label>
                        </div>
                        <div className="col s3">
                            <label>
                                <input className="with-gap" id="tooltipPosition" name="group1" type="radio" value="right" onChange={this.hadleChange} />
                                <span>Right</span>
                            </label>
                        </div>
                    </div>
                    <div className="input-field" hidden={this.state.image && this.state.title && this.state.tooltipPosition ? false : true}>
                        <button type="submit" className="btn pink lightrn-1 z-depth-0 right" onClick={this.handleClick}>Submit</button>
                    </div>
                    <img src={this.state.url} alt="" width="200px" />
                </div>

            </>
        )
    }
}

export default ImageUploader;