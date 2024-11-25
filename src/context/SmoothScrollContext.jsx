import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScrollContext = createContext({
  lenis: null,
})

export const SmoothScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    setLenis(lenis)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext)
  if (context === undefined) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
  }
  return context
}