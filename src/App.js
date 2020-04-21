import React, { Component } from "react";
import "./App.css";
import Features from "./Features";
import Summary from "./Summary";

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
    const features = Object.keys(this.props.features).map((key) => {
      console.log(key);

      return (
        <Features
          part={key}
          onUpdate={this.updateFeature}
          choices={this.props.features[key]}
          selected={this.state.selected[key]}
        />
      );
    });

    const summary = <Summary selected={this.state.selected} />;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
          <h2>Customize your laptop</h2>
        </header>
        <main>
          <section className="main-form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
          </section>
          {summary}
        </main>
      </div>
    );
  }
}

export default App;
