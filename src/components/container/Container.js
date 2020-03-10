import React from 'react';

import './Container.css';

const Container = () => {
  return (
    <div className='row password-settings'>
      <h3>Use slide to select from the optiions.</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='form group'>slider component</div>
        </div>
        <div className='col-md-12'>
          <div className='row checkbox-container'>check box compnt</div>
        </div>
      </div>
      <div className='text-center'>
        <div className='row'>
          <div className='col-md-12'>
            <button className='btn password-btn'>copy passwd</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Container};
