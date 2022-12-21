const invertTree = (root) => {
    if(!root)return root

    let data = [root],res = []
    
    while(data.length){
        let curr = data.pop();
        [curr.right,curr.left] = [curr.left , curr.right];
        if(curr.right) data.push(curr.right)
        if(curr.left) data.push(curr.left)
    }
    return root
    
};