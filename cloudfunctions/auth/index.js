const login = require("./login/index");
const bannerAds = require("./bannerAds/index");

exports.main = async (event, context) => {
  switch (event.type) {
    case "login":
      return await login.main(event, context);
    case "bannerAds":
       return await bannerAds.main(event, context)
  }
};
