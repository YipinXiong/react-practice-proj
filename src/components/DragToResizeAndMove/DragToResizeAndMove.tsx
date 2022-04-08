import React, {MouseEventHandler, useCallback, useRef, useState} from 'react';
import './drag-to-resize.scss';
import logo from 'logo.svg';

const DragToResizeAndMove = () => {
    const [logoPosition, setLogoPosition] = useState({translateX: 0, translateY: 0});
    const [rotateAngle, setRotateAngle] = useState(0);
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

    const dragToRotate: MouseEventHandler<HTMLDivElement> = useCallback<MouseEventHandler<HTMLDivElement>>((mousedownEvent) => {
        mousedownEvent.stopPropagation();
        mousedownEvent.preventDefault();
        const R2D = 180 / Math.PI;
        const logoSize = {height: 96, width: 96};
        const rotateCenter = {
            x: (moveBoundaryRef.current?.getBoundingClientRect().left ?? 0) + logoPosition.translateX + logoSize.width / 2,
            y: (moveBoundaryRef.current?.getBoundingClientRect().top ?? 0) + logoPosition.translateY + logoSize.height / 2,
        };
        const {clientX, clientY} = mousedownEvent;
        const startAngle = R2D * Math.atan2(clientY - rotateCenter.y, clientX - rotateCenter.x);

        /* algorithem needed */
        const mouseMoveHandler = (event: MouseEvent) => {
            event.preventDefault();
            const {clientX, clientY} = event;
            const rotateX = clientX - rotateCenter.x;
            const rotateY = clientY - rotateCenter.y;
            const newDegree = R2D * Math.atan2(rotateY, rotateX);
            setRotateAngle((prevDeg) => {
                return prevDeg + newDegree - startAngle;
            });
        };

        const mouseUpHandler = (event: MouseEvent) => {
            moveBoundaryRef.current?.removeEventListener('mousemove', mouseMoveHandler);
            moveBoundaryRef.current?.removeEventListener('mouseup', mouseUpHandler)
        }

        moveBoundaryRef.current?.addEventListener('mousemove', mouseMoveHandler);
        moveBoundaryRef.current?.addEventListener('mouseup', mouseUpHandler)


    }, [logoPosition]);

    return (
        <div ref={moveBoundaryRef} className="move-container">
            <div className="rotate-container">
                <div className="drag-box"
                     style={{transform: `translate(${logoPosition.translateX}px, ${logoPosition.translateY}px) rotate(${rotateAngle}deg)`}}
                     onMouseDown={onDragMouseDown}>
                    <img src={logo} style={{height: '192px', width: '192px'}} alt=""/>
                    <div className="rotate-point" onMouseDown={dragToRotate}/>
                </div>
            </div>
        </div>
    );
};

export default DragToResizeAndMove;
