import React from 'react'
import ReactCountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

// react-countup is CommonJS-only; Vite 8 hands back the whole module object
// as the default import, so unwrap `.default` when it is there.
const CountUp =
  (ReactCountUp as unknown as { default?: typeof ReactCountUp }).default ??
  ReactCountUp

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
