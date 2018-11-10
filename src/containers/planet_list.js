import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlanets } from "../actions";

class PlanetList extends Component {
    constructor(props) {
    super(props);
    }

    componentWillMount() {
        this.props.fetchPlanets();
    }

    renderPlanets() {

          return this.props.planets.map(planet => {
              return (
                <div className="planet" key={planet.url}>
                    <h3 className="planet--name">{planet.name}</h3>
                    <p>Rotation Period: {planet.rotation_period}</p>
                    <p>Orbital Period: {planet.orbital_period}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Population: {planet.population}</p>
                </div>
              );
          });
    }

    render() {
        if(!this.props.planets) {
            return (
                <div>Loading planets...</div>
            );
        }

        return <div className="generic-container">
                {this.renderPlanets()}
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchPlanets}, dispatch);
};

const mapStateToProps = (state) => {
  return {planets: state.planets};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList)