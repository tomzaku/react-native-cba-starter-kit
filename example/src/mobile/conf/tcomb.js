// import t from 'tcomb-form-native';
var t = require('tcomb-form-native/lib');

// var i18n = require('tcomb-form-native/lib/i18n/en');
// import material from '../tpl/tcomb/material/'
// import material from 'native-tcomb-material-tpl'
import { material } from 'AppTcomb'
var i18n = require('tcomb-form-native/lib/i18n/en');
// var stylesheet = require('tcomb-form-native/lib/stylesheets/bootstrap');
import stylesheet from '../tpl/tcomb/material/stylesheet';

t.form.Form.templates = material;
t.form.Form.i18n = i18n;
t.form.Form.stylesheet = stylesheet;

t.form.Form.defaultProps = {
  templates: t.form.Form.templates,
  stylesheet: t.form.Form.stylesheet,
  i18n: t.form.Form.i18n
};