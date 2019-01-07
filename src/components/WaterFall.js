/**
 瀑布流排版组件
 * @constructor
 * @param {object} container - 瀑布流排版的父元素容器.
 * @param {object} childrenSize - 瀑布流排版的子元素的大小.
 * @param {object} options - 瀑布流排版的一些细节设置.
 * @param {function} onChange - 当排版发生改变时的回调函数.
 */

import objectSizeDynamic from "Utils/objectSizeDynamic"
import permutationByMinHeight from "Utils/permutationByMinHeight"
import permutationByMinInsert from "Utils/permutationByMinInsert"


export default class WaterFall {
    constructor({container, childrenSize, options = {}, onChange}){
        this.container = container;
        this.childrenSize = childrenSize;
        this.options = {
            spaceBetween: 10,
            dynamic: true,
            permutation: "",
            ...options,
            animation:{
                duration: 500,
                type: "linear",
                ...options.animation
            }
        };
        this.onChange = onChange;
        this.init();
    }

    init(){
        const column = this.getColumn();
        this.refresh(this.permutation(column));
    }

    resetOptions(opt) {
        this.options = {
            spaceBetween: 10,
            dynamic: true,
            permutation: "",
            ...opt,
            animation:{
                duration: 500,
                type: "linear",
                ...opt.animation
            }
        };
        return this;
    }

    resetChildrenSize(size){
        this.childrenSize = size;
        return this;
    }

    getColumn(){
        const containerWidth = this.container.offsetWidth,
            childrenWidth = this.childrenSize.width;
        let spaceBetween = 0;
        if(this.options.spaceBetween > 0) spaceBetween = this.options.spaceBetween;
        const $childrenWidth = childrenWidth + spaceBetween,
            column = {
                count: Math.floor( containerWidth / $childrenWidth ),
                extraSpace: containerWidth % $childrenWidth
            };
        return column;
    }

    permutation(column){
        let { spaceBetween, dynamic } = this.options;
        spaceBetween = (spaceBetween > 0)? spaceBetween : 0;
        const { width, height } = (dynamic)? objectSizeDynamic({childrenSize: this.childrenSize, column, spaceBetween}) : this.childrenSize;

        if(column.count < 1) {
            column.count = 1;
            column.extraSpace = 0;
        }

        return {
            permutations: (this.options.permutation === "min-height")? permutationByMinHeight({column, spaceBetween, width, height}) : permutationByMinInsert({column, spaceBetween, width, height}),
            childrenSizeDynamic: {width, height}
        };
    }

    refresh({permutations, childrenSizeDynamic}){
        const { dynamic, animation } = this.options;

        let style = {
            container: {
                position: "relative",
                height: permutations.parentHeight
            },
            children: {
                eachChild: [],
                publicStyle: {
                    position: "absolute"
                }
            }
        };

        if(animation.duration > 0) style.children.publicStyle.transition = `transform ${animation.duration}ms ${animation.type}`;

        for(let i = 0; i < this.childrenSize.height.length; i++){
            let childStyle = {};
            if(dynamic){
                childStyle.width = childrenSizeDynamic.width;
                childStyle.height = childrenSizeDynamic.height[i];
            }
            childStyle.transform = `translate3d(${permutations.children[i].x}px, ${permutations.children[i].y}px, 0)`;
            style.children.eachChild.push(childStyle);
        }

        this.onChange(style);

        return style;
    }
}
