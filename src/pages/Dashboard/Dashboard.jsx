import React, { useEffect, useState } from 'react'
import { getDocs, collection, Doc, where, query, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebase'
import './DashStyle.css'

const Dashboard = () => {

    const [entryList, setEntryList] = useState([])
    const entriesCollectionRef = collection(db, 'workData')

    
        const deleteEntry = async (id) => {
            const entryDoc = doc(db, 'workData', id)
            await deleteDoc(entryDoc)
        }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const getEntries = async () => {
                    try {
                        const currentUserID = user.uid;
                        const querySnapshot = await query(entriesCollectionRef, where("author.id", "==", currentUserID));
                        const docSnap = await getDocs(querySnapshot);
                        setEntryList(docSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    } catch (error) {
                        console.error("Error fetching entries:", error);
                    }
                };
                getEntries();
            } else {
                console.warn("No user signed in.");
            }
        });

        return unsubscribe;
    }, [deleteEntry]);




    return (
        <div className='dash-container'>
            <div className='dash-hdr'>
                <section className='section'>
                    <p>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                    <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
                </section>
                <a className='btn' href='/add-entry'>Add New Entry</a>
                <a className='btn' href='/add-entry'>Add New Disturbs</a>
            </div>
            <div>

                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Day</td>
                                <td>Place Of Work</td>
                                <td>Hours Worked</td>
                                <td>Bounses</td>
                                <td>Transportation Fees</td>
                                <td>Workers</td>
                                <td>Notes</td>
                                <td>Total</td>
                                <td>Del | Edit</td>
                            </tr>
                        </thead>
                        <tbody>
                {entryList.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.todayDate}</td>
                                <td>{entry.today}</td>
                                <td>{entry.workPlace}</td>
                                <td>{entry.hoursWorked}</td>
                                <td>{entry.bounses}</td>
                                <td>{entry.gazFee}</td>
                                <td>{entry.workers}</td>
                                <td>{entry.notes}</td>
                                <td>{Number(entry.hoursWorked) * Number(entry.hourRate) + Number(entry.gazFee)}</td>
                                <td><button className='btn-icons' onClick={() => {deleteEntry(entry.id)}}>&#9747;</button> | &#9998;</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>

                <div>
                    Total Salary : 
                    Total Hours :
                    Total Bounses : 
                </div>
            </div>
        </div>
    )
}

export default Dashboard