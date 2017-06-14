import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import Style from '../shared/style'
import { formatUriSource } from '../shared/util'

export default function ({
  sectionID,
  rowID,
  itemInfo,
  onPress,
}) {
  const rowData = itemInfo.$data
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={Style.itemLayout}
      >
        <Image
          source={formatUriSource(rowData.src)}
          style={Style.itemThumb}
        />
        <Text
          style={Style.itemText}
          ellipsizeMode='tail'
          numberOfLines={1}
        >
          {rowID}-{rowData.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
