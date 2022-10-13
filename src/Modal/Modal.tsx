import { Modal } from 'antd';
import React, {FC, useContext, useState} from 'react';
import {Notification} from "../Notification/Notification";
import './Modal.scss'
import {NoteContext} from "../NoteContext/NoteContext";

const ModalC: FC<{onOk: any, open: any, onCancel: any}> = ({onOk, open, onCancel}) => {

  const {notifications} = useContext(NoteContext)

    return (
        <Modal title="Notifications" open={open} onOk={onOk} onCancel={onCancel}>
          {notifications.filter((item) => !item.done).length ? <Notification/> : <h3>Notifications list empty</h3>}
        </Modal>
    );
};

export default ModalC;