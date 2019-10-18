import {useState} from 'react';

export default () => {
    const [state, setState] = useState(false);

    const onMouseOut = () => setState(false);
    const onMouseOver = () => setState(true);

    return [state, {onMouseOut, onMouseOver}];
};
