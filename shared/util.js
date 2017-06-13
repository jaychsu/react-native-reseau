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

export const itemIdPrefix = 'i'
export const groupIdPrefix = 'g'

export function getItemsInGroup(groupId, store = {}) {
  const groupInfo = store.groups[groupId]
  let result = {}
  if (!groupInfo) return result

  groupInfo.$children.map((itemId) => {
    if (!store.items[itemId]) return
    result[itemId] = store.items[itemId]
  })

  return result
}

export function dataToStore(data) {
  if (!isArray(data)) return data

  let store = {
    items: {},
    groups: {},
    pages: [],
  }

  sortData(data).map((item, index) => {
    const itemId = `${itemIdPrefix}${index}`
    const groupId = item.g ? `${groupIdPrefix}${encodeURI(item.g)}` : null

    store.items[itemId] = {
      $data: item,
    }

    if (!groupId) {
      store.pages.push(itemId)
      return
    }

    if (store.groups[groupId]) {
      store.groups[groupId].$children.push(itemId)
    } else {
      store.groups[groupId] = {
        $name: 'New Group',
        $children: [itemId],
      }
      store.pages.push(groupId)
    }
  })

  return store
}

export function storeToData(store) {
  let data = []
  return data
}
