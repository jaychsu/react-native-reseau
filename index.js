import React from 'react'
import Grid from './component/Grid'
import { dataToStore } from './shared/util'

export {
  formatUriSource,
} from './shared/util'

export default function (props) {
  return <Grid {...filterProps(props)} />
}

function filterProps(props) {
  const store = dataToStore(props.data)
  return {
    ...props,
    data: null,
    store,
  }
}
