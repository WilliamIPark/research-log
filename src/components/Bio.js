import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          A digital scrapbook of research for William Park's final year project.
        </p>
      </div>
    )
  }
}

export default Bio
