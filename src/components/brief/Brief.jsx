import React, { useState, useEffect } from 'react';

import './Brief.scss';

export default function Brief () {
  const [formOpened, setFormOpened] = useState(false);

  useEffect(() => {
    if (formOpened) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [formOpened]);

  const openForm = () => {
    setFormOpened(true);
  };

  return (
    <div>
      <button style={{letterSpacing: '0.1rem',fontSize:'13.5px',fontWeight:'400',cursor:'pointer',background:'transparent',border:'none','color':'#072856','--hover-color':'#1151ab','--hover-opacity':0.5}} className='brief-btn' onClick={openForm}>Request a Service</button>
      {formOpened && (
        <div data-tf-live="01HHMRQ96JV1XA80Q3YVY7R1WH"></div>
      )}
    </div>
  );
};
