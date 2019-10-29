import constant from '../../utils/contanst'

export default {
  fetchPromotionalCode: async function () {
    debugger
    try {
      let response = await fetch(`${constant.serverName}PromotionalCode.json`);
      debugger
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
  }
},
fetchContentProfile: async function () {
  debugger
  try {
    let response = await fetch(`${constant.serverName}ContentProfile.json`);
    debugger
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
}
},
}
