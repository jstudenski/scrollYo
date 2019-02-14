import React from 'react';
// import PropTypes from 'prop-types'
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const { getLinkColor } = this.props;
    const { color } = this.state;
    // get the components current size and position
    const DOMRect = this.ref.current.getBoundingClientRect();
    // find the midline
    const midline = DOMRect.top + (DOMRect.height / 2) + window.scrollY;
    // pass the midline to parent function and return link color
    const newColor = getLinkColor(midline);
    // if the color is different, set it in the state
    if (color !== newColor) {
      this.setState({ color: newColor });
    }
  }

  render() {
    // const style = {
    //   color: this.state.color,
    //   borderLeft: this.state.color === this.props.linkColor && '3px solid',
    //   paddingLeft: this.state.color === this.props.linkColor && '10px',
    // };
    // style={style}
    const { id, text } = this.props;
    return (
      <div>
        <li ref={this.ref}>
          <ScrollTo selector={id}>
            {text}
          </ScrollTo>
        </li>
      </div>
    );
  }
}

// NavItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default NavItem;
