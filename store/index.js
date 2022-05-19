import create from "./create";
import { UPDATE_USERINFO } from "../constants/event";
import store from './store';

export default function initStore() {
  // 更新：用户信息
  create.emitter.on(UPDATE_USERINFO, userInfo => {
    store.storeView.userInfo = userInfo;
    store.storeView.login = !!userInfo?.openid;
    console.log(userInfo);
    wx.setStorageSync('userInfo', userInfo);
  })
  // 设置: 
  const userInfo = wx.getStorageSync('userInfo') || {}
  // 触发:
  create.emitter.emit(UPDATE_USERINFO, userInfo);
}