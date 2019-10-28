import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Authen (record) {
  this.userInfo = pathOr([], ['userInfo'], record)
}

Authen.prototype = {
  setUserInfo: function (value) {
    debugger
    return assocPath(['userInfo'], value, this)
  }
}

export default construct(Authen)