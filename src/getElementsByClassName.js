// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Create array for elements with class
  var elementsWithClassName = [];
  //Define function for checking class list on current element and child nodes
  var checkBranch = function(node) {
    // Load classList of current element
    var classList = node.classList;
    // If classList exists
    if( classList ) {
      // Iterate over classes in classList
      for( let i = 0; i < classList.length; i++ ) {
        // If current class === className
        if( classList[i] === className ) {
          // Add it to elementsWithClassName
          elementsWithClassName.push(node);
        }
      }
      // If element has children
      if( node.hasChildNodes() ) {
        // Load children 
        var children = node.childNodes;
        // Iterate over children
        for ( let j = 0; j < children.length; j++) {
          // Check each of their classes recursively
          checkBranch(children[j]);
        }
      }
    }
  }
  // Invoke the checkBranch function on the body element
  var body = document.body;
  checkBranch(body);
  // Return elementsWithClassName
  return elementsWithClassName;
};
