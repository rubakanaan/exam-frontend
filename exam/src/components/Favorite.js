import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalDrink from './ModalDrink'
const axios = require('axios');

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDrink: [],
            show:false,
            idx:''
        }
    }
    componentDidMount = async (req, res) => {



        await axios.get(`http://localhost:8000/favorite`).then(response => {
            this.setState({
                favDrink: response.data
            })

            console.log("fav added", this.state.favDrink);
        }

        ).catch(error => console.log(error));

    }
    deleteFav = (idx) => {

        axios.delete(`http://localhost:8000/favorite/${idx}`).then(response => {
            this.setState({
                favDrink: response.data
            })
        }
        ).catch(error => console.log(error));

    }
    handleClose = () => {
        this.setState({
            show:false
        })
    };
    handleShow = (idx) => {
        this.setState({
            show:true,
            idx:idx
        })
    };

    
    updateFav = (e, item) => {

        e.preventDefault();
        const reqbody = {
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            idDrink: item.idDrink

        };
        axios.put(`http://localhost:8000/favorite${this.state.idx}`, reqbody).then(response => {
            this.setState({
                favDrink: response.data
            })
        }).catch(error => console.log(error));
    }


    render() {

        return (
            <div>{console.log(this.state.favDrink)}
                {
                    this.state.favDrink.length > 0 &&
                    this.state.favDrink.map((item, idx) => {
                        return (
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Card.Img variant="bottom" src={item.strDrinkThumb} />
                                    <Button onClick={(e) =>this.handleShow(idx)} variant="primary">Update</Button>
                                <Button onClick={() => this.deleteFav(idx)} variant="primary">Delete</Button>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
               <ModalDrink
               handleShow={this.handleShow}
               handleClose={this.handleClose}
               updateFav={this.updateFav}
               show={this.state.show}
               />
            </div>
        )
    }
}

export default Favorite
