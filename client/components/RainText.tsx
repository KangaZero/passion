import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function RainText({ text }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const words = text.split(' ')

  return (
    <div>
      {words.map((word, index) => {
        const animation = useSpring({
          from: { transform: 'translate3d(0,-30px,0)' },
          to: { transform: 'translate3d(0,0,0)' },
          delay: index * 100,
          config: { mass: 1, tension: 170, friction: 26 },
          immediate: !isAnimating
        })

        return (
          <animated.span style={animation}>
            {word}
          </animated.span>
        )
      })}
    </div>
  )
}

export default RainText
