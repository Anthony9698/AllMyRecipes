import React, { useState } from 'react';
import classes from './servings.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as SubIcon } from '../../../assets/sub.svg';

const Servings = () => {
    const [amount, setAmount] = useState(1);
    const numInRange = x => (Math.sign(x) === -1 && amount !== 1) ||
                            (Math.sign(x) === 1 && amount !== 99);
    const toggleAmount = x => numInRange(x) ? setAmount(prevAmt => prevAmt + x) : amount;

    return (
        <div className={classes.Servings}>
            <button onClick={() => toggleAmount(-1)}><SubIcon /></button>
            <button className={classes.Amount}>{amount}</button>
            <button onClick={() => toggleAmount(1)}><PlusIcon /></button>
        </div>
    );
}
export default Servings;