import React, {MouseEvent, MouseEventHandler, useCallback, useRef, useState} from 'react';
import './drag-to-resize.scss';
import logo from 'logo.svg';

const DragToResizeAndMove = () => {
    const [logoPosition, setLogoPosition] = useState({translateX: 0, translateY: 0});
    const moveBoundaryRef = useRef<HTMLDivElement>(null);
    const onDragMouseDown: MouseEventHandler<HTMLDivElement> =
        useCallback<MouseEventHandler<HTMLDivElement>>((mousedownEvent) => {
            mousedownEvent.stopPropagation();
            mousedownEvent.preventDefault();
            const boundaryLeft = moveBoundaryRef.current?.getBoundingClientRect().left || 0;
            const boundaryTop = moveBoundaryRef.current?.getBoundingClientRect().top || 0;
            const startX = mousedownEvent.clientX;
            const startY = mousedownEvent.clientY;
            const prevBoxLeft = mousedownEvent.currentTarget.getBoundingClientRect().left || 0;
            const prevBoxTop = mousedownEvent.currentTarget.getBoundingClientRect().top || 0;
            const mouseMoveHandler = (mousemoveEvt: any) => {
                mousemoveEvt.preventDefault();
                const dx = mousemoveEvt.clientX - startX;
                const dy = mousemoveEvt.clientY - startY;
                setLogoPosition({
                    translateX: dx + prevBoxLeft - boundaryLeft,
                    translateY: dy + prevBoxTop - boundaryTop
                });
            };
            const mouseupHandler = (e: any) => {
                e.stopPropagation();
                e.preventDefault();
                moveBoundaryRef.current?.removeEventListener('mousemove', mouseMoveHandler);
                moveBoundaryRef.current?.removeEventListener('mouseup', mouseupHandler);
            };
            moveBoundaryRef.current?.addEventListener('mousemove', mouseMoveHandler);
            moveBoundaryRef.current?.addEventListener('mouseup', mouseupHandler);
        }, []);
    return (
        <div ref={moveBoundaryRef} className="move-container">
            <div className="rotate-container">
                <div className="drag-box"
                     style={{transform: `translate(${logoPosition.translateX}px, ${logoPosition.translateY}px)`}}
                     onMouseDown={onDragMouseDown}>
                    <img src={logo} style={{height: '192px', width: '192px'}} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DragToResizeAndMove;
