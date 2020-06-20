import React from 'react'
import PropTypes from 'prop-types'

// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          {/* <span className="image main"><img src={pic01} alt="" /></span> */}
          <p>
            I make things. Not this website though. This was made with an
            awesome{' '}
            <a href="https://github.com/codebushi/gatsby-starter-dimension-codebushi">
              template
            </a>{' '}
            that works with GatsbyJS and deployed to GitHub pages. Check out my
            work in the work tab.
          </p>
          <p>
            Fun fact: The background image was made in GIMP (blending two
            existing images).
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p>
            I started <a href="https://buzzwordlabs.com">Buzzword Labs</a> with
            my best friend. Our current product is{' '}
            <a href="https://foodfeed.live">FoodFeed</a>, a social platform for
            foodies.
          </p>
          <p>
            I've made some other stuff for fun too. Find that on my{' '}
            <a href="https://github.com/aniravi24">GitHub</a>.
          </p>
          <p>
            Find the work I've done on my{' '}
            <a href="https://www.linkedin.com/in/aniravichandran">LinkedIn</a>.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <p>You saw my intro right? I'm just a guy.</p>
          <p>
            See more of my musings{' '}
            <a href="https://medium.com/@AniRavi">here</a>.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/aniravichandran"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/aniravi24" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/therealAniRavi"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
