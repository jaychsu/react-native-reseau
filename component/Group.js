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
  groupInfo,
  itemInfos,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={Style.itemLayout}
      >
        <View
          style={[
            Style.gridLayout,
            Style.itemThumb,
            {
              backgroundColor: '#dedede',
              padding: 3,
            },
          ]}
        >
          {groupInfo.$children.map((itemId) => {
            const itemInfo = itemInfos[itemId]
            return (
              <Image
                key={itemId}
                source={formatUriSource(itemInfo.$data.src)}
                style={[
                  Style.itemLayoutS,
                  Style.itemThumbS,
                ]}
              />
            )
          })}
        </View>
        <Text
          style={Style.itemText}
          ellipsizeMode='tail'
          numberOfLines={1}
        >
          {rowID}-{groupInfo.$name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
