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
    // Check if it is an Array
    if (obj instanceof Array) {
      // Create stringyArr for holding stringified elements of obj
      var stringyArr = [];
      for (let i = 0; i < obj.length; i++) {
        // Add each stringified element to stringyArr
        stringyArr.push(stringifyJSON(obj[i]));
      }
      // Convert stringyArr to a string
      var substring = "[" + stringyArr.join(",") + "]";
      // Add substring to stringified
      stringified += substring;
    } else if (obj instanceof Object) {
      // If obj is an Object
      var stringyArr = [];
      for (prop in obj) {
        let property = stringifyJSON(prop);
        let value = stringifyJSON(obj[prop]);
        stringyArr.push(property + ":" + value);
      }
      var substring = "{" + stringyArr.join(",") + "}";
      stringified += substring;
    }
  }
  return stringified;
};
