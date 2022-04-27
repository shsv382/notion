import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import './sheet.styles.scss';
import { 
    addUnitToSheet,
    clearSheet
} from '../../redux/sheet/sheet.actions';
import { IUnit } from '../../redux/unit/unit.types';

import Unit from '../unit/unit.component';

const Sheet:React.FC = () => {
    const units = useAppSelector(state => state.sheet.units)
    const dispatch = useAppDispatch()
    return (
        <div className='sheet'>
            <button  onClick={() => dispatch(addUnitToSheet())}>Add unit</button>
            <button onClick={()=>dispatch(clearSheet())}>Clear sheet</button>
            {
                units.map((unit: IUnit, i:number) => <Unit 
                                        index={ i }
                                        />)
            }
        </div>
    )
}

export default Sheet;