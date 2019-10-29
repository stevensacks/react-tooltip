import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const OFFSET = {
    bottom: 'left',
    left: 'top',
    right: 'top',
    top: 'left',
};

const TooltipTip = props => {
    const {className, maxWidth, overlay, position, setRect} = props;
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, [setRect, ref]);

    const innerStyle = {
        maxWidth,
        marginRight: window.innerWidth < maxWidth + 32 ? 16 : undefined,
    };

    return (
        <div className={`react-tooltip ${className || ''}`} style={position}>
            <i
                className={`react-tooltip-arrow react-tooltip-arrow-${position.placement}`}
                style={
                    position.offset
                        ? {[OFFSET[position.placement]]: `${position.offset}px`}
                        : undefined
                }
            />
            <div
                ref={ref}
                className="react-tooltip-inner"
                role="tooltip"
                style={innerStyle}
            >
                {overlay}
            </div>
        </div>
    );
};

TooltipTip.propTypes = {
    className: PropTypes.string,
    maxWidth: PropTypes.number,
    overlay: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    position: PropTypes.shape({
        left: PropTypes.number,
        offset: PropTypes.number,
        placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
        top: PropTypes.number,
    }),
    setRect: PropTypes.func,
};

export default TooltipTip;
