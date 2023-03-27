export const checkImageURL = (url) => {
  if (!url) return false
  else {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
  }
}

export const greeting = () => {
  const today = new Date()
  const hour = today.getHours()
  let message = ''
  if (hour < 12) {
    message = 'Good morning'
  } else if (hour < 18) {
    message = 'Good afternoon'
  } else {
    message = 'Good evening'
  }
  return message
}