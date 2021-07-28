import React, { useEffect } from "react";
import './main.hoc.scss';
import { useSelector, useDispatch } from 'react-redux';
import Div100vh from 'react-div-100vh';
import { UPDATE_USER } from '../../redux/types';
import { reducers } from '../../redux/interface';

export default function Main(props: any) {
  const user = useSelector((state: reducers) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  const renderChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      if (child) {
        return React.cloneElement(child, {
          user
        });
      }
    });
  };

  return (
    <Div100vh>
      <div className="main_hoc">
        <div className="main_component">
          <div className="main_tabs">
            <div className="side_bar">
              <div className="title_content">
                <div className="logo_content">
                  <div className="h1">t</div>
                </div>
                <div className="title_text_container">
                  <div className="title_text">Title</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_body">
            {
              // renderChildren()
            }
          </div>
        </div>
      </div>
    </Div100vh>
  )
}
