import React, { Component } from "react";
import "./App.css";
import Features from "./Features";
import Cart from "./Cart";
import Header from "./Header";

import featuresList from "./featuresList.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700,
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200,
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98,
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const features = Object.keys(featuresList).map((key) => {
      console.log(key);

      return (
        <Features
          part={key}
          onUpdate={this.updateFeature}
          choices={featuresList[key]}
          selected={this.state.selected[key]}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <main>
          <section className="main-form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
          </section>
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
