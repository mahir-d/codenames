import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import { wordList } from '../Shared/wordList';
import { typeList } from '../Shared/typeList';

class GridComponent extends Component {

    componentWillMount() {
        let cardArr = this.gameData();
        let viewArr = this.viewData();

        this.setState({

            cardData: cardArr,
            viewData: viewArr

        })

        console.log("componentdidmount called")
        console.log(cardArr);
        console.log(viewArr);
    }

    gameData() {
        let cardArr = [];
        let i = 0;


        while (i < 5) {

            let innerArr = [];
            let j = 0;
            while (j < 5) {
                let obj = {
                    row: i,
                    word: wordList[i][j],
                    type: typeList[i][j],
                    played: false
                }
                innerArr.push(obj);
                j++;
            }
            cardArr.push(innerArr);
            i++;
        }
        return cardArr;
    }
    viewData() {
        let viewArr = [];

        let i = 0;
        while (i < 5) {
            let innerArr = [];
            let j = 0;
            while (j < 5) {
                // let obj = {
                //     color: "secondary"
                // }
                innerArr.push("secondary");
                j++;
            }

            viewArr.push(innerArr);
            i++;
        }
        return viewArr;
    }

    handleButtonData(row) {


        let rowData = this.state.cardData[row].map((obj) => {

            return (
                <Col xs="2"><Button innerRef={this.word = obj.word} color={obj.color}>{obj.word}</Button></Col>
            );

        })
        return rowData;
    }



    constructor(props) {
        super(props);

        this.state = {
            cardData: [],
            viewData: []
        }
        this.gameData = this.gameData.bind(this);
        this.viewData = this.viewData.bind(this);
        this.handleButtonData = this.handleButtonData.bind(this);
        console.log("constructor called")

    }

    render() {
        return (
            <div>
                <br />

                <Container>
                    <Row>
                        {this.handleButtonData(0)}
                    </Row>
                    <Row>
                        {this.handleButtonData(1)}
                    </Row>
                    <Row>
                        {this.handleButtonData(2)}
                    </Row>
                    <Row>
                        {this.handleButtonData(3)}
                    </Row>
                    <Row>
                        {this.handleButtonData(4)}
                    </Row>



                </Container>
            </div>
        );
    }
}
export default GridComponent;