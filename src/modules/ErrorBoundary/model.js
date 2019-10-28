import { pathOr, construct, assocPath, mergeLeft } from 'ramda'

function Model (record) {
  this.expired = pathOr(false, ['expired'], record)
  this.message = pathOr(null, ['message'], record)
  this.internalServerError = pathOr(false, ['internalServerError'], record)
  this.badRequest = pathOr(false, ['badRequest'], record)
  this.notFound = pathOr(false, ['notFound'], record)
  this.anOtherError = pathOr(false, ['anOtherError'], record)
}

Model.prototype = {
  setExpired: function (data) {
    return mergeLeft(data, this)
  },
  setMessage: function (value) {
    return assocPath(['message'], value, this)
  },
  setOtherError: function (data) {
    return mergeLeft(data, this)
  },
  setInternalServerError: function (data) {
    return mergeLeft(data, this)
  },
  setBadRequest: function (data) {
    return mergeLeft(data, this)
  },
  setIsNotFound: function (data) {
    return mergeLeft(data, this)
  }
}

export default construct(Model)
