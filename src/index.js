import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Spidy from './spidy.png'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  constructor() {
    super()
    this.state = {
      flip: false
    }
  }
  static propTypes = {
    text: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string,
    action: PropTypes.string,
    direction: PropTypes.string
  };

  handleClick = () => {
    if (this.props.action === 'click') {
      this.setState(() => ({
        flip: !this.state.flip
      }))
    }
  }

  handleMouseHover = (e) => {
    // console.log(e.type, 'enter')
    if (this.props.action === 'hover' && e.type === 'mouseenter') {
      this.setState(() => ({
        flip: !this.state.flip
      }))
    } else if (this.props.action === 'hover' && e.type === 'mouseleave') {
      this.setState(() => ({
        flip: !this.state.flip
      }))
    }
  }

  render() {
    const { text, front, back, direction } = this.props
    const {flip} = this.state
    // console.log(this.props)
    return (
      // onTouchStart={this.classList.toggle('hover')}
      <div className={styles['flip-container']} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this.handleClick} >
        <div style={{
          transform: flip && direction === 'horizontal' ? 'rotateY(180deg)' : flip && direction === 'vertical' ? 'rotateX(-180deg)' : null}} className={styles.flipper}>
          <div style={{transform: direction === 'horizontal' ? 'rotateY(0deg)' : 'rotateX(0deg)'}}
            className={styles.front}>
            {front}
          </div>
          <div style={{transform: direction === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)'}}className={styles.back}>
            {back}
          </div>
        </div>
      </div>
    )
    // <div className={styles.test}>Example Component: {text}</div>;
  }
}
