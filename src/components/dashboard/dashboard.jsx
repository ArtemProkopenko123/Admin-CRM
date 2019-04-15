import React from 'react';
import GaleryList from './galaryList';


class Deashboard extends React.Component{


    render(){
        return(
            <>
                <div className="center-align"><h3>Image Galary</h3></div>
                <GaleryList />
            </>
        )
    }

}

export default Deashboard;