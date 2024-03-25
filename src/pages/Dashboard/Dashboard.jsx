import React from 'react'
import NewEntry from '../../components/NewEntry/NewEntry'
import './DashStyle.css'
const Dashboard = () => {
    return (
        <div className='dash-container'>Dashboard
            <NewEntry />
        </div>
    )
}

export default Dashboard