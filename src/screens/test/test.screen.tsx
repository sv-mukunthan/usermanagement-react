import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER } from '../../redux/types';
import { reducers } from '../../redux/interface';
import './test.screen.scss';

export default function Test() {
  const user = useSelector((state: reducers) => state.user);
  const dispatch = useDispatch();
  console.log("user", user);

  useEffect(() => {
  })

  const handleClick = () => {
    dispatch({
      type: UPDATE_USER,
      payload: { name: "test" }
    })
  }

  return (
    <div className="test">
      Testt
    </div>
  )
}