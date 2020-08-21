import React, { Component } from 'react';
import { Row, Col, Container, Button, Card, CardTitle } from 'reactstrap';
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

    constructor(props) {
        super(props);

        this.state = {
            cardData: [],
            viewData: [],
            spyMaster: false
        }
        this.gameData = this.gameData.bind(this);
        this.viewData = this.viewData.bind(this);
        this.handleButtonData = this.handleButtonData.bind(this);
        this.handleSpyMasterView = this.handleSpyMasterView.bind(this);
        console.log("constructor called")

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

    handleSpyMasterView() {
        if (this.state.spyMaster) {
            this.setState({
                spyMaster: false
            })
        }
        else {
            this.setState({
                spyMaster: true
            })
        }
    }

    handleButtonData(row) {
        let rowData;
        if (!this.state.spyMaster) {
            rowData = this.state.cardData[row].map((obj) => {

                if (obj.played) {
                    return (

                        <Col key={obj.word} className="cardBody" xs="2"><Card inverse color={obj.type}><CardTitle>{obj.word}</CardTitle></Card></Col>

                    );
                }
                else {
                    return (

                        <Col key={obj.word} className="cardBody" xs="2"><Card inverse color="secondary"><CardTitle>{obj.word}</CardTitle></Card></Col>

                    );
                }

            })
        }
        else {
            rowData = this.state.cardData[row].map((obj) => {

                if (obj.played) {
                    return (

                        <Col key={obj.word} className="cardBody" xs="2"><Card inverse color={obj.type}><CardTitle>{obj.word}</CardTitle></Card></Col>

                    );
                }
                else {
                    return (

                        <Col key={obj.word} className="cardBody" xs="2"><Card inverse color="secondary"><CardTitle className={`text-${obj.type}`}>{obj.word}</CardTitle></Card></Col>

                    );
                }

            })
        }
        return rowData;
    }







    render() {
        return (
            <div>
                <br />

                <Container>

                    <Row className="cardRow">
                        {this.handleButtonData(0)}
                    </Row>
                    <Row className="cardRow">
                        {this.handleButtonData(1)}
                    </Row>
                    <Row className="cardRow">
                        {this.handleButtonData(2)}
                    </Row>
                    <Row className="cardRow">
                        {this.handleButtonData(3)}
                    </Row>
                    <Row className="cardRow">
                        {this.handleButtonData(4)}
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col><Button onClick={this.handleSpyMasterView}>Spy Master View</Button></Col>
                    </Row>
                </Container>


            </div>
        );
    }
}
export default GridComponent;