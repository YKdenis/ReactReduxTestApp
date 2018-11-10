import React, { Component } from "react";
import PlanetList from "../containers/planet_list";

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <PlanetList/>
            </div>
        )
    }
}