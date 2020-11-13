import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from "../components/Form";
import { FireBaseContext } from "../context/firebase/firebaseContext";

export const AddNewNote = () => {
    const {fetchNotes} = useContext(FireBaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="jumbotron jumbotron-fluid">
            <Fragment>
                <h1 className="display-4 title text-center">ADD NEW NOTE</h1>
                <Form/>
            </Fragment>
        </div>
    )
}