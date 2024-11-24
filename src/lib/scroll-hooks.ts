/**
 * Detects scroll to top of a container
 * @param containerId The scrollable container id
 * @returns
 */

import { useState } from 'react'

export const useIsScrollToContainerTop = (containerId: string) => {
  const scrollableElement = document.getElementById(containerId)
  if (scrollableElement)
    scrollableElement.addEventListener('scroll', () => {
      if (scrollableElement.scrollTop === 0) {
        console.log('Scrolled to the top of the container!')
        return true
      } else return false
    })
  else return false
}

/**
 * Detects scroll to top of document
 */
export const useIsScrollToDocTop = () => {
  const [isTop, setIsTop] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY <10) {
      //   console.log('Scrolled to the top of the document!')
      setIsTop(true)
    } else setIsTop(false)
  })
  return isTop
}
