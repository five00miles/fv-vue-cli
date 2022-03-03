import { getWxshareSignature } from '@/api/wxshare'
import shareImg from '@/assets/share.jpg'

/**
 * @param wxAppid 微信的appid
 * @param success 分享成功后的回调
 * @param cancel  分享取消后的回调
 */
export default async function wxShare(wxAppid, success, cancel) {
  const wxId = wxAppid
  let url = location.origin + location.pathname
  let shareContent = {
    link: url,
    image: shareImg + '?v=' + Math.random(),
    title: '分享标题',
    friend: '发送给朋友的分享文案',
    timeline: '发送到给朋友圈的分享文案',
  }

  const { data } = await getWxshareSignature()

  wx.config({
    debug: false,
    appId: wxId,
    timestamp: data.timestamp,
    nonceStr: data.noncestr,
    signature: data.signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
  })
  wx.ready(function () {
    wxShareReady()
  })

  function wxShareReady() {
    wx.onMenuShareTimeline({
      title: shareContent.timeline, // 分享标题
      link: shareContent.link, // 分享链接
      imgUrl: shareContent.image, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        if (success) success()
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        if (cancel) cancel()
      },
    })
    wx.onMenuShareAppMessage({
      title: shareContent.title, // 分享标题
      desc: shareContent.friend, // 分享描述
      link: shareContent.link, // 分享链接
      imgUrl: shareContent.image, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        if (success) success()
      },
      cancel: function () {
        if (cancel) cancel()
      },
    })
  }
}
