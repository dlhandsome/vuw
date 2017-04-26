/**
 * Created by sail on 2017/4/23.
 */
export default {
  /**
   * Compatible types
   * @param defaultOptions single prop option
   * @param v   original value
   * @returns {*}
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
