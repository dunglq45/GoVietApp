import constant from '../../utils/contanst'

export default {
  fetchOrderImage: async function () {
    debugger
    try {
      let response = await fetch(`${constant.serverName}OrderImage.json`);
      debugger
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
  }
}}