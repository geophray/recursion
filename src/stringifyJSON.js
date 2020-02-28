// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Check for type of obj
  var objType = typeof obj;
  // Create variable to hold stringified obj
  var stringified = "";
  // If obj is a string
  if (objType === "string") {
    // Wrap it in quotes and return it
    stringified += '"' + obj + '"';
  } else if (objType === "number" || !obj || obj === true) {
    // If obj is a number, falsey, or true add it to stringified
    stringified += obj;
  } else if (objType === "object") {
    // If obj is of type object
    // Check if it is an array
    if (obj instanceof Array) {
      // Create substring for stringifying the elements of the array
      var substring = "[";
      for (let i = 0; i < obj.length; i++) {
        // Add each element to the string
        substring += stringifyJSON(obj[i]);
      }
      substring += "]";
      stringified += substring;
    } else if (obj instanceof Object) {
      var substring = "[";
      for (prop in obj) {
        let property = stringifyJSON(prop);
        let value = stringifyJSON(obj[prop]);
        substring += property + ": " + value + ";"
      }
      substring += "]";
    }
  }
  return stringified;
};
