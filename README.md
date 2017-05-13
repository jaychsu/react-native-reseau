react-native-reseau
======

## Usage

```javascript
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

  // All the props are the same as the `ListView`, except for the `dataSource`.
  // REF: https://facebook.github.io/react-native/docs/listview.html
  ...props
/>
```

### Special props in `data`:

- `o`?: `number` order
- `g`?: `string` group name
- `p`?: `number` page
