import React from 'react'
import { useParams } from 'react-router-dom'
import Contact from '../contact/Contact'



export  function User(props) {
     const {userid} = useParams()

    return (
        <>
            <div>
                user : {userid}
            </div>
        </>
    )
}
