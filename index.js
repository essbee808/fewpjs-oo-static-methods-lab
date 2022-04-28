class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let exception = ['a', 'an', 'but', 'of', 'the', 'and', 'for', 'at', 'by', 'from'];
    // loop through each word in string
    // if word === any of the exception words, do nothing
    // else capitalize
    let result = [];
    let sentenceArray = string.split(' ');
    for ( let n = 0; n < sentenceArray.length; n++ ) {
      if (n == 0) {
        result.push( this.capitalize(sentenceArray[n]))
      } else {
        if (exception.includes(sentenceArray[n])) {
          result.push(sentenceArray[n])
        } else {
          result.push( this.capitalize(sentenceArray[n]))
        }
      }
      }
      return result.join(' ');
    }   
}