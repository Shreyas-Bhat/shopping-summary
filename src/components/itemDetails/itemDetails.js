import React, { Component } from 'react';

import { Row, Col, Button, Collapse, Card, Media } from 'react-bootstrap';
export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        };
    }
    render(){
        return(
            <div>
                <Button
                className="item-details-button"
                variant="link"
                onClick={() => this.setState({open: !this.state.open })}>
                    {this.state.open === false ? `See` : `Hide `} item ItemDetails
                    {this.state.open === false ? ` +` : ` -`}  
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                <Media.Body>
                                    <img 
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://cdn.bulbagarden.net/upload/thumb/6/68/443Gible.png/600px-443Gible.png"
                                    />
                                </Media.Body>
                                <Media.Body>
                                    <p>Essential by pokemart</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}> Qty: 1</Col>

                                    </Row>
                                </Media.Body>
                            </Media>
                        </Card>
                    </div>

                </Collapse>
            </div>

        )
    }
}