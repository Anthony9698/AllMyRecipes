import classes from './numPicker.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as SubIcon } from '../../../assets/sub.svg';

const NumPicker = props => {
    return (
        <div className={classes.NumPicker}>
            <label>{props.label}</label>
            <div className={classes.Wrapper}>
                <button onClick={() => props.clicked(-1)}><SubIcon /></button>
                <button className={classes.Amount}>{props.amount}</button>
                <button onClick={() => props.clicked(1)}><PlusIcon /></button>
            </div>
        </div>
    );
}
export default NumPicker;