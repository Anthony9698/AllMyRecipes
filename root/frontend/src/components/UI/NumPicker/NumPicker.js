import classes from './numPicker.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as SubIcon } from '../../../assets/sub.svg';

const NumPicker = props => {
    return (
        <div className={classes.NumPicker}>
            <label>{props.label}</label>
            <div className={classes.Input}>
                <button onClick={() => props.clicked(-1)} type="button"><SubIcon /></button>
                <button className={classes.Amount} type="button">{props.amount}</button>
                <button onClick={() => props.clicked(1)} type="button"><PlusIcon /></button>
            </div>
        </div>
    );
}
export default NumPicker;