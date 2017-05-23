import React, { Component } from 'react'
import { ListView } from 'react-native'
import { sortData } from '../shared/util'
import Item from './Item'

export default class Grid extends Component {
  constructor(props) {
    super(props)

    const data = sortData(this.props.data.slice())
    const dsHandler = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.o !== r2.o,
    })

    this.state = {
      data,
      dsHandler,
      ds: dsHandler.cloneWithRows(data),
    }
  }

  renderRow = (rowData, sectionID, rowID) => (
    <Item
      sectionID={sectionID}
      rowID={rowID}
      rowData={rowData}
      onPress={() => {
        let newData = this.state.data.slice()
        newData[rowID].o = 0
        newData = sortData(newData)
        this.setState({
          data: newData,
          ds: this.state.dsHandler.cloneWithRows(newData),
        })
      }}
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
