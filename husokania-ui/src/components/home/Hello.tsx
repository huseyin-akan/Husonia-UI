'use client'
import React from 'react'
import HusButton, { ButtonType } from '../ui/button/HusButton';
import 'src/components/home/Hello.css';

const Hello = () => {
  return (
    <>
    <section className="hus-hello" id="hus-hello">
        <div className="hus-hello-content">
            <h1>Hi, Im <span>Hüseyin Akan</span></h1>
            <div className="text-animate">
                <h3>Full Stack Developer</h3>
            </div>
            <div className="text-animate">
                <h3>Full Stack Developer</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid impedit suscipit odio harum id saepe, sint nihil quidem ullam culpa facere ut explicabo molestias, qui itaque quaerat maiores ex labore rem eius est. Quod, doloremque, illum sequi ipsum ea hic velit aliquam odit excepturi quibusdam delectus nulla, nam distinctio porro officia! Voluptate earum ex soluta doloribus, ipsum quos.</p>
            <div className="hus-btn-box">
                <HusButton text='Hire Me' btnType={ButtonType.OutlinedButton}></HusButton>
                <HusButton text='Lets Talk' btnType={ButtonType.StandartButton}></HusButton>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hello