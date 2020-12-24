import React, { Component } from 'react'
import {Consumer} from '../UI/Context'
import Spinner from '../UI/Spinner'
class Track extends Component {
    render()
    {return (
        <Consumer>
            {value=>{
                    const { tracklist } = value ;
                        if( tracklist === undefined || tracklist.length === 0  )
                       return <Spinner/>;
                        else
                        {
                            console.log('ok');
                        return (<h1>Tracks</h1>);
                        }
                }
            }
        </Consumer>
    );
        }
}

export default Track
