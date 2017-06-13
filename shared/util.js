export function isFunc(func) {
  return typeof func === 'function'
}

export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
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
  if (!isArray(data)) return data
  return data.sort((a, b) => {
    const isAFinite = Number.isFinite(+a.o)
    const isBFinite = Number.isFinite(+b.o)

    if ( !isAFinite
      && !isBFinite) return 0

    if ( !isAFinite
      || +a.o < +b.o) {
      return 1
    }

    if ( !isBFinite
      || +a.o > +b.o) {
      return -1
    }

    return 0
  })
}

export function dataToStore(data) {}

export function storeToData(store) {}
