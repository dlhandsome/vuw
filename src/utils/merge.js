/**
 * Created by sail on 2017/4/23.
 */
export default {
  /**
   * Merge options from element
   * @param  {Element} elem           Dom element
   * @param  {Object} defaultOptions weapp component options
   * @return {Object}                Merged options
   */
  merge (defaultOptions, v) {
    let val

    switch (defaultOptions.type) {
      case Boolean:
        val = !!v
        break
      case String:
        val = v == null ? '' : (typeof v === 'object' ? JSON.stringify(v, null, 2) : String(v))
        break
      case Number:
        let n = Number(v)
        val = isNaN(n) ? 0 : n
    }

    return val
  }
}
