const BadRequestError = require('../errors/badRequestError')

const checkTextAndImageUploads = ({
  order,
  textDescription,
  textHeader,
  imageContent,
  imageDescription
}) => {
  if (!order) return

  const richtextCount = Array.isArray(textDescription) ? textDescription.length : 1
  const photoCount = imageContent?.length || 0

  if (photoCount !== order.filter(i => i === 'image').length) {
    throw new BadRequestError('Image details don\'t match the ordering details')
  }

  if (richtextCount !== order.filter(i => i === 'text').length) {
    throw new BadRequestError('Text details don\'t match the ordering details')
  }

  if (richtextCount > 1 && textDescription?.length !== textHeader?.length) {
    throw new BadRequestError('Text header and description items do not match')
  }

  if (photoCount > 1 && imageDescription?.length !== photoCount) {
    throw new BadRequestError('Image content and description items do not match')
  }

  const orderCount = Array.isArray(order) ? order.length : 1

  // validation if texts and photo tallies the order count
  if (photoCount + richtextCount !== orderCount) {
    throw new BadRequestError('Combined image and text contents don\'t match the ordering count')
  }
}

module.exports = {
  checkTextAndImageUploads
}