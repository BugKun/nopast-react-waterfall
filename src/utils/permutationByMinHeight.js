export default ({column, spaceBetween, width, height}) => {
    let permutations = {
        parentHeight: 0,
        children: []
    };
    const $width = width + spaceBetween;

    let bags = [];
    for(let i = 0; i < column.count; i++) {
        bags.push([]);
    }

    if(column.count > 1){
        const heightSorted = height.map((item, index) => ({id: index, value: item}))
            .sort((prev, next) => next.value - prev.value);

        for (let i = 0; i < heightSorted.length; i++) {
            const item = heightSorted[i];
            const bagValue = bags.map(bag => {
                let value = 0;
                for (let j = 0; j < bag.length; j++) {
                    const item = bag[j];
                    value += item.value;
                }
                return value;
            });
            const bagMin = Math.min(...bagValue);
            const index = bagValue.findIndex(item => item === bagMin);
            bags[index].push(item);
        }

        const bagsSorted = bags.filter(item => item.length > 0)
                .map(bag => bag.sort((prev, next) => prev.id - next.id))
                .sort((prev, next) => prev[0].id - next[0].id);

        for (let i = 0; i < bagsSorted.length; i++) {
            const bag = bagsSorted[i];
            let sum = 0;
            for (let j = 0; j < bag.length; j++) {
                const item = bag[j];
                permutations.children[item.id] = {
                    x: i * $width,
                    y: sum
                };
                sum += item.value + spaceBetween;
            }
            const itemHeight = sum - spaceBetween;
            if(itemHeight > permutations.parentHeight) permutations.parentHeight = itemHeight;
        }
    }else {
        for (let i = 0; i < height.length; i++) {
            let item = height[i];
            const $height = item + spaceBetween,
                minHeight = permutations.parentHeight;

            permutations.children.push({x: 0, y: minHeight});
            const itemHeight = minHeight + $height;
            if(itemHeight > permutations.parentHeight) permutations.parentHeight = itemHeight;
        }
    }

    return permutations;
}
