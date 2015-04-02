
module.exports = function(str) {

  // To lower case
  str = str.replace(/\w\S*/g, function(txt){
    // When using D' contraction
    if (txt.indexOf("D'") > -1) {
      return "D'" + txt.charAt(2).toUpperCase() + txt.substring(3, txt.length).toLowerCase();
    } else return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  lowers = ['Da', 'De', 'Do', 'Das', 'Des', 'Dos'];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
      function(txt) { return txt.toLowerCase(); });

  return str;
}
