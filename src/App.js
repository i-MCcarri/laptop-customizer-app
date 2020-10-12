import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};


/* ---------- BEGIN: <Options /> && convert total into $US format style: $1,234.56 ---------- */
// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });
/* ---------- END: convert total into $US format style: $1,234.56 ---------- */
/* ---------- TO BE CONINUED BELOW: <Options /> ---------- */

/* ---------- BEGIN: App component ---------- */
class App extends Component {
  /* ---------- BEGIN: selected object state ---------- */
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  /* ---------- END: selected object state ---------- */

  /* ---------- BEGIN: componentWillUnmount lifecycle method | setState ---------- */
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    
    this.setState({
      selected
    });
  };
  /* ---------- END: componentWillUnmount lifecycle method | setState ---------- */


  render() {
    /* ---------- BEGIN: <h3/> <Features /> | map(FEATURES[i]) | creates selected {} | import <FEATURES /> from './index.js' ---------- */
    // const features = Object.keys(this.props.features).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    /* ---------- TO BE CONTINUED BELOW: continued[features] ---------- */

/* ---------- CONTINUED FROM ABOVE: <Options /> ---------- */
      /* ---------- BEGIN: stringify item > slugify string > assigns HTML key value after mapping the call of <FEATURES /> {}'s prototype props ---------- */
      // const options = this.props.features[feature].map(item => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   /* ---------- BEGIN: Generate HTML | <input> and <label> | updates summary IRT ---------- */
      //   return (
      //   <div key={itemHash} className="feature__item">
      //     <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(feature)}
      //         checked={item.name === this.state.selected[feature].name}
      //         onChange={e => this.updateFeature(feature, item)}
      //     />
      //     <label htmlFor={itemHash} className="feature__label">
      //         {item.name} ({USCurrencyFormat.format(item.cost)})
      //     </label>
      //   </div>
      //   );
      //   /* ---------- END: Generate HTML | <input> and <label> | updates summary IRT ---------- */
      // });
      // /* ---------- END: stringify item > slugify string > assigns HTML key value after mapping the call of <FEATURES /> {}'s prototype props ---------- */
/* ---------- END: <Options /> ---------- */

      /* ---------- CONTINUED FROM ABOVE: continued[features] | <h3/> = features | map(FEATURES[i]) | creates selected {} | import <FEATURES /> from './index.js' ---------- */
      /* ---------- BEGIN: Generate HTML of form's <Features />  ---------- */
      // return (
      //   <fieldset className="feature" key={featureHash}>
      //     <legend className="feature__name">
      //       <h3>{feature}</h3>
      //     </legend>
      //     {options}
      //   </fieldset>
      // );
      /* ---------- End: Generate HTML of form's <Feature />  ---------- */
      //}); 
    /* ---------- End: <h3/> <FEATURES /> | import <FEATURES {} /> from './index.js' ---------- */

    /* ---------- BEGIN: summary map for each selected feature ---------- */
    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];
    //   /* ---------- BEGIN: Generate HTML | section > selected > {summary}  ---------- */
    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    //   /* ---------- END: Generate HTML | section > selected > {summary}  ---------- */
    // });
    /* ---------- END: summary map for each selected feature ---------- */

/* ---------- BEGIN: <MainSummary /> && Calc total  ---------- */
    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );
    /* ---------- END: Calc total ---------- */

    /* ---------- BEGIN: generate HTML ---------- */
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form  features={FEATURES} selected={this.state.selected} updateFeature={this.updateFeature} />
          <MainSummary features={FEATURES} selected={this.state.selected} />
{/* ---------- BEGIN: <MainForm /> ---------- */
          // <form className="main__form">
          //   <h2>Customize your laptop</h2>
          //   {features}
          // </form>
/* ---------- END: <MainForm /> ---------- */}
{/* ---------- <MainSummary /> return ---------- */
          // <section className="main__summary">
          //  <h2>Your cart</h2>
          //  {summary}
          //  <div className="summary__total">
          //    <div className="summary__total__label">Total</div>
          //    <div className="summary__total__value">
          //      {USCurrencyFormat.format(total)}
          //    </div>
          //  </div>
          // </section> 
/* ---------- END <MainSummary /> ---------- */}
        </main>
      </div>
    );
    /* ---------- END: generate HTML ---------- */
  }
  /* ---------- END: <h3/> = features | map(FEATURES[i]) | creates selected {} | import <FEATURES /> from './index.js' ---------- */
}
/* ---------- END: App component ---------- */

export default App;