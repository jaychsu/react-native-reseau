import React, { Component } from 'react'
import { ListView } from 'react-native'
import Item from './Item'

export default class Grid extends Component {
  constructor(props) {
    super(props)

    const dsHandler = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      ds: dsHandler.cloneWithRows(this.props.data)
    }
  }

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
        pageSize={this.props.pageSize}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',

          ...this.props.contentContainerStyle,
        }}
      />
    )
  }
}
