import i18n from '@/lang/lang'

var account = (rule, value, callback) => {
  console.log('rule', rule);
  let regFormat = /^[0-9A-Za-z]{3,20}$/;
  // let regFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/; //英數
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('accountYfError')));
  } else {
    callback();
  }
};
// 密碼長度要打英文加數字
let thePw = ""; //放空值
var pw = (rule, value, callback) => {
  console.log('VVV', value);
  let regFormat = /^[0-9A-Za-z]{3,20}$/;

  // let regFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/; //英數
  if (!value) {
    return callback(new Error(i18n.t('noEmpty')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('accountYfError')));
  } else {
    callback();
    thePw = value; //合法把thePw取代成空值
  }
};
// 確認密碼
var checkPw = (rule, value, callback) => {
  if (value === '') {
    callback(new Error(i18n.t('plzPWcheck')));
  } else if (value !== thePw) {
    callback(new Error(i18n.t('doublePw')));
  } else {
    callback();
    thePw = value;
  }
};
var nanme = (rule, value, callback) => {
  // let regFormat = /^[\u4E00-\u9FFF]+$/; //英數
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('noEmpty')));
  } else {
    callback();
  }
  // if (!(regFormat.test(value))) {
  //   callback(new Error(i18n.t('ChinesePlz')));
  // } else {
  //   callback();
  // }
};
var mail = (rule, value, callback) => {
  let regFormat = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  // if (!value) {
  //   console.log('value1', value);
  //   return callback(new Error('尚未輸入'));
  // }
  if (value == '') {
    callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('emailPlz')));
  } else {
    callback();
  }
};
var weixin = (rule, value, callback) => {
  let regFormat = /^[0-9A-Za-z._]{3,20}$/;
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('EngOrNum')));
  } else {
    callback();
  }
};
var proxyPhone = (rule, value, callback) => {
  let regFormat = /^[0-9]+$/;
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('numPlz')));
  } else {
    callback();
  }
};
var amt = (rule, value, callback) => {
  let regFormat = /^[0-9]+$/;
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('numPlz')));
  } else {
    callback();
  }
};
var verifycode = (rule, value, callback) => {
  let regFormat = /^[0-9A-Za-z]+$/;
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('numCorrectPlz')));
  } else {
    callback();
  }
};
var bankNumber = (rule, value, callback) => {
  console.log('BankNumber:', value);

  let regFormat = /^[0-9]{3,30}$/;
  console.log('XXBankVALUE', value);

  if (!value) {
    console.log('bankNumberValue:', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('bankCorrectPlz')));
  } else {
    callback();
  }
};
var bank = (rule, value, callback) => {
  console.log('Bank:', value);

  let regFormat = /.{1,}$/;
  if (!value) {
    console.log('bankNumberValue:', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('bankPlz')));
  } else {
    callback();
  }
};
var bankBranch = (rule, value, callback) => {
  console.log('BankBranch:', value);

  let regFormat = /.{1,}$/;
  if (!value) {
    console.log('bankBranchValue:', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('branchPlz')));
  } else {
    callback();
  }
};
var bank_code = (rule, value, callback) => {
  let regFormat = /^[0-9]+$/;
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('input')));
  }
  if (!(regFormat.test(value))) {
    callback(new Error(i18n.t('numPlz')));
  } else {
    callback();
  }
};
var realname = (rule, value, callback) => {
  // let regFormat = /^[\u4E00-\u9FFF]+$/; //英數
  if (!value) {
    console.log('value1', value);
    return callback(new Error(i18n.t('noEmpty')));
  } else {
    callback();
  }
  // if (!(regFormat.test(value))) {
  //   callback(new Error(i18n.t('ChinesePlz')));
  // } else {
  //   callback();
  // }
};

var bifubaoBank = (rule, value, callback) => {
  if (!value) {
    console.log('bifubaoBank:', value);
    return callback(new Error(i18n.t('noEmpty')));
  } else {
    callback();
  }

};
export default {
  realname: [{
    validator: realname,
    required: true,
  }],
  bank_code: [{
    validator: bank_code,
    required: true,
  }],
  securityPassword: [{
    validator: pw,
    required: true,
  }],
  bankBranch: [{
    validator: bankBranch,
    required: true,
  }],
  bankNumber: [{
    validator: bankNumber,
    required: true,
  }],
  bank: [{
    validator: bank,
  }],
  bankName: [{
    validator: bank,
    required: true,
  }],
  account: [{
    validator: account,
    required: true,
  }],
  member: [{
    validator: account,
    required: true,
  }],
  password: [{
    validator: pw,
    required: true,
  }],
  RePassword: [{
    validator: checkPw,
    required: true,
  }],
  repeat: [{
    validator: checkPw,
    required: true,
  }],
  bankAccName: [{
    validator: nanme,
    required: true,
  }],
  realName: [{
    validator: nanme,
    required: true,
  }],
  mail: [{
    validator: mail,
    required: true,
  }],
  proxyPhone: [{
    validator: proxyPhone,
    required: true,
  }],
  amt: [{
    validator: amt,
    required: true,
  }],
  lineId: [{
    validator: weixin,
  }],
  weChatId: [{
    validator: weixin,
    required: true,
  }],
  QQNumber: [{
    validator: weixin,
    required: true,
  }],
  verifyCode: [{
    validator: verifycode,
    required: true,
  }],
  bifubaoBank: [
    {
      validator: bifubaoBank,
      required: true,
      trigger: 'blur'
    }

    // { required: true, message: i18n.t('input'), trigger: 'blur' }
    //   {
    //   validator: bifubaoBank,
    //   required: true,
    //   type: 'String',
    //   // message: i18n.t('noEmpty'),
    //   trigger: 'change'
    // }
  ],

}
