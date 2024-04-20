import React from 'react'



const AppointmentComfirm = ({appointment}) => {
    if (appointment.confirm==='SI'){
        return <strong className="text-red-500" >{appointment.confirm}</strong> 
    }else{
        return <strong className="text-blue-500" >{appointment.confirm}</strong> 
    }
}

export default AppointmentComfirm