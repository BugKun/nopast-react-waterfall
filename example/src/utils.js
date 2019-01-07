export const Random = (begin, end) => Math.round(Math.random() * (end - begin) + begin);
export const RandomColor = () => {
    const Color = () => Math.floor(Math.random()*255);
    return `rgb(${Color()}, ${Color()}, ${Color()})`;
};
