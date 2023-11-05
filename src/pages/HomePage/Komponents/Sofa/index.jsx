import { useState, useEffect } from "react";
import './stylesofa.css'

export const Sofa = ({aktualniDatum}) => {
  const [dny, setDny] = useState(0);
  const [hodiny, setHodiny] = useState(0);
  const [minuty, setMinuty] = useState(0);
  const [sekundy, setSekundy] = useState(0);

  useEffect(() => {
    const aktualizujCasovač = () => {
      const timeNow = new Date();
      const narozeninySofie = new Date('2024-02-14T00:00:00Z');
      const rozdilMs = narozeninySofie - timeNow;

      const novyDny = Math.floor(rozdilMs / (1000 * 60 * 60 * 24));
      const noveHodiny = Math.floor((rozdilMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const noveMinuty = Math.floor((rozdilMs % (1000 * 60 * 60)) / (1000 * 60));
      const noveSekundy = Math.floor((rozdilMs % (1000 * 60)) / 1000);

      setDny(novyDny);
      setHodiny(noveHodiny);
      setMinuty(noveMinuty);
      setSekundy(noveSekundy);
    };

    const casovacInterval = setInterval(aktualizujCasovač, 1000);

    aktualizujCasovač();

    return () => clearInterval(casovacInterval);
  }, []);

  return (
    <div className="Sofie">
      <h1 className="sofa">Čas do narození Sofie</h1>
      <div className="timer">
        <h2>Dny</h2>
        <p><span className="days">{dny}</span> dní</p>
        <h2>Hodiny</h2>
        <p><span className="hours">{hodiny}</span> hodin <span className="minutes">{minuty}</span> minut <span className="seconds">{sekundy}</span> sekund</p>
      </div>
    </div>
  );
}




