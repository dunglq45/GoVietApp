import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Support (record) {
  this.SupportContent = pathOr([], ['SupportContent'], record)
}

Support.prototype = {
  setSupportContent: function (value) {
    return assocPath(['SupportContent'], value, this)
  }
}
export default construct(Support)