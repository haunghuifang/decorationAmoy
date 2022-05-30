import create from '../../store/create';
import store from '../../store/store';
import { goWebUrl } from '../../utils/index';

create({
  data: {
    banner_ads: {
      data: [],
      autoplay: true,
      indicatordots: false,
      interval: 3000,
      duration: 500,
      current: 0,
      isLog: false,
      index: 0, // 当前的索引
      active: true
    }
  },
  onLoad() {},
  onShow() {
    if (!store.storeView.login) {
      this.goLogin();
    }

    this.getAds();
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  onSlideChangeBanner(event) {
    const postId = event.detail.current;
    this.setData({
      'banner_ads.index': postId
    });
  },
  toAds(e) {
    const { type, id, index, url } = e.currentTarget.dataset;
    goWebUrl(url);
  },
  getAds() {
    wx.showLoading();
    wx.cloud.callFunction({
      name: 'auth',
      data: {
        type: 'bannerAds'
      },
      success: ({ result }) => {
        wx.hideLoading();
        const { code, data } = result;
        if (code === 0) {
          this.setData({
            'banner_ads.data': data.res
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: 'Interface request failed',
          icon: 'none'
        });
      }
    });
  }
});
