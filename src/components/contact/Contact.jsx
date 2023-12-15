import React from 'react';

import './Contacts.scss';

export default function Contact () {
  
    return (
    <>
            <section id='contacts'>
                <h2 className='contacts__title'>Connect with us:</h2>
                <ul className='contact__list'>
                    <li className='contact__list-item'>
                      <a href='https://www.instagram.com/lykhogodenko.smm' target='_blank' rel='noreferrer'>@lykhogodenko.smm</a>
                    </li>
                    <li className='contact__list-item'>
                      <a href='https://www.tiktok.com/@vasylynalykhogodenko' target='_blank' rel='noreferrer'>Vasylyna Lykhogodenko</a>
                    </li>
                    <li className='contact__list-item'>
                      <a href='https://www.pinterest.com/vasylynalykhogodenko/' target='_blank' rel='noreferrer'>vasylynalykhogodenko</a>
                    </li>
                    <li className='contact__list-item'>
                      <a href='https://www.youtube.com/channel/UCE4KMC9_uFt8rJfuporIiUw' target='_blank' rel='noreferrer'>@vasylyna.lykhogodenko</a>
                    </li>
                    <li className='contact__list-item'>
                      <a href='https://www.linkedin.com/in/vasylyna-lykhogodenko/' target='_blank' rel='noreferrer'>Vasylyna Lykhogodenko</a>
                    </li>
                </ul>
            </section>
    </>
  )
}
