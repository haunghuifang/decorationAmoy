// 跳转链接
const goWebUrl = (url) => {
  const tabBarUrl = ['/pages/index/index', '/pages/reward/reward', '/pages/mine/mine'];
  if (url.split('owxapp://').length > 1) {
    const appId = url.split('owxapp://')[1].split('appid=')[1].split('&')[0];
    const path = url.split('owxapp://')[1].replace('appid=' + appId + '&', '');
    // 跳到其他小程序
    wx.navigateToMiniProgram({
      appId,
      path,
      envVersion: 'trial',
      success() {
        // 打开成功
      }
    });
  } else if (url.split('wxapp:/').length > 1) {
    if (tabBarUrl.includes(url.split('wxapp:/')[1].split('?')[0])) {
      wx.switchTab({
        url: url.split('wxapp:/')[1]
      });
      return;
    }
    wx.navigateTo({
      url: url.split('wxapp:/')[1]
    });
  } else {
    wx.navigateTo({
      url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
    });
  }
};

module.exports = {
  goWebUrl
}