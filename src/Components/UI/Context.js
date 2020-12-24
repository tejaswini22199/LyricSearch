import React, { Component } from 'react'
import axios from 'axios'
const Context=React.createContext();
export class Provider extends Component {
    state=
    {
        tracklist:[],
        heading:'Top 10'
    };
    componentDidMount()
    {
       axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=it&apikey=${process.env.REACT_APP_MM_KEY}`)
       // fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=`)
        .then(res=>{
            this.setState({tracklist: res.data.message.body.tracklist });
        }
            )
            .catch(err =>console.log("error occurred"));
    }
    render() {
        return (
            
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer=Context.Consumer;
