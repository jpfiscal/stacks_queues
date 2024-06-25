class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
}

function josephus(groupSize, skipNum){
    if (skipNum < 1){
        throw new Error("skip number must be greater than or equal to 1!");
    }
    //initialize circle size
    let circSize = groupSize;
    console.log(`init circSize: ${circSize}`)
    console.log(`init skipNum: ${skipNum}`)
    //Create First Node
    let firstNode = new Node(1);
    let prevNode = firstNode;
    //Create rest of circle
    for (let i=2; i<=groupSize; i++){
        console.log(`i = ${i}`);
        let newNode = new Node(i);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        if (i==groupSize){
            newNode.next = firstNode;
            firstNode.prev = newNode;
        }
        prevNode = newNode;
    }
    let curNode = firstNode;
    console.log(`firstNode val: ${firstNode.val}`)
    while (circSize > 1){
        for (let i=1; i<skipNum; i++){
            curNode = curNode.next;
            console.log(`curNode val: ${curNode.val}`);
        }
        
        let delNode = curNode;
        curNode = curNode.next;
        detachNode(delNode);
        circSize -= 1;
        console.log(`running circSize: ${circSize}`)
    }
    return curNode.val;
}

function detachNode(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    console.log(`detached node val: ${node.val}`);
}

console.log(`groupSize:10, skipNum: 3, Survivor: ${josephus(10,3)}`);