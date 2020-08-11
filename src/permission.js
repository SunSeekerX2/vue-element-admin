/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-13 17:34:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-07-18 11:28:06
 */

import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  next()
})

router.afterEach(() => {
  NProgress.done()
})
