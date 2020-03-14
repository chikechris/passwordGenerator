import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import Slider from '../slider/Slider';
import CheckBox from '../checkbox/CheckBox';
import {generatePassword, setPasswordLength} from '../../utils/Helper'

import './Container.css';

const CHECKBOX_LIST = [
  {
    id: 0,
    name: 'uppercase',
    label: 'Uppercase',
    isChecked: true
  },
  {
    id: 1,
    name: 'lowercase',
    label: 'Lowercase',
    isChecked: true
  },
  {
    id: 2,
    name: 'symbols',
    label: 'Symbols',
    isChecked: true
  },
  {
    id: 3,
    name: 'numbers',
    label: 'Numbers',
    isChecked: true
  }
];

const Container = (props) => {

  const {setPassword} = props 
  const [rangeValue, setRangeValue] = useState(12);
  const [checkbox, setCheckBox] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true, 
    numbers: true
  })

  const {uppercase, lowercase, symbols, numbers} = checkbox
  useEffect(() => {
    setPasswordLength(rangeValue)
    passwordGenerated(checkbox, rangeValue)
  }, [uppercase, lowercase, symbols, numbers])

  const passwordGenerated = (checkbox, rangeValue) => {
    const pwd = generatePassword(checkbox, rangeValue)
    setPassword(pwd)
  }

  const onChangeSlider = e => {
    setRangeValue(e.target.value);
  };

  const onChangeCheckBox = e => {
    // console.log(e.target.checked)
    let { name, checked } = e.target;
    CHECKBOX_LIST.map(checkbox => {
      if (checkbox.name === name) {
        checkbox.isChecked = checked;
        setCheckBox({ [name]: checkbox.isChecked})
      }
      return '';
    });

    console.log(CHECKBOX_LIST);
  };
  return (
    <div className='password-settings'>
      <h3>Use slide to select from the optiions.</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='form group'>
            &nbsp;
            <Slider
              min={1}
              max={50}
              step={1}
              defaultLength={parseInt(rangeValue, 10)}
              value={parseInt(rangeValue, 10)}
              onChangeValue={onChangeSlider}
            />
          </div>
        </div>

        <div className='col-md-12'>
          <div className='row checkbox-container'>
            {CHECKBOX_LIST.map(checkbox => (
              <CheckBox
                key={checkbox.id}
                name={checkbox.name}
                checked={checkbox.isChecked}
                label={checkbox.label}
                value={checkbox.isChecked}
                onChange={onChangeCheckBox}
                disabled={false}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className='text-center'>
        <div className='row'>
          <div className='col-md-12'>
            <Button className='btn password-btn' label='Copy Password' />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Container };
