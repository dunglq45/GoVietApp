import { pathOr, construct, assocPath, isNil, isEmpty, or } from 'ramda'

function Main (record) {
  this.foodMenu = pathOr([], ['foodMenu'], record)
  this.image = pathOr([], ['image'], record)
  this.image2 = pathOr([], ['image2'], record)
}

Main.prototype = {
  setFoodMenu: function (value) {
    return assocPath(['foodMenu'], value, this)
  },
  setImage: function (value) {
    return assocPath(['image'], value, this)
  },
  setImage2: function (value) {
    return assocPath(['image2'], value, this)
  },
}

export default construct(Main)