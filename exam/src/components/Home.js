import React, { Component } from 'react'
import DisplayCard from './DisplayCard';
import Favorite from './Favorite';
const axios = require('axios');
const serverUrl = process.env.SERVER_URL;


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drinkData: [],
            favDrink: [],
        }
    }

    // ${process.env.SERVER_URL}/drinks
    componentDidMount = async (req, res) => {
        await axios.get(`http://localhost:8000/drinks`).then(response => {
            console.log(' response.data', response.data)
            this.setState({
                drinkData: response.data
            })

            console.log(this.state.drinkData);
        }

        ).catch(error => console.log(error));
       
    }

    createFav = async (e, item) => {
        e.preventDefault();
        const reqbody = {
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            idDrink: item.idDrink

        };

        await axios.post(`http://localhost:8000/favorite`, reqbody).then(response => {

        }

        ).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <DisplayCard
                    drinkData={this.state.drinkData}
                    createFav={this.createFav}
               
                />
                <Favorite
                    favDrink={this.state.favDrink}
                    

                />
            </div>
        )
    }
}

export default Home
