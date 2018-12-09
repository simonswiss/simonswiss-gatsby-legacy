import striptags from 'striptags'

export function stripHtml(html) {
  return striptags(html)
}
