import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Spidy from './spidy.png'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  constructor() {
    super()
    this.state = {}
  }
  static propTypes = {
    text: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string

  };

  handleClick = () => {

  }

  render() {
    const { text, front, back } = this.props
    return (
      <div className={styles['flip-container']} onClick={this.handleClick} ontouchstart="this.classList.toggle('hover');">
        <div className={styles.flipper}>
          <div className={styles.front}>
            {front}
          </div>
          <div className={styles.back}>
            {back}
          </div>
        </div>
      </div>
    )
    // <div className={styles.test}>Example Component: {text}</div>;
  }
}
