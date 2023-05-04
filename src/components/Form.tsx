import React, {FormEvent, useState} from "react"
import { HelloProps } from "../types/formDataTypes"


export const Form = () => {
    const [formData, setFormData] = useState<HelloProps>({firstName:'', lastName:'',age: 0})

    const handleFormSubmit =(e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()


    }
    
    return (
        <>
        <form action="submit">
            <input type="text" 
            placeholder="First name" 
            onChange={e => setFormData({...formData,firstName: e.target.value})}/>

            <input type="text"  
            placeholder= "Last name" 
            onChange={e => setFormData({...formData,lastName: e.target.value})}/>

            <input type="number"  
            placeholder= "Age-optional" 
            onChange={e => setFormData({...formData,age:Number(e.target.value)})}/>

            <button type="submit" 
            onClick = {(e) => handleFormSubmit(e)}>Send Form</button>
            </form>
        </>
    )
}
