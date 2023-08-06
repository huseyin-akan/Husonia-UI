/* eslint-disable react-refresh/only-export-components */
import { MouseEventHandler } from 'react';
import './HusButton.css';

export interface HusButtonProps{
    text : string;
    btnType: ButtonType;
    onClick : MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonType{
  StandartButton = "hus-standart-btn",
  OutlinedButton = "hus-outlined-btn"
}

const HusButton = (props : HusButtonProps) => {
  const _className = 'hus-btn '+ props.btnType;
  return (
    <button className={_className} onClick={props.onClick}>{props.text}</button>
  )
}

export default HusButton