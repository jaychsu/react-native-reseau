export function formatUriSource(uri) {
  // To load images from the HTTP resource, see the link below
  // http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/
  if (typeof uri === 'string' && uri.match(/^(http|data:image)/)) return { uri }
  return uri
}

export function sortData(data) {
  if (!data || typeof data.sort !== 'function') return data
  return data.sort((a, b) => a.o > b.o)
}

export function transformData(data) {
  // TODO: Use `rowData.o` to sort row in section
  let i
    , rowData
    , sectionID
    , rowID
    , existingSections = {}
    , existingSectionsLength = 0
    , dataBlob = {}
    , sectionIDs = []
    , rowIDs = []

  for (i = 0; i < data.length; i++) {
    rowData = data[i]

    if (!rowData) continue
    if (!rowData.g) rowData.g = 'oth'

    // To handle group
    if (existingSections[rowData.g] === undefined) {
      existingSections[rowData.g] = sectionID = existingSectionsLength
      sectionIDs.push(sectionID)
      existingSectionsLength += 1
      dataBlob[sectionID] = rowData.g
    }

    // To handle row
    sectionID = existingSections[rowData.g]
    rowID = i
    if (!rowIDs[sectionID]) rowIDs[sectionID] = []
    rowIDs[sectionID].push(rowID)
    dataBlob[`${sectionID}-${rowID}`] = rowData
  }

  // The key's order in results is same as
  // the received params in `cloneWithRowsAndSections`
  return [
    dataBlob,
    sectionIDs,
    rowIDs,
  ]
}
