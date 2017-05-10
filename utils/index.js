export function formatSource(uri = '') {
  return uri.match(/^(http|data:image)/)
    ? { uri }
    : uri
}
