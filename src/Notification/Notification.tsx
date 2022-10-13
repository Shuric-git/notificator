import React, {FC, useContext} from "react";
import {INote, NoteContext} from '../App'
import './Notification.scss'
// import NoteContext from '../App'

export const Notification: FC<{notifications: INote[], doneHandler: (notes: INote[], id: number) => void}> = ({notifications, doneHandler}) => {

    const notes = useContext(NoteContext)
    return (
        <>
            {
                notes.notifications.map((item: INote) => {
                return (!item.done &&
                    <div key={item.id} className={'note__wrapper'}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button onClick={() => doneHandler(notifications, item.id)}>Delete</button>
                    </div>
                )
                })
            }
        </>

    );
}