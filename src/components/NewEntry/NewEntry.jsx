import React, { useState } from 'react'
import { InputBox } from '../InputBox/InputBox'
import './Style.css'

const NewEntry = () => {
    const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString())
    const [today, setToday] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }))

    return (
        <div className='entry-container'>
            <div className='day-data'>
                <span>{todayDate}</span>
                <span>{today}</span>
            </div>
            <div className='entry-wrapper'>
                <form>
                    <div className='left-form'>
                        <InputBox label='Work Place' inType={'text'} inPlaceHolder={'factory'} inValue={"workPlace"} inFun={''} />
                        <InputBox label='Hours Worked' inType={'number'} inPlaceHolder={'how many hours you worked today'} inValue={"workPlace"} inFun={''} />
                        <InputBox label='Bounses' inType={'number'} inPlaceHolder={'any bouns'} inValue={"workPlace"} inFun={''} />
                        <InputBox label='Transportation Fee' inType={'number'} inPlaceHolder={'car'} inValue={"workPlace"} inFun={''} />

                    </div>
                    <div className='right-form'>
                        <InputBox label='Hour Rate' inType={'number'} inPlaceHolder={'Enter the place of work or the name of the factory'} inValue={"workPlace"} inFun={''} />
                        <InputBox label='Bouns Rate' inType={'number'} inPlaceHolder={'Enter the place of work or the name of the factory'} inValue={"workPlace"} inFun={''} />
                        <InputBox label='Workers' inType={'number'} inPlaceHolder={'how many workers you got in the car'} inValue={"workPlace"} inFun={''} />
                    </div>
                    <textarea></textarea>

                </form>
            </div>
            entry
        </div>
    )
}

export default NewEntry
