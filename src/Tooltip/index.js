import {getContainer, getPosition} from './utils';
import React, {cloneElement, Fragment, useState} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import TooltipTip from './TooltipTip';
import useClientRect from '../hooks/useClientRect';
import useHover from '../hooks/useHover';
import './index.css';

const Tooltip = props => {
    const {children, className, maxWidth, placement, overlay} = props;
    const [isHovered, hoverHandlers] = useHover();
    const [ref, rect] = useClientRect();
    const [tipRect, setTipRect] = useState({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    });

    const position = getPosition(placement, rect, tipRect);

    return (
        <>
            {cloneElement(children, {
                ...hoverHandlers,
                ref: isHovered ? ref : null,
            })}
            {isHovered &&
                createPortal(
                    <TooltipTip
                        key={btoa(JSON.stringify(tipRect))}
                        className={className}
                        maxWidth={maxWidth}
                        overlay={overlay}
                        position={position}
                        setRect={setTipRect}
                    />,
                    getContainer()
                )}
        </>
    );
};

Tooltip.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    maxWidth: PropTypes.number,
    overlay: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
};

Tooltip.defaultProps = {
    maxWidth: 320,
    placement: 'right',
};

export default Tooltip;
