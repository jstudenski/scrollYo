import React from 'react';
import NavItem from '../nav-link/NavLink';
import PropTypes from 'prop-types';
import './navlist.css';
class NavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      midpoint:5,
      scrollingLock: false,
      windowHeight: window.innerHeight,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // update window height when resized
  handleResize() {
    this.setState({ windowHeight: window.innerHeight });
  }

  // lock nav links to the window after the user scrolls past the first section
  handleScroll() {
    this.setState({
      scrollingLock: (window.scrollY > this.state.windowHeight) !== false,
    });
  }

  getLinkColor = (midline) => {
    if (midline && this.props.pages) {
      let calc = Math.floor(((midline - this.state.windowHeight) /  this.state.windowHeight ));
      // return the link color
      return this.props.pages[calc].linkColor
    }
  };

  render() {
    console.log(this.props);
    return (
      <nav style={{ position: this.state.scrollingLock ? 'fixed' : 'relative' }}>
        {this.props.children}
        <div
          id="navbar"
        >
          <ul>
            {this.props.pages.map(page => (
              <NavItem
                windowHeight={this.state.windowHeight}
                {...page}
                getLinkColor={this.getLinkColor}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavList;
