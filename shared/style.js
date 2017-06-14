import { StyleSheet } from 'react-native'

const Style = {
  gridLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemLayout: {
    width: 64,
    height: 90,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  itemText: {
    paddingTop: 4,
  },
  itemThumb: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  itemLayoutS: {
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  itemThumbS: {
    width: 15,
    height: 15,
    borderRadius: 2,
  },
}

export default StyleSheet.create(Style)
