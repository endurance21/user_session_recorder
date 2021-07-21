const clickData = {
timeofClick: "IST 5:30 PM" ,
}

const node = {
id:"uniqueId"
clickDatas:[clickData1, clickData2 ........],
childrens:[ childNode1, childNode2, ..........]
}

/*
This function will insert / add a clickData to the click dispatching node
*/

const  addClickData = (nodeId, clickData, rootNode) =>{
// we will use dfs to locate that node and then append this data to the node object
const node = dfs(rootNode, nodeId) ;
if( node ) {
node.clickDatas.append(clickData)
}

}

const dfs = (currentNode, targetNodeId)=>{

//base case
if( currentNode.id === targetNodeId) {
 return currentNode

}

currentNode.forEach((childNode, index)=>{
 dfs( childNode, targetNodeId)
})

}
