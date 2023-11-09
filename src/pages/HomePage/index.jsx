
import './style.css';
import { Sofa } from './Komponents/Sofa';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [aktualniDatum, setAktualniDatum] = useState(null);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Prague')
      .then((response) => response.json())
      .then((data) => {
        const timeNow = new Date(data.utc_datetime);
        setAktualniDatum(timeNow);
      })
      .catch((error) => {
        console.error('Chyba při získávání aktuálního data a času:', error);
      });
  }, []);

  return (
    <div className='hlavniDiv'>
      <h1>BEJBE kolikrát se ještě musím vyspinkat, než tu bude Sófa??</h1>
      <main>
      {aktualniDatum && <Sofa aktualniDatum={aktualniDatum} />}
      </main>
   </div>
  );
}

