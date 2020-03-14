import React, { useState, useRef } from 'react';
import { Container } from '../container/Container';
import Button from '../button/Button';
import Tooltip from '../container/tooltip/Tooltip';
import { generatePassword, copyToClipBoard } from '../../utils/Helper';

import './Display.css';

const Display = () => {
  const [password, setPassword] = useState('');
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();
  const passwordRef = useRef(null);
  const [tooltip, setTooltip] = useState(false);
  let pwdDescription = '';

  const generateNewPassword = () => {
    const pwd = generatePassword(passwordProps, rangeValue);
    setPassword(pwd);
  };

  const copyClipBoard = e => {
    e.preventDefault();
    copyToClipBoard(passwordRef.current);
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 1000);
  };

  const setBackgroungColor = password => {
    if (password && password.length === 1 && password.length <= 5) {
      pwdDescription = 'Bad Password';
      return '#cb473e';
    } else if (password && password.length >= 6 && password.length <= 10) {
      pwdDescription = 'Weak Password';
      return '#f07d58';
    } else if (password && password.length > 10) {
      pwdDescription = 'Strong Password';
      return '#24ac36';
    } else {
      pwdDescription = 'Bad Password';
      return 'cb473e';
    }
  };
  return (
    <>
      <div className='row'>
        <div
          className='col-12 password-display-container'
          style={{ backgroundColor: setBackgroungColor(password) }}
        >
          <div className='password-container'>
            <div className='password-display'>
              <input
                ref={passwordRef}
                type='text'
                value={password}
                className='password-display-input'
                readOnly
              />
            </div>
            <div className='password-description'>
              {password && password.length > 10 ? (
                <>
                  <i className='fas fa-check-circle'></i> {pwdDescription}
                </>
              ) : (
                <>
                  <i className='fas fa-exclamation-circle'></i> {pwdDescription}
                </>
              )}
            </div>
          </div>
          <div className='password-display-icons'>
            <Button
              className='copy-btn'
              iconClass='far fa-copy'
              handleClick={copyClipBoard}
            />
            <Button
              className='generate-btn'
              iconClass='fas fa-sync-alt'
              handleClick={() => generateNewPassword()}
            />
            <Tooltip
              message='Copied'
              position='left'
              displayTooltip={tooltip}
            />
          </div>
        </div>
      </div>
      <Container
        setPassword={setPassword}
        setRange={setRange}
        setPasswordProps={setPasswordProps}
        passwordRef={passwordRef}
      />
    </>
  );
};

export default Display;
