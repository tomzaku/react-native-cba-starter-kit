import _ from 'lodash'
import R from 'ramda'
import moment from 'moment'

const removeEmptyItem = R.filter((item) => item)
const commaSpacer = R.join(', ')
const joinSpacer = R.join(' ')

export const fmTel = (tel) => {
  let city;
  let country;
  let number;

  if (tel == null) {
    return '_';
  }

  const value = tel.toString().trim().replace(/^\+/, '');
  if (value.match(/[^0-9]/)) {
    return tel;
  }

  country = undefined;
  city = undefined;
  number = undefined;

  switch (value.length) {
    case 9:
      country = 1;
      city = value.slice(0, 2);
      number = value.slice(2);
      break;
    case 10:
      country = 1;
      city = value.slice(0, 3);
      number = value.slice(3);
      break;
    case 11:
      country = value[0];
      city = value.slice(1, 4);
      number = value.slice(4);
      break;
    case 12:
      country = value.slice(0, 3);
      city = value.slice(3, 5);
      number = value.slice(5);
      break;
    default:
      return tel;
  }

  if (country === 1) {
    country = '';
  }

  number = `${number.slice(0, 3)}-${number.slice(3)}`;
  return (`${country} (${city}) ${number}`).trim();
}

export const fmFullName = (name={}, followType=['family', 'middle', 'given']) => {
  const fullNameCompose = R.compose(joinSpacer, R.values, removeEmptyItem, R.pick)
  return fullNameCompose(followType, name)
}



export const fmEmailAndPhoneToText = (telecom = []) => {
  if (!_.isArray(telecom)) return {};

  const getValue = R.map((value) => value.value)
  const filterCompose = R.compose(removeEmptyItem, getValue, R.filter)

  const emails = filterCompose(isEmailType, telecom) || []
  const emailText = commaSpacer(emails)

  const phones = filterCompose(isPhoneTax, telecom) || []
  const fmPhones = R.map(fmTel)(phones)
  const phoneText = commaSpacer(phones)
  return {
    phones,
    emails,
    phoneText,
    emailText,
    fmPhones
  }
}

const isEmailType = (value) => {
  return filterType(value)(['email'])
}
const isPhoneTax = (value) => {
  return filterType(value)(['fax', 'phone'])
}
const filterType = (value) => {
  return function (type) {
    return _.includes(type, value.system)
  }
}

export const getDate = (date = new Date()) => {
  return moment(date).format('DD/MM/YYYY')
}

export const getDateTime = (date = new Date()) => {
  return  moment(date).format('DD/MM | h:mm a')
}

export const getFullPathDevice = (path) => {
  return 'file://' + path
}

export const jsonToStringCookie = (cookieJson= {session: '"abc"'}) => {
  let cookieString= ''
  Object.keys(cookieJson).map((title, index) => {
    cookieString = cookieString + `${title}=${cookieJson[title]};`
  })
  return cookieString;
}

export const getListAddress = (address = {}) => {
  if ( !address ) address = {}
  const sortTitle = ['line', 'city', 'state']
  const flatArrayCompose = R.compose(removeEmptyItem, flatObject, R.pick)
  return flatArrayCompose(sortTitle, address)
}

const flatObject = (data) => {
  // Delete null, undefined object 
  return _.flatMap(data)
}