import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Profile (record) {
  this.PromotionalCode = pathOr([], ['PromotionalCode'], record)
  this.ContentProfile = pathOr([], ['ContentProfile'], record)
}

Profile.prototype = {
  setPromotionalCode: function (value) {
    return assocPath(['PromotionalCode'], value, this)
  },
  setContentProfile: function (value) {
    return assocPath(['ContentProfile'], value, this)
  }
}

export default construct(Profile)