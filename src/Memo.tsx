import React, { useCallback, useRef, useState } from 'react';
import { ITodo } from './App';

export const Memo: React.FC<ITodo> = ({ todo, color }) => {
    const [draggable, setDraggable] = useState<boolean>(false);
    const MemoRef = useRef<HTMLDivElement>(null);

    const memoMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (draggable) {
                MemoRef.current!.style.top =
                    e.clientY -
                    (MemoRef.current as HTMLDivElement).clientWidth / 2 -
                    86 +
                    'px';
                MemoRef.current!.style.left =
                    e.clientX -
                    (MemoRef.current as HTMLDivElement).clientHeight / 2 +
                    'px';
            }
        },
        [draggable]
    );
    return (
        <div
            style={{
                width: '256px',
                height: '256px',
                backgroundColor: color,
                padding: '24px',
                fontSize: '24px',
                borderRadius: '4px',
                cursor: 'grab',
                boxShadow:
                    'box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',
            }}
            onMouseDown={() => {
                MemoRef.current!.style.position = 'absolute';
                setDraggable(true);
            }}
            onMouseLeave={() => setDraggable(false)}
            onMouseUp={() => setDraggable(false)}
            onMouseMove={memoMove}
            ref={MemoRef}
        >
            <p>{todo}</p>
        </div>
    );
};
