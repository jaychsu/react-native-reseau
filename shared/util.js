export function isFunc(func) {
  return typeof func === 'function'
}

export function formatUriSource(uri, config = {}) {
  // To load images from the HTTP resource, see the link below
  // http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/
  if (typeof uri === 'string' && uri.match(/^(http|data:image)/)) {
    return {
      ...config,
      uri,
    }
  }
  return uri
}

export function sortData(data) {
  if (!data || typeof data.sort !== 'function') return data
  return data.sort((a, b) => a.o > b.o)
}
