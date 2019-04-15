


import React from 'react'
import { getData, updateInFirestoreByKey } from './../firebase/fbCRUD';
import { Link } from 'react-router-dom';

class EditImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: undefined,
            url: undefined,
            name: undefined,
            tooltipPosition: undefined,
            done: false,
            querySuccess: false
        }
        getData(props.match.params.id).then((data) => {
            let value = data.data();
            this.setState({
                title: value.title,
                url: value.url,
                name: value.name,
                tooltipPosition: value.tooltipPosition,
                querySuccess: true
            })
        }).catch((error) => { 
            this.setState({
                done:true,
                querySuccess: false
            })
         });
        this.hadleChange = this.hadleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    hadleChange = (e) => {
            let name = e.target.id;
            this.setState({
                [name]: e.target.value,
                done: false
            });
    }
    handleClick() {
        if (this.state.title && this.state.tooltipPosition) {
            if (updateInFirestoreByKey(this.state, this.props.match.params.id)
                    .then((data)=>{
                        this.setState({
                            done: true
                        });
                    })) {
                
            }
        }
    }

    render() {
        if (this.state.title && this.state.url && this.state.tooltipPosition) {
            return (
                <>
                    <div className="col s6 offset-s3" >
                        <div className="center-align"> <h3>Edit Image</h3></div>
                        <div className="center-align" hidden={this.state.done ? false : true}> <h4 className="green-text text-accent-3">Saved</h4></div>
                        <div className="center-align">
                            <img src={this.state.url} alt="" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="title" className="active">Tooltip Text</label>
                            <input value={this.state.title} type="text" id="title" onChange={this.hadleChange} />
                        </div>
                        <p className="center-align">Tooltip Position</p>
                        <div className="col s12">

                            <div className="col s3">
                                <label>
                                    <input checked={this.state.tooltipPosition === "top" ? true : false} className="with-gap" id="tooltipPosition" name="group1" type="radio" value="top" onChange={this.hadleChange} />
                                    <span>Top</span>
                                </label>
                            </div>
                            <div className="col s3">
                                <label>
                                    <input checked={this.state.tooltipPosition === "bottom" ? true : false} className="with-gap" id="tooltipPosition" name="group1" type="radio" value="bottom" onChange={this.hadleChange} />
                                    <span>Bottom</span>
                                </label>
                            </div>
                            <div className="col s3">
                                <label>
                                    <input checked={this.state.tooltipPosition === "left" ? true : false} className="with-gap" id="tooltipPosition" name="group1" type="radio" value="left" onChange={this.hadleChange} />
                                    <span>Left</span>
                                </label>
                            </div>
                            <div className="col s3">
                                <label>
                                    <input checked={this.state.tooltipPosition === "right" ? true : false} className="with-gap" id="tooltipPosition" name="group1" type="radio" value="right" onChange={this.hadleChange} />
                                    <span>Right</span>
                                </label>
                            </div>

                            <div className="input-field" hidden={this.state.url && this.state.title && this.state.tooltipPosition ? false : true}>
                                <button type="submit" className="btn pink lightrn-1 z-depth-0 right" onClick={this.handleClick}>Save</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else return (
            <div className="red-text text-accent-3 center-align" hidden={!this.state.querySuccess && this.state.done ? false : true}>
                <h3><i className="far fa-frown"></i> No Data Found</h3>
                <Link to="/"><h5>Back to Dashboard</h5> </Link>
            </div>
        )
    }

}

export default EditImage
