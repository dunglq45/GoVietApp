import constant from '../../utils/contanst'
const superagent = require('superagent');
export default {
  fetchFoodMenu: async function () {
    debugger
    try {
      let response = await fetch(`${constant.serverName}foodmenu.json`);
      debugger
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    //   await superagent
    //   .get(`${constant.serverName}foodmenu.json`)
    //   .query() // query string
    //   .end((err, res) => {
    //     // Do something
    //     debugger
    //     console.log('type of res', typeof res)
    //     console.log('type of res body', typeof res.body)
    //     return res.body;
    //   });
    
    // }
  }
},
  fetchImage: async function () {
    try {
      let response = await fetch(`${constant.serverName}images.json`);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  fetchImage2: async function () {
    try {
      let response = await fetch(`${constant.serverName}images2.json`);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
}