import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 各語言的翻譯包↓
import cn from '@/lang/cn.js'
import tw from '@/lang/tw.js'
import en from '@/lang/cn.js'
import tai from '@/lang/tai.js'
import viet from '@/lang/viet.js'

Vue.use(VueI18n)


function change(e) {
  switch (e) {
    case 'viet':
      return 'viet';
    case 'cn':
      return 'cn';
    case 'en':
      return 'en';
    case 'tai':
      return 'tai';
    case 'tw':
      return 'tw';
    default:
        localStorage.setItem('lang','tw')
      return 'tw';
  }
}
const locale = change(localStorage.getItem('lang'));
const messages = {
  en: en,
  tw: tw,
  cn: cn,
  tai: tai,
  viet: viet
}

const i18n = new VueI18n({
  /** 默认值 */
  locale,
  messages
})

export default i18n
