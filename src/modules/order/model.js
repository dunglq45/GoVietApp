import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Order (record) {
  this.OrderImage = pathOr([], ['OrderImage'], record)
}

Order.prototype = {
  setOrderImage: function (value) {
    return assocPath(['OrderImage'], value, this)
  }
}

export default construct(Order)