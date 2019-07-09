import React from 'react';

export default class WelcomeMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return <div> 
      <img src="../../static/images/logo.png" alt="app logo" />
    </div>
  }
}