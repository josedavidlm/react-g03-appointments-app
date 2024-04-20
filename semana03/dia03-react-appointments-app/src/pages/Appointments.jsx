import { useState } from "react"
import AppointmentsForm from "../components/appoinments/AppointmentsForm"
import AppointmentsList from "../components/appoinments/AppointmentsList"

const Appointments = () => {
  const INITIAL_APPOINTMENTS = [
    {
      id: '1',
      petName: 'Hermosa',
      petAge: '2',
      ownerName: 'Victor',
      appointmentDate: '',
      appointmentTime: '',
      symptoms: 'Duerme mucho',
      confirm:'No'
    }
  ]
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
    confirm:''
  }
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)  

  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const [modificacion, setModificacion] = useState(0)

  const handleSaveAppointment = (form) => {
    const id = form.id    

    console.log('modificacion -01')
    console.log(modificacion)

    console.log('form')
    console.log(form)
    console.log('appointments')
    console.log(appointments)

    const actualizadoAppointments = appointments.map(appointment =>       
      {  
        if (appointment.id ===id){                  
          return form
        }
        return appointment
      }
      )

    console.log('modificacion -02')
    console.log(modificacion)

    console.log(actualizadoAppointments)

    
    if  (modificacion  === 1){
      setAppointments([...actualizadoAppointments])

    } else{
      setAppointments([...appointments, form])
    }    
    setModificacion(0)
  }

  const handleRemove = (appointment) => {
    const id = appointment.id

    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  const handleConfirm = (appointment) => {
    const id = appointment.id
    const newAppointments = appointments.map(appointment =>       
      {  
        if (appointment.id ===id){
          if (appointment.confirm==='SI'){
            appointment.confirm='NO'
          }else{
            appointment.confirm='SI'
          }
          
        }
        return appointment
      }
      )    
    setAppointments(newAppointments)
  }

  const handleEdit = (appointment) => {
    setModificacion(1)
    setForm (appointment)
  }


  

  return (
    <>
      <AppointmentsForm
        form={form}
        setForm={setForm}
        onSaveAppointment={handleSaveAppointment}     
        INITIAL_FORM_STATE={INITIAL_FORM_STATE}  
        modificacion={modificacion} 
      />

      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
        onConfirmAppointment={handleConfirm}
        onEdit={handleEdit}
      />
    </>
  )
}

export default Appointments