// Diwali festive mode: fireworks, embers, hanging lights and a homepage greeting.
// It switches itself off after `endsOn`. Set active: false to turn it off sooner.
export const festive = {
  active: true,
  endsOn: '2026-11-16', // first day it is hidden (Diwali is 8 Nov 2026)
  greeting: 'Shubh Deepavali',
  message:
    'Wishing you and your family a Diwali full of light, joy and prosperity. May your store shine brighter than ever this festive season.',
}

export function festiveOn() {
  if (!festive.active) return false
  return new Date() < new Date(`${festive.endsOn}T00:00:00`)
}
