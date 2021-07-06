import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class DisplayCard extends Component {


    render() {
        return (
            <div>
                 {
                    this.props.drinkData.length > 0 &&
                    this.props.drinkData.map((item, idx) => {
                        return (
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Card.Img variant="bottom" src={item.strDrinkThumb} />
                                    <Button onClick={(e) =>this.props.createFav(e,item)} variant="primary"> Add To Favorite</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayCard
