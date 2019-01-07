import React, { PureComponent } from "react";
import { findDOMNode } from 'react-dom';

export default (ResizeObserverPolyfill) =>
    (WrappedComponent) =>
        class ElementResize extends PureComponent{
            constructor(props){
                super(props);

                this.state = {
                    containerWidth: 0
                };

                this.containerSizeObserver = null;
            }

            componentDidMount(){
                const $_element = findDOMNode(this.refs.WrappedComponent);

                if(!$_element) return;

                const ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;

                if(!ResizeObserver) {
                    console.error("You may need a polyfill to handle this component.");
                    return;
                }

                this.containerSizeObserver = new ResizeObserver(entries => {
                    this.setState({
                        containerWidth: entries[0].contentRect.width
                    });
                });

                this.containerSizeObserver.observe($_element);
            }

            componentWillUnmount(){
                if(this.containerSizeObserver) this.containerSizeObserver.disconnect();
                this.containerSizeObserver = null;
            }


            render() {
                const {containerWidth} = this.state;


                return (
                    <WrappedComponent
                        {...this.props}
                        contianerWidth={containerWidth}
                        ref="WrappedComponent"
                    />
                )
            }
        }
