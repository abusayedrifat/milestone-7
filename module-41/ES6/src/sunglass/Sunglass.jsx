
import './Sunglass.css'
import Watch from '../watch/Watch';
import { add, multiplay, divideFirstNumberByTheSecondNUmber as divide } from '../utils/calculate';

const Sunglass = () => {

    const num1 = 25 
    const num2 = 35 
    const sum = add(num1, num2);
    const multi = multiplay(num1, num2);
    const vaag = divide(num1, num2)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;