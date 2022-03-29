import React, {useCallback, useRef, useState} from 'react';

const DragToResize = () => {
  const [leftWidth, setLeftWidth] = useState('50%');
  const resizeParentRef = useRef<HTMLDivElement>(null);
  const onMouseDownHandler = useCallback(() => {
    const onMouseMove = (e: MouseEvent) => {
      const NAV_MENU_WIDTH = 200;
      const finalWidth = e.clientX - NAV_MENU_WIDTH;
      setLeftWidth(`${finalWidth}px`)
    };
    document.addEventListener('mouseup', () => {
      resizeParentRef?.current?.removeEventListener('mousemove', onMouseMove);
    })
    resizeParentRef?.current?.addEventListener('mousemove', onMouseMove);
  }, []);
  return (
      <div ref={resizeParentRef} className="d-flex" style={{height: '100%'}}>
        <div className="border-end position-relative" style={{width: leftWidth, background: 'red'}}>
          <div onMouseDown={onMouseDownHandler} className="position-absolute"
               style={{
                 top: 0,
                 right: 0,
                 bottom: 0,
                 width: '10px',
                 backgroundColor: 'blue',
                 cursor: 'ew-resize'
               }}/>
        </div>

        <div style={{flex: 1, background: 'greenyellow'}}/>
      </div>
  );
};

export default DragToResize;
