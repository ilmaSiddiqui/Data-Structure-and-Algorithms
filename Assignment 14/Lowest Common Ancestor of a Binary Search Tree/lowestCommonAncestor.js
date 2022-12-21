var lowestCommonAncestor = function(root, p, q) {
    let node = null;
    const dfs = (root) => {
        if(!root || node) {
            return 0;
        }
        
        const l = dfs(root.left);
        const r = dfs(root.right);
        let curr = l+r;
        if(root === p || root === q) {
            curr += 1;
        }
        
        if(curr >= 2 && !node) {
            node = root;
        }
        
        return curr;
    };
    
    dfs(root);
    return node; 
};