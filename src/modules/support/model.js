import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Support (record) {
  this.SupportContent = pathOr([], ['supportContent'], record)
}

Support.prototype = {
  setSupportContent: function (value) {
    return assocPath(['supportContent'], value, this)
  }
}
export default construct(Support)