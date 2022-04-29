import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import './sheet.styles.scss';
import { 
    addUnitToSheet,
    clearSheet
} from '../../redux/sheet/sheet.actions';
import { IUnit, IUnitCheckbox } from '../../redux/unit/unit.types';

import Unit from '../unit/unit.component';

const Sheet:React.FC = () => {
    const units: Array<IUnit | IUnitCheckbox> = useAppSelector(state => state.sheet.units)
    const dispatch = useAppDispatch()
    return (
        <div className='sheet'>
            <button onClick={() => dispatch(addUnitToSheet())}>Add unit</button>
            <button onClick={()=>dispatch(clearSheet())}>Clear sheet</button>
            {
                units.map((unit: IUnit, i:number) => (<Unit unit={ unit } index={ i } key={ `unit-${ i }` } />))
            }
        </div>
    )
}

export default Sheet;