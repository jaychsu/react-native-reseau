import React, { Component } from 'react'
import { ListView } from 'react-native'
import Group from './Group'
import Item from './Item'
import {
  groupIdPrefix,
  getItemsInGroup,
} from '../shared/util'

export default class Grid extends Component {
  constructor(props) {
    super(props)

    const rows = props.store.pages
    const dsHandler = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      rows,
      dsHandler,
      ds: dsHandler.cloneWithRows(rows),
    }
  }

  renderRow = (rowRef, sectionID, rowID) => {
    const isGroup = (rowRef && rowRef[0] === groupIdPrefix)
    const rowInfo = (isGroup)
      ? this.props.store.groups[rowRef]
      : this.props.store.items[rowRef]

    return (isGroup)
      ? (
          <Group
            sectionID={sectionID}
            rowID={rowID}
            groupInfo={rowInfo}
            itemInfos={getItemsInGroup(rowRef, this.props.store)}
            onPress={() => {}}
          />
        )
      : (
          <Item
            sectionID={sectionID}
            rowID={rowID}
            itemInfo={rowInfo}
            onPress={() => {}}
          >
            {this.props.renderRow(rowInfo.$data, sectionID, rowID)}
          </Item>
        )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={this.renderRow}
        pageSize={this.props.pageSize}
        contentContainerStyle={{
          ...this.props.contentContainerStyle,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      />
    )
  }
}
