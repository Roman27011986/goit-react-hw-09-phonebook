import { useBattery } from "react-use";
import style from './Battary.module.css';

export default function Battary() {
  const {level} = useBattery();
  const progressValue = (level * 100).toString()

    return (
        <div className={style.BattaryContainer}>
            <progress max="100" value={progressValue}></progress>
            <span>{progressValue}%</span>
        </div>
    );
};
    