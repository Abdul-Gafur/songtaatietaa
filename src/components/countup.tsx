import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const ScrollRevealCounter: React.FC<{
  endValue: number
  className?: string
}> = ({ endValue, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div ref={ref} className={className}>
      {inView && <CountUp start={0} end={endValue} duration={2} />}
    </div>
  )
}

export default ScrollRevealCounter
