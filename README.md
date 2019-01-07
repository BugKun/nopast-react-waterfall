# nopast-react-waterfall
A React Component for waterfall layout.

## Installation
```bash
npm install nopast-react-waterfall --save-dev
```

## Browser Support
### Defalut version
[![Build Status](https://saucelabs.com/browser-matrix/que-etc.svg)](https://saucelabs.com/beta/builds/303f5344a7214ba5b62bc7079a15d376)

**NOTE:** Internet Explorer 8 and its earlier versions are not supported.

### Slim version
![Without any Polyfill](https://raw.githubusercontent.com/BugKun/react-element-onresize/master/Browser-Support-Without-Polyfill.png)


## Usage
### Defalut version and Slim version
```javascript
import React, { Component } from 'react';
import ReactWaterFall from 'nopast-react-waterfall'; //Defalut version
import ReactWaterFall from 'nopast-react-waterfall/dist/nopast-react-waterfall.slim'; //Slim version


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { elemResize } = this.props;

    return (
        <ReactWaterFall options={...}>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
        </ReactWaterFall>
    )
  }
}

export default App;
```
### Personal polyfill usage
```javascript
import React, { Component } from 'react';
import ReactWaterFall from 'nopast-react-waterfall/dist/nopast-react-waterfall.polyfill'; //Polyfill requirement version
import resizeObserver from "resize-observer-polyfill";
const ReactWaterFall = ReactWaterFallFunc(resizeObserver);

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { elemResize } = this.props;

    return (
        <ReactWaterFall options={...}>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
            <div style={{height: 500, width: 400}}><img /></div>
        </ReactWaterFall>
    )
  }
}

export default App;
```

## Options
> spaceBetween (Type:Number)：Each child component space between<br>
> dynamic (Type:Boolean)：Dynamically resize the component to fill the container<br>
> permutation (Type:String)：The method of permutation. <br>
>> min-height：Minimum height difference between each column<br>
>> min-insert：Insert minimum height column<br>
>>>
> animation (Type:Object)：Animation setup<br>
>> duration (Type:Number)：Animation duration<br>
>> type (Type:String)：：Animation timing function<br>