export default ({column, spaceBetween, width, height}) => {
    let permutations = {
            parentHeight: 0,
            children: []
        },
        itemHeight = [];


    for (let i = 0; i < height.length; i++) {
        let item = height[i];
        const $width = width + spaceBetween;
        if(column.count > 1){
            if(i < column.count){
                permutations.children.push({x: i * $width, y: 0});
                itemHeight.push(item);
            }else{
                const minValue = Math.min(...itemHeight),
                    minHeight = { index: itemHeight.findIndex(item => item === minValue), min: minValue},
                    nextPermutationHeight = minHeight.min + spaceBetween;

                permutations.children.push({x: minHeight.index * $width, y: nextPermutationHeight});
                itemHeight[minHeight.index] = nextPermutationHeight + item;
            }
        }else {
            const $height = item + spaceBetween,
                minHeight = (itemHeight.length > 0)? itemHeight[0] : 0;

            permutations.children.push({x: 0, y: minHeight});
            itemHeight[0] = minHeight + $height;
        }
    }

    permutations.parentHeight = Math.max(...itemHeight);
    return permutations;
}
