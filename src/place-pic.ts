export interface PlacePicOptions {
  width?: number
  height?: number
  grayscale?: boolean
  blur?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

const BASE = 'https://picsum.photos'


export default function placePic({
  width = 640,
  height = 480,
  grayscale = false,
  blur,
}: PlacePicOptions = {}): string {
  const size = `${width}/${height}`
  const query = [
    grayscale ? 'grayscale' : '',
    blur ? `blur=${blur}` : '',
  ]
    .filter(Boolean)
    .join('&')

  return `${BASE}/${size}${query ? '?' + query : ''}`
}
