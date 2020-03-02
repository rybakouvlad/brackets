module.exports = function check(str, bracketsConfig) {
    let regexp = new RegExp( bracketsConfig.join('|').replace(/\,/g, "").replace(/([\{\}\(\)\[\]])/g, "\\$1").replace(/(\W+)/g, "$1").replace(/(\|\|)/g, "\\\|\\\|").replace(/(\\\|\\\|\|)/g, "|\\\|\\\|"));

    for (let i = 0; i < str.length; i++) {
      str = str.replace(regexp, '');
      if (str != str.replace(regexp, '')) {
        i = i - 2;
      }
    }
  
    if (str.length == 0) {
  
      return true;
    }return false;  
  
}
