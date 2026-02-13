import Lottie from 'lottie-react'
import React from 'react'
import ComingSoonResult from "../animations/coming_soon.json"

function ComingSoon() {
  return (
    <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section>
  )
}

export default ComingSoon