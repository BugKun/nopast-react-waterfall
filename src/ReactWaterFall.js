import React, { Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import WaterFall from "./components/WaterFall"
import ElementWidthResize from "./components/ElementWidthResize"

export default (polyfill) =>
    @ElementWidthResize(polyfill)
    class ReactWaterFall extends Component {
        constructor(props){
            super(props);
            this.state = {
                calculatedStyle: {},
                children: []
            };
            this.waterFall = null;
            this.waterFallOnChange = this.waterFallOnChange.bind(this);
        }

        static propTypes = {
            options: PropTypes.object,
            className: PropTypes.string,
            style: PropTypes.object,
            children: PropTypes.node
        };

        static defaultProps = {
            style: {},
            options: {}
        };

        componentDidMount(){
            this.initWaterFall();
        }

        componentWillReceiveProps(nextProps){
            const childrenStyle = this.getStyle(nextProps.children);

            this.waterFall
                .resetOptions(nextProps.options)
                .resetChildrenSize({
                    width: childrenStyle[0].width,
                    height: childrenStyle.map(item => item.height)
                })
                .init()
        }

        getStyle(children) {
            return Children.map(children, (child) => {
                return child.props.style || {};
            })
        }

        waterFallOnChange(nextStyle){
            this.setState({
                calculatedStyle: nextStyle
            })
        }

        initWaterFall(){
            const { options, children } = this.props;
            const childrenStyle = this.getStyle(children);

            if(!this.waterFall){
                this.waterFall = new WaterFall({
                    container: this.refs.reactWaterFall,
                    childrenSize: {
                        width: childrenStyle[0].width,
                        height: childrenStyle.map(item => item.height)
                    },
                    options: {
                        spaceBetween: 5,
                        ...options,
                    },
                    onChange: this.waterFallOnChange
                });
            }
        }

        childRender({child, childStyle}) {
            return cloneElement(child, {
                style: childStyle
            })
        }

        render(){
            const { style, className, children } = this.props,
                { calculatedStyle } = this.state;

            return (
                <div
                    style={{...style, ...calculatedStyle.container}}
                    className={className}
                    ref="reactWaterFall"
                >
                    {
                        (calculatedStyle.children && children.length > 0) ?
                            (
                                Children.map(children, (child, childIndex) => {
                                    const { publicStyle, eachChild } = calculatedStyle.children;

                                    const childOrignStyle = child.props.style || {};

                                    return (
                                        <this.childRender
                                            child={child}
                                            childStyle={{ ...childOrignStyle, ...publicStyle, ...eachChild[childIndex] }}
                                        />
                                    );
                                })
                            )
                            :
                            (
                                children
                            )
                    }
                </div>
            );
        }
    }
