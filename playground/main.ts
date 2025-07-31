// Import all functions from src
import { slug, colorAlpha, dfmt, placePic, shuffle } from '../src/index'
import * as ls from '../src/ls-mate'

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Slug conversion
  const slugResult = slug('Hello World!')
  document.getElementById('slug-result')!.textContent = `slug('Hello World!') → ${slugResult}`
  
  const slugResult2 = slug('  你好,  世界 ')
  document.getElementById('slug-result')!.textContent += `\nslug('  你好,  世界 ') → ${slugResult2}`

  // Color conversion
  const colorResult = colorAlpha('#ff0000', 0.5)
  document.getElementById('color-result')!.textContent = `colorAlpha('#ff0000', 0.5) → ${colorResult}`
  document.getElementById('color-box')!.style.backgroundColor = colorResult

  // Date formatting
  const dateResult = dfmt(new Date(), 'yyyy-MM-dd hh:mm')
  document.getElementById('date-result')!.textContent = `dfmt(new Date(), 'yyyy-MM-dd hh:mm') → ${dateResult}`

  // Placeholder images
  const imageUrl = placePic()
  document.getElementById('image-url')!.textContent = `placePic() → ${imageUrl}`
  const imgElement = document.getElementById('placeholder-image') as HTMLImageElement
  imgElement.src = imageUrl

  const grayscaleUrl = placePic({ width: 300, grayscale: true })
  document.getElementById('grayscale-url')!.textContent = `placePic({ width: 300, grayscale: true }) → ${grayscaleUrl}`
  const grayscaleImgElement = document.getElementById('grayscale-image') as HTMLImageElement
  grayscaleImgElement.src = grayscaleUrl

  // LocalStorage utilities
  ls.set('test-key', 'test-value', 5000)  // Set with 5 second expiration
  document.getElementById('ls-set')!.textContent = `ls.set('test-key', 'test-value', 5000)`

  const getValue = ls.get('test-key', 'default')
  document.getElementById('ls-get')!.textContent = `ls.get('test-key', 'default') → ${getValue}`

  const defaultValue = ls.get('non-existent', 'default')
  document.getElementById('ls-default')!.textContent = `ls.get('non-existent', 'default') → ${defaultValue}`
  
  // Array shuffling
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const shuffledArray = shuffle(originalArray)
  document.getElementById('shuffle-result')!.textContent = `shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) → [${shuffledArray.join(', ')}]`
})
