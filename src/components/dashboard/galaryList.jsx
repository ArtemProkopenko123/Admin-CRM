import React, { Component } from 'react';

import firebase from './../../fbConfig';
import GaleryDetail from './galaryDetail';
import DeleteFile from '../firebase/storageDelete';

class GaleryList extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('files');
        this.unsubscribe = null;
        this.state = {
            images: [],
            title: undefined,
            name: undefined,
            tooltipPosition: undefined
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const images = [];
        querySnapshot.forEach((doc) => {
            const { url, title, name, tooltipPosition } = doc.data();
            images.push({
                key: doc.id,
                doc, // DocumentSnapshot
                url,
                title,
                name,
                tooltipPosition
            });
        });
        this.setState({
            images,

        });
    }
    deleteIamge(element) {
        DeleteFile(element.target.getAttribute('data-name'), element.target.getAttribute('data-key'));
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
    componentWillUnmount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="row">
                {this.state.images.map(image =>
                    <GaleryDetail key={image.key} delete={this.deleteIamge} props={image} />
                )}
                <div hidden={this.state.images.length === 0 ? false : true} className="center-align">No images yet</div>
            </div>
        );
    }
}

export default GaleryList;