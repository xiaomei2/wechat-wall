export const tabbars: Array<NavItem> = [
  {
    "icon":"icon-home",
    "pagePath": "/pages/home/home",
    "text": "home"
  },
  {
    "icon": "icon-shouye",
    "pagePath": "/pages/index/index",
    "text": "首页"
  },
  {
    "icon": "icon-yingyong",
    "pagePath": "/pages/categorie/index",
    "text": "分类"
  },
  {
    "icon": "icon-wode",
    "pagePath": "/pages/my/index",
    "text": "我的"
  }
]

export const changeTab = function (this: WechatMiniprogram.Page.Instance<{}, {}>) {
  const path = '/' + this.route
  const index = tabbars.findIndex(item => item.pagePath === path)
  return index
}