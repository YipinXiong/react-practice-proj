import React, {useRef, useState} from 'react';

const YourLibrary = () => {
  const [leftWidth, setLeftWidth] = useState('50%');
  const resizeParentRef = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: MouseEvent) => {
    const finalWidth = e.clientX - 200;
    setLeftWidth(`${finalWidth}px`)
  };
  const onMouseDownHandler = () => {
    resizeParentRef?.current?.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
      resizeParentRef?.current?.removeEventListener('mousemove', onMouseMove);
    })
  };
  return (
      <div ref={resizeParentRef} className="d-flex" style={{height: '100%'}}>
        <div className="border-end position-relative" style={{width: leftWidth, background: 'red'}}>
          <div onMouseDown={onMouseDownHandler} className="position-absolute"
               style={{
                 top: 0,
                 right: 0,
                 bottom: 0,
                 height: '100%',
                 width: '10px',
                 backgroundColor: 'blue',
                 cursor: 'ew-resize'
               }}/>
        </div>

        <div style={{flex: 1, background: 'greenyellow'}}/>
      </div>
  );
};

export default YourLibrary;
