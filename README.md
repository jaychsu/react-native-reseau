react-native-reseau
======

**[WIP]** This project is still in progress.

## Usage

```js
import Reseau, {
  formatUriSource,
} from 'react-native-reseau'

const data = [
  { src: require('./assets/Facebook.jpg'), title: 'Facebook', anything: 123 },
  { src: 'http://iosicongallery.com/img/256/instagram-2016.png', title: 'Instagram', anything: 564 },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANS...', title: 'Facebook Messenger', anything: 314 },
]

const renderRow = (rowData, sectionID, rowID) => (
  <View>
    <Image source={formatUriSource(rowData.src)} />
    <Text>
      {rowID}
      {rowData.title}
      {rowData.anything}
    </Text>
  </View>
)

<Reseau
  data={data}
  renderRow={renderRow}
/>
```

### Special props in `data`:

- `o`?: `number` order
- `g`?: `string` group name

## Development

1. Clone the enviroment project: [jaychsu/react-native-env](https://github.com/jaychsu/react-native-env).
2. Update the submodule called `react-native-reseau`.
3. Run command to start, for example: `react-native run-ios`.
