const mockImgSrc = {
  http: [
    'https://cdn.sketchbook.com/assets/home/distort_transform-2d19945d3fad0143983904c9c990e35f.jpg',
    'https://cdn.sketchbook.com/assets/home/flipbook_animation-35934b3cf75a4406e816dc297ec0d1e2.jpg',
    'https://cdn.sketchbook.com/assets/home/perspective_guides-2cac1ddd833a315a2a091f20388766a1.jpg',
    'https://cdn.sketchbook.com/assets/home/synthetic_blending_brush-aecd125673cdd50f7f9cc1f8644c4813.jpg',
    'https://cdn.sketchbook.com/assets/home/enhanced_selection-6943badd7810cd4cb95d4087c49ae903.jpg',
    'https://cdn.sketchbook.com/assets/home/dynamic_gradient-f97645c33f8d07e0ef50556c179687a2.jpg',
    'https://cdn.sketchbook.com/assets/home/canvas_size-76f2a4303f6c6a734e00d76ec94da1d2.jpg',
  ],
  local: [
    require('./distort_transform.jpg'),
    require('./flipbook_animation.jpg'),
    require('./perspective_guides.jpg'),
  ],
}

const mockGroupName = [
  'Group A',
  'Group B',
  'Group C',
]

const mockTitle = [
  'Facebook',
  'SketchBook',
  'Google',
  'Autodesk',
  'Amazon',
  'LinkedIn',
]

function pickRandomItemFromArray(arr, isEmptyAllowed = false) {
  const length = isEmptyAllowed
    ? arr.length + 1
    : arr.length
  const index = getRandomNumber(length)
  return arr[index]
}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length)
}

export default function getMockData(dataLength) {
  const imgSrc = mockImgSrc.http.concat(mockImgSrc.local)
  let result = []
  for (let i = 0; i < dataLength; i++) {
    result.push({
      g: pickRandomItemFromArray(mockGroupName, true),
      o: getRandomNumber(100),
      p: getRandomNumber(5),
      s: pickRandomItemFromArray(imgSrc),
      t: pickRandomItemFromArray(mockTitle),
    })
  }
  return result
}
