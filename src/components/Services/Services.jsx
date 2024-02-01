import React from 'react';

import Brief from '../Brief/Brief';

import './Services.scss';

export default function Services() {
  return (
    <>
        <section id='services'>
            <h2 className='services1__title'>What assistance can I provide for you?</h2>
            <p className='services__item'>creator</p>
            <p className='services__item'>social media marketing</p>
            <p className='services__item'>frontend developer</p>
            <h4 className='services__quiz-title'>Are you up for a consultation? Not sure which of my offerings might work best for you?</h4>
            <p className='services__quiz-form'>After you {<button onClick={() => Brief.openForm()}>submit this form</button> ? <Brief /> : false}, I'll get in touch!</p>
        </section>
    </>
  )
};
