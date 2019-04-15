
import React from 'react';
import { Link } from 'react-router-dom';

class GaleryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseEvent: false
        }
        this.click = this.click.bind(this);

    }

    click() {
        this.setState({
            mouseEvent: !this.state.mouseEvent
        })
    }

    render() {
        return (
            <>
                <div className="col s12 m4 galeryImgWrap">
                    <div className="col s12 center-align poiterWrap">
                        <div hidden={this.props.props.tooltipPosition !== "top" ? true : false} >
                            <i className="far fa-dot-circle" onMouseEnter={this.click} onMouseLeave={this.click}></i>
                        </div>
                    </div>
                    <div className="col s1 center-align poiterWrap vertical left">
                        <div hidden={this.props.props.tooltipPosition !== "left" ? true : false} >
                            <i className="far fa-dot-circle" onMouseEnter={this.click} onMouseLeave={this.click}></i>
                        </div>
                    </div>
                    <div className="col s10 center-align galeryImg">
                        <div className="col s12 imgContr">
                            <div className="col " data-name={this.props.props.name} data-key={this.props.props.key} onClick={this.props.delete}>
                                <i className="far fa-times-circle"  ></i> Delete
                        </div>
                            <div className="col ">
                                <Link to={"./edit/" + this.props.props.key}>
                                    <i className="far fa-edit" title="Edit"></i> Edit
                            </Link>
                            </div>
                        </div>
                        <img className="responsive-img" src={this.props.props.url} alt="" />
                        <div className="poinerText" hidden={this.state.mouseEvent ? false : true}>
                            {this.props.props.title}
                        </div>
                    </div>
                    <div className="col s1 center-align poiterWrap vertical right">
                        <div hidden={this.props.props.tooltipPosition !== "right" ? true : false} >
                            <i className="far fa-dot-circle" onMouseEnter={this.click} onMouseLeave={this.click}></i>
                        </div>
                    </div>
                    <div className="col s12 center-align poiterWrap">
                        <div className="center-align" hidden={this.props.props.tooltipPosition !== "bottom" ? true : false} >
                            <i className="far fa-dot-circle" onMouseEnter={this.click} onMouseLeave={this.click}></i>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default GaleryDetail;