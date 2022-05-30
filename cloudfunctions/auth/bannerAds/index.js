const cloud = require('wx-server-sdk')
const { genderSucData } = require('../utils/format')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  const {OPENID: openid} = cloud.getWXContext()

  try {
    const { data: res } = await db.collection('bannerAds').get()
    console.log(res);
    return genderSucData({ res })
  } catch (err) {
    return {
      code: 1000,
      message: 'Interface request failed'
    }
  }
}