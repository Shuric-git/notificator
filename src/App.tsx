import { Button, Modal } from 'antd';
import React, {useContext, useEffect, useState} from 'react';
import {Notification} from "./Notification/Notification";
import Header from "./Header/Header";
import ModalC from "./Modal/Modal";
import 'antd/dist/antd.css';

 interface INote{
    id: number,
    title: string,
    body: string,
    done: boolean,
}

export type { INote }

export const NoteContext = React.createContext()
const App = () => {

    const notifications = [{
        id: 1,
        title: 'note1',
        body: 'lorem ipsum',
        done: false,
    },
    {
        id: 2,
        title: 'note2',
        body: 'lorem ipsum',
        done: false,
    },
    ]

    const secondPack = [
        {
            id: 3,
            title: 'note3',
            body: 'lorem ipsum',
            done: false,
        },
        {
            id: 4,
            title: 'note4',
            body: 'lorem ipsum',
            done: false,
        },
        {
            id: 5,
            title: 'note5',
            body: 'lorem ipsum',
            done: false,
        },
        {
            id: 6,
            title: 'note6',
            body: 'lorem ipsum',
            done: false,
        },
        {
            id: 7,
            title: 'note7',
            body: 'lorem ipsum',
            done: false,
        },
        {
            id: 8,
            title: 'note8',
            body: 'lorem ipsum',
            done: false,
        }
    ]

    const [notes, setNotes] = useState(notifications)
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setNotes(loadNotifications(notes, secondPack))
        }, 2000)
    },[])

    function counter(notifications: INote[]) {
        return notifications.filter((item) => !item.done).length
    }

    function doneHandler(notes: INote[], id: number) {
        setNotes(notes.map((item) => {
            if (item.id === id) item.done = true;
            return item;
        }))
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function loadNotifications(firstPack: INote[], secondPack: INote[]) {
        return [...firstPack, ...secondPack]
    }

    return (
        <>
            <Header counter={counter(notes)}/>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <NoteContext.Provider value={{
                notifications: notes,
                doneHandler: doneHandler,
            }}>
                <ModalC  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
            </NoteContext.Provider>
        </>
    );
};

export default App;