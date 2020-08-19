import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap'
import GridComponent from './GridComponent';

class MainComponent extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <GridComponent></GridComponent>
            </div>
        );
    }


}

export default MainComponent;