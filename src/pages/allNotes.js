import React, {Fragment, useContext} from 'react'
import {Loader} from "../components/Loader";
import {Notes} from "../components/Notes";
import {FireBaseContext} from "../context/firebase/firebaseContext";

export const AllNotes = () => {
    const {loading, notes, removeNote} = useContext(FireBaseContext)

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <Fragment>
                    <h1 className="display-4 title text-center">ALL NOTES</h1>
                    <p className="lead">{loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/>}</p>
                </Fragment>
            </div>
        </div>
    )
}