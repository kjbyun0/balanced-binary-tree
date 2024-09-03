class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function traverseBST(root) {
  if (root === null)
    return;

  traverseBST(root.left);
  console.log(root.value);
  traverseBST(root.right);
}

// list = [3, 5, 6, 9, 10, 20]
function threeToTwenty() {
  const n3 = new Node(3);
  const n5 = new Node(5);
  const n6 = new Node(6);
  const n9 = new Node(9);
  const n10 = new Node(10);
  const n20 = new Node(20);

  n6.left = n5;
  n5.left = n3;
  n6.right = n10;
  n10.left = n9;
  n10.right = n20;
  return n6;
}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
  const n10 = new Node(10);
  const n11 = new Node(11);
  const n30 = new Node(30);
  const n100 = new Node(100);
  const n200 = new Node(200);

  n30.left = n10;
  n10.right = n11;
  n30.right = n200;
  n200.left = n100;
  return n30;
}

if (require.main === module) {
  // add tests in here if you need them
  console.log("");
  traverseBST(threeToTwenty());

  console.log("");
  traverseBST(tenToTwoHundred());
}


module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
