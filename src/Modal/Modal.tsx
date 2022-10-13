import { Modal } from 'antd';
import React, {FC, useState} from 'react';
import {Notification} from "../Notification/Notification";

const ModalC: FC<{onOk: any, open: any, onCancel: any}> = ({onOk, open, onCancel}) => {


    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
            <Notification notifications={notes} doneHandler={doneHandler}/>
        </Modal>
    );
};

export default ModalC;