import { Variants, Transition } from 'framer-motion'

// iOS-style spring - smooth, natural, slightly bouncy
export const iosSpring: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.8,
}

export const iosSpringFast: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 35,
}

export const iosSpringGentle: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 28,
  mass: 1.1,
}

// Fade up — iOS style (scale + opacity + y)
export const fadeUpIOS: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { ...iosSpring },
  },
}

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// Card hover
export const cardHoverIOS = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { ...iosSpringFast },
  },
}

// Slide in from side
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { ...iosSpring } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { ...iosSpring } },
}

// Pop in (for badges, chips)
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 500, damping: 24 },
  },
}

// Viewport options reused everywhere
export const viewportOnce = { once: true, margin: '-60px' }
