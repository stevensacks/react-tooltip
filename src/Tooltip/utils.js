export const getContainer = () => {
    let container = document.getElementById('react-tooltip-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'react-tooltip-container';
        document.body.appendChild(container);
    }
    return container;
};

const OFFSET = 10;
const PADDING = 8;

export const constrainRight = (rect, tipRect) => {
    if (window.innerWidth - tipRect.right - PADDING > tipRect.width) {
        return {
            left: rect.left + rect.width / 2 - tipRect.width / 2,
        };
    }
    const left = Math.min(
        window.innerWidth - tipRect.width - PADDING * 3,
        rect.left + rect.width / 2 - tipRect.width / 2
    );
    return {
        left,
        offset: rect.right - left - rect.width / 2 - 5,
    };
};

const constrainLeft = (pos, rect) =>
    pos.left < PADDING
        ? {
              ...pos,
              left: PADDING,
              offset: rect.left + rect.width / 2 - PADDING - 5,
          }
        : pos;

const constrainTop = (pos, rect, tipRect) => {
    if (pos.top < PADDING) {
        return {
            ...pos,
            top: PADDING,
            offset: rect.top + rect.height / 2 - PADDING - 5,
        };
    }
    if (pos.top + tipRect.height > window.innerHeight - PADDING - 23) {
        const top = window.innerHeight - tipRect.height - PADDING - 23;
        const offset = Math.min(
            rect.top + rect.height / 2 - top - 5,
            tipRect.height - 15
        );
        if (tipRect.height - offset < 16) {
            return {
                ...constrainLeft(calcPosition('top', rect, tipRect), rect),
                placement: 'top',
            };
        }
        return {
            ...pos,
            top,
            offset,
        };
    }
    return pos;
};
export const calcPosition = (placement, rect, tipRect) => {
    if (placement === 'top') {
        return {
            top: rect.top - tipRect.height - OFFSET,
            ...constrainRight(rect, tipRect),
        };
    } else if (placement === 'bottom') {
        return {
            top: rect.bottom + OFFSET,
            ...constrainRight(rect, tipRect),
        };
    } else if (placement === 'left') {
        return {
            top: rect.top + rect.height / 2 - tipRect.height / 2,
            left: Math.min(
                rect.left - tipRect.width - OFFSET,
                window.innerWidth - tipRect.width - PADDING * 3
            ),
        };
    }
    return {
        top: rect.top + rect.height / 2 - tipRect.height / 2,
        left: rect.right + OFFSET,
    };
};

export const getPosition = (placement, rect, tipRect) => {
    const pos = calcPosition(placement, rect, tipRect);
    if (placement === 'top') {
        if (pos.top < PADDING) {
            return {
                ...constrainLeft(calcPosition('bottom', rect, tipRect), rect),
                placement: 'bottom',
            };
        }
        return {...constrainLeft(pos, rect, tipRect), placement};
    } else if (placement === 'bottom') {
        if (pos.top + tipRect.height > window.innerHeight - PADDING) {
            return {
                ...constrainLeft(calcPosition('top', rect, tipRect), rect),
                placement: 'top',
            };
        }
        return {...constrainLeft(pos, rect), placement};
    } else if (placement === 'left') {
        if (pos.left < PADDING) {
            return {
                placement: 'right',
                ...constrainTop(
                    calcPosition('right', rect, tipRect),
                    rect,
                    tipRect
                ),
            };
        }
        return {placement, ...constrainTop(pos, rect, tipRect)};
    } else if (placement === 'right') {
        if (
            rect.right + OFFSET >
            window.innerWidth - tipRect.width - PADDING * 3
        ) {
            return {
                placement: 'left',
                ...constrainTop(
                    calcPosition('left', rect, tipRect),
                    rect,
                    tipRect
                ),
            };
        }
        return {placement, ...constrainTop(pos, rect, tipRect)};
    }
    return {...pos, placement};
};
