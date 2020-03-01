// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // Create array for elements with class
  var elementsWithClassName = [];

  var checkBranch = function(node) {
    var classList = node.classList;
    for( let i = 0; i < classList.length; i++ ) {
      if( classList[i] === className ) {
        elementsWithClassName.push(node);
      }
    }
    if( node.hasChildNodes() ) {
      var children = node.childNodes;
      for ( let j = 0; j < children.length; j++) {
        checkBranch(children[j]);
      }
    }
  }

  var body = document.body;
  checkBranch(body);

  return elementsWithClassName;
};
