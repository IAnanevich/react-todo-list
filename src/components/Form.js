import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FireBaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState("")
    const alert = useContext(AlertContext)
    const firebase = useContext(FireBaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.AddNote(value.trim())
                .then(() => {
                    alert.show("Note created successfully", "success")
            })
                .catch(() => {
                    alert.show(" Something went wrong", "danger")
            })
            setValue('')
        } else {
            alert.show(" You don't input anything")
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note title"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>
            </div>
        </form>
    )
}