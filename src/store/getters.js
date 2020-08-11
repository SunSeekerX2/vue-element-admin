/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-13 17:34:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-07-18 11:46:30
 */

const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
}
export default getters
