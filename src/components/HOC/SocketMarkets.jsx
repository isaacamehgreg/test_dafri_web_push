import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socketSelector } from '../../redux/sockets/selectors';

const SocketMarkets = ({ children }) => {
  const dispatch = useDispatch();
  const isSocketOpen = useSelector(socketSelector);

  useEffect(() => {
    if (isSocketOpen) {
      dispatch({ type: 'SOCKET_SEND', payload: [5, `markets`] });
    }

    return () => {
      if (isSocketOpen) {
        dispatch({ type: 'SOCKET_SEND', payload: [6, `markets`] });
      }
    };
  }, [isSocketOpen, dispatch]);
  return <>{children}</>;
};

export default SocketMarkets;
