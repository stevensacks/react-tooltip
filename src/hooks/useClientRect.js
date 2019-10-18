import {useCallback, useState} from 'react';

export default () => {
    const [rect, setRect] = useState({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    });

    const ref = useCallback(node => {
        if (node) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    return [ref, rect];
};
