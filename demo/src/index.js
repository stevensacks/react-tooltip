import React, {Component} from 'react';
import {render} from 'react-dom';
import Tooltip from '../../src/Tooltip';
import './index.css';

const overlay = (
    <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    </span>
);

class Demo extends Component {
    render() {
        return (
            <div className="groups">
                <div className="group">
                    <Tooltip overlay={overlay}>
                        <button>Right</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="top">
                        <button>Top</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="bottom">
                        <button>Bottom</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="left">
                        <button>Left</button>
                    </Tooltip>
                </div>
                <div className="group">
                    <Tooltip overlay={overlay}>
                        <button>Right</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="top">
                        <button>Top</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="bottom">
                        <button>Bottom</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="left">
                        <button>Left</button>
                    </Tooltip>
                </div>
                <div className="group">
                    <Tooltip overlay={overlay} placement="left">
                        <button>Left</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="bottom">
                        <button>Bottom</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="top">
                        <button>Top</button>
                    </Tooltip>
                    <Tooltip overlay={overlay}>
                        <button>Right</button>
                    </Tooltip>
                </div>
                <div className="group">
                    <Tooltip overlay={overlay}>
                        <button>Right</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="top">
                        <button>Top</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="bottom">
                        <button>Bottom</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="left">
                        <button>Left</button>
                    </Tooltip>
                </div>
                <div className="group">
                    <Tooltip overlay={overlay}>
                        <button>Right</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="top">
                        <button>Top</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="bottom">
                        <button>Bottom</button>
                    </Tooltip>
                    <Tooltip overlay={overlay} placement="left">
                        <button>Left</button>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
