import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function ({
  sectionID,
  rowID,
  groupInfo,
  itemInfos,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    />
  )
}
