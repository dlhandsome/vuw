export default (pre, source) => {
  const prefix = []
  switch (toString.call(source)) {
    case '[object Array]':
      source.forEach(key => prefix.push(`${pre}${key}`))
      break
  }
  return prefix
}
