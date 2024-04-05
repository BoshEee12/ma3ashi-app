import React, { useState } from 'react'
import { auth, db } from '../../firebase/firebase'
import { InputBox } from '../InputBox/InputBox'
import './Style.css'
import { collection, addDoc } from 'firebase/firestore'

const NewEntry = () => {

    const workingDataCollection = collection(db, "workData")

    const [todayDate, setTodayDate] = useState('')
    const [today, setToday] = useState('')
    const [workPlace, setWorkPlace] = useState('')
    const [hoursWorked, setHoursWorked] = useState(0)
    const [bounses, setBounses] = useState(0)
    const [gazFee, setGazFee] = useState(0)
    const [hourRate, setHourRate] = useState(0)
    const [bounsRate, setBounsRate] = useState(0)
    const [workers, setWorkers] = useState('')
    const [notes, setNotes] = useState('')

    const createEntry = async () => {

        try {
            console.log("Creating entry...");
            await addDoc(workingDataCollection, {
                workPlace, hoursWorked,hourRate,bounsRate, bounses, gazFee, workers, notes, today, todayDate, author: { email: auth.currentUser.email, id: auth.currentUser.uid }
            });
            console.log("Entry created successfully!");
            window.location.href = '/dashboard'
        } catch (error) {
            console.error("Error creating entry:", error);
        }
    }


    return (
        <div className='entry-container'>
            <div className='entry-wrapper'>
                
                <section className='section'>
                    <p>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                    <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
                </section>
             
                <div className='forms-wrapper'>
                    <div className='left-form'>
                        <InputBox label='Date' inType={'text'} inPlaceHolder={'dd/mm'} inValue={todayDate} inFun={(e) => setTodayDate(e.target.value)} />
                        <InputBox label='Day' inType={'text'} inPlaceHolder={'today'} inValue={today} inFun={(e) => setToday(e.target.value)} />

                        <InputBox label='Work Place' inType={'text'} inPlaceHolder={'factory'} inValue={workPlace} inFun={(e) => setWorkPlace(e.target.value)} />
                        <InputBox label='Hours Worked' inType={'number'} inPlaceHolder={'how many hours you worked today'} inValue={hoursWorked} inFun={(e) => setHoursWorked(e.target.value)} />
                        <InputBox label='Bounses' inType={'number'} inPlaceHolder={'any bouns'} inValue={bounses} inFun={(e) => setBounses(e.target.value)} />
                        <InputBox label='Transportation Fee' inType={'number'} inPlaceHolder={'car'} inValue={gazFee} inFun={(e) => setGazFee(e.target.value)} />

                    </div>
                    <div className='right-form'>
                        <InputBox label='Hour Rate' inType={'number'} inPlaceHolder={'Enter the place of work or the name of the factory'} inValue={hourRate} inFun={(e) => setHourRate(e.target.value)} />
                        <InputBox label='Bouns Rate' inType={'number'} inPlaceHolder={'Enter the place of work or the name of the factory'} inValue={bounsRate} inFun={(e) => setBounsRate(e.target.value)} />
                        <InputBox label='Workers' inType={'text'} inPlaceHolder={'how many workers you got in the car'} inValue={workers} inFun={(e) => setWorkers(e.target.value)} />

                    </div>
                </div>
                    <div className='btn-div'>
                        <label>Notes :</label>
                    <textarea className='textar' value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>


                    <button className='btn' onClick={createEntry}>Submit Today's Entry</button>
                    </div>
            </div>

        </div>
    )
}

export default NewEntry
