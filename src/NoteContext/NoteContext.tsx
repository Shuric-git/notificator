import React from "react";
import {INote, INoteData} from "../interfaces";

export const NoteContext = React.createContext<INoteData>({
  doneHandler(notes: INote[], id: number): void {
  }, notifications: []
})