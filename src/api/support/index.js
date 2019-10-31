import constant from '../../utils/contanst'

export default {
  fetchSupportContent: async function () {
    debugger
    try {
      let response = await fetch(`${constant.serverName}SupportContent.json`);
      debugger
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
  }
}}