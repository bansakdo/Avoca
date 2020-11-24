
var Request = function() {
    this.getParameter = function(name) {
        var val = '';
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1, nowAddress.length)).split('&');
        for (var i = 0 ; i < parameters.length ; i++) {
            var varName = parameters[i].split('=')[0];
            if(varName.toUpperCase() == name.toUpperCase()) {
                val = parameters[i].split('=')[1];
                break;
            }
        }
        return val;
    }
}
var request = new Request();
