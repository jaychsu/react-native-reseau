import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import { transformData } from '../shared/util'
import Item from './Item'

export default class Grid extends Component {
  constructor(props) {
    super(props)

    const dsHandler = new ListView.DataSource({
      getSectionHeaderData: (dataBlob, sectionID) => dataBlob[sectionID],
      sectionHeaderHasChanged: (prev, next) => prev !== next,

      getRowData: (dataBlob, sectionID, rowID) => dataBlob[`${sectionID}-${rowID}`],
      rowHasChanged: (prev, next) => prev !== next,
    })
    const data = transformData(this.props.data.slice())
    this.state = {
      data,
      dsHandler,
      ds: dsHandler.cloneWithRowsAndSections(...data),
    }
  }

  renderSectionHeader = (sectionData, sectionID) => (
    <View
      style={{
        width: 64,
        height: 90,
        marginBottom: 6,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Text>{sectionData}</Text>
    </View>
  )

  renderRow = (rowData, sectionID, rowID) => (
    <Item
      sectionID={sectionID}
      rowID={rowID}
      rowData={rowData}
    >
      {this.props.renderRow(rowData, sectionID, rowID)}
    </Item>
  )

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
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
