import { createContext, useState, useContext } from "react";

const Context = createContext();

const Notification = ({severity, message}) => {

    const notificationStyle = {
        position: 'absolute',
        display: 'flex',
        bottom: '20px',
        right: '5%',
        width: '90%',
        zIndex: '5000'
    }

    let classSelector = 'alert-info'

    switch(severity) {
        case 'success': classSelector = 'alert-success'; break;
        case 'error': classSelector = 'alert-danger'; break;
        default: classSelector = 'alert-info'
    }

    if(message === '' )
        return null

    return (
        <div className={`alert ${classSelector} fade show`} style={notificationStyle}>
            {message}
        </div>
    )
}

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 7000)
    }

    return (
        <Context.Provider value={setNotification}>
            <Notification severity={severity} message={message}/>
            {children}
        </Context.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(Context)
}