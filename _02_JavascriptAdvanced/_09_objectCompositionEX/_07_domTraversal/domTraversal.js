function traverseDom(selector){
    let targetNode = $(selector);
    let maxDepth = 0;
    let deepestNode = targetNode;

    depthFirstSearch(0, targetNode);
    heightFromBottomToTarget(maxDepth, deepestNode);

    function heightFromBottomToTarget(remainingNodes, currentNode){
        if(remainingNodes === -1){
            return;
        }
        currentNode.addClass('highlight');
        let parent = currentNode.parent();
        heightFromBottomToTarget(remainingNodes -1, $(parent));
    }

    function depthFirstSearch(depth, currentNode) {
        if (depth > maxDepth) {
            maxDepth = depth;
            deepestNode = currentNode;
        }

        let children = currentNode.children();
        for (let child of children) {
            depthFirstSearch(depth + 1, $(child));
        }
    }
}

traverseDom('.article');