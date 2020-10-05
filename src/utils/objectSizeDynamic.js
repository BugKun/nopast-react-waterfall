export default ({childrenSize, column, spaceBetween}) => {
    spaceBetween = (spaceBetween > 0)? spaceBetween : 0;
    const { width, height } = childrenSize,
        widthDynamic = (column.count >= 1)? width + ( column.extraSpace + spaceBetween ) / column.count : column.extraSpace;

    const childrenSizeDynamic = {
        width: widthDynamic,
        height: height.map(item => item / width * widthDynamic)
    };

    return childrenSizeDynamic;
}