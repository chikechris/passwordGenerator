import React from 'react';
import {Container} from '../container/Container'
import Button from '../button/Button'

import './Display.css'

const Display = () => {
  return (
    <>
      <div className='row'>
        <div className='col-12 password-display-container'>
          <div>
            <div className='password-display'>
              <input type='text'
              value="t"
               className='password-display-input' 
               readOnly
               />
            </div>
            <div className="password-description">
            <i className="fas fa-check-circle"></i> Strong Password

            </div>
          </div>
            <div className="password-display-icons">
            <Button
              className='copy-btn'
              iconClass='far fa-copy'
            />
            <Button
              className='generate-btn'
              iconClass='fas fa-sync-alt'
            />
            </div> 
        </div>
      </div>
      <Container />
    </>
  );
};

export default Display;
