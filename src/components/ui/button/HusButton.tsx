'use client';
import React from 'react'
import 'src/components/ui/button/HusButton.css';

export interface HusButtonProps{
    text : string;
    btnType: ButtonType
}

export enum ButtonType{
  StandartButton = "hus-standart-btn",
  OutlinedButton = "hus-outlined-btn"
}

const HusButton = (props : HusButtonProps) => {
  let _className = 'hus-btn '+ props.btnType;
  const clickHandler = () => { alert('You Tickled me, Dude!!!') }
  return (
    <button className={_className} onClick={clickHandler}>{props.text}</button>
  )
}

export default HusButton