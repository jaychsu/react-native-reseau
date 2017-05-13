export function formatUriSource(uri) {
  // To load images from the HTTP resource, see the link below
  // http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/
  if (typeof uri === 'string' && uri.match(/^(http|data:image)/)) return { uri }
  return uri
}
