import React from 'react';
import Main from '../components/Dashboard_Main/Main';
import Nav from '../components/Dashboard_Nav/Nav';
import Wrapper from '../utils/hoc/Wrapper';
import wrapperFunc from '../utils/hoc/wrapperFunc';
import styles from './App.css';
import smallImage from '../assets/small.png';
import midImage from '../assets/mid.png';
import Gear from '../assets/gear.svg';

class Dashboard extends React.Component {
  state = {
    icons: [
      { id: '1', menu: 'item1', activated: true },
      { id: '2', menu: 'item2', activated: false },
      { id: '3', menu: 'item3', activated: false },
      { id: '4', menu: 'item4', activated: false }
    ],
    activated: 0,
    largeMetrics: {
      metric: 'Retention Components Over Time',
      data: []
    },
    midMetrics: [
      { metric: 'Net Revenue Retention', value: 101.63, amount: 363, prev: 99.85 },
      { metric: 'Net MRR', value: 2462, prev: 2215 },
      { metric: 'Account Retention', value: 98.8, prev: 97.68, newSub: 251, canceled: 67 }
    ],
    smallMetrics: [
      { metric: 'Cancel', value: 1.2, prev: 1.4 },
      { metric: 'Contraction', value: 0.3, prev: 0.2 },
      { metric: 'Expansion', value: 2.1, prev: 1.2 },
    ],
    imgUrls: [
      { url: smallImage },
      { url: midImage }
    ]
  }

  switchedToHandler = (iconIndex) => {
    const icons = [...this.state.icons];
    const prev = this.state.activated;
    icons[iconIndex].activated = true;
    icons[prev].activated = false;
    this.setState((prevState) => {
      return {
        icons: prevState.icons,
        activated: iconIndex
      };
    });
  }

  render() {
    return (
      <Wrapper>
        <Nav icons={this.state.icons} clicked={this.switchedToHandler} />
        <Main
          smallMetrics={this.state.smallMetrics}
          midMetrics={this.state.midMetrics}
          largeMetrics={this.state.largeMetrics}
          imgUrls={this.state.imgUrls}
          gear={Gear} />
      </Wrapper>
    );
  }
}

export default wrapperFunc(Dashboard, styles.Dashboard);
