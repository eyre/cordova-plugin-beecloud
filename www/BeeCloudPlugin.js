var exec = require('cordova/exec');

exports.init = function(arg0, success, error) {
    exec(success, error, "BeeCloudPlugin", "init", [arg0]);
};
exports.ali_pay = function(title, totalfee, orderNo, optional, success, error) {
    exec(success, error, "BeeCloudPlugin", "ali_pay", [title, totalfee, orderNo, optional]);
};
exports.wx_pay = function(title, totalfee, orderNo, optional, success, error) {
    exec(success, error, "BeeCloudPlugin", "wx_pay", [title, totalfee, orderNo, optional]);
};