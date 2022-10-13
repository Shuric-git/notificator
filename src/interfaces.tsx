interface INote{
  id: number,
  title: string,
  body: string,
  done: boolean,
}

interface INoteData{
  notifications: INote[],
  doneHandler: (notes: INote[], id: number) => void,
}

export type { INote, INoteData }