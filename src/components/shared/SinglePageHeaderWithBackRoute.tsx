import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function SinglePageHeaderWithBackRoute() {
  const navigator = useNavigate();
  const routeBack = useCallback(() => navigator(-1), [navigator]);
  return (
      <div className="py-4">
        <button className="btn btn-sm btn-secondary" onClick={routeBack}>Back</button>
      </div>
  );
}

export default SinglePageHeaderWithBackRoute;
