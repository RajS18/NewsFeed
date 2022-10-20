import React, { Component } from 'react'
import Spin from './Ajax-loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <img src={Spin} alt="loading"/>
            </div>
        )
    }
}
