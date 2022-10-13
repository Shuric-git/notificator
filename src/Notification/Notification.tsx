import React, {FC, useContext} from "react";
import {NoteContext} from '../NoteContext/NoteContext'
import './Notification.scss'
import {INote} from "../interfaces";

export const Notification: FC = () => {

    const {notifications, doneHandler} = useContext(NoteContext)
    return (
        <>
            {
                notifications.map((item: INote) => {
                return (!item.done &&
                    <div key={item.id} className={'note note__wrapper'}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button className='note__btn' onClick={() => doneHandler(notifications, item.id)}>Delete</button>
                    </div>
                )
                })
            }
        </>

    );
}