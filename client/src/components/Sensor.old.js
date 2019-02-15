import React, { Component } from 'react';

class App extends Component {
  static propTypes = {
    // num: React.PropTypes.number.isRequired,
    // action: React.PropTypes.func,
    //
    //
    //
    //
    //
    //
    //
  };

  static defaultProps = {
    // set defaults...
  };

  constructor (props) {
    super(props);
    this.state = {
      location: 'woah dude'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(latitude, longitude) {
    this.setState({ location: 'hm' });
  };

  render() {
    return (
      <div className='report'>
      <div className='location'>
        <span onClick={() => this.handleClick(this.props.latitude, this.props.longitude)} className='point'>&#10005;</span>
        junk
      </div>
      <div className='rainfall'>
        {'junk' || '0.0'}<span className='units'> in</span>
      </div>
      <ul className='intervals wide'>
      </ul>
    </div>
    );
  }
}

export default App;