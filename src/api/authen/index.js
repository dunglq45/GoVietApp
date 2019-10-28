import constant from '../../utils/contanst'

export default {
  fetchUserInfo: async function () {
    debugger
    try {
      let response = await fetch(`${constant.serverName}userInfo.json`);
      debugger
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
  }
}}