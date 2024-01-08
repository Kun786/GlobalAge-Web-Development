interface IStoreData {
    id: number,
    title: string,
    description: string,
    exhibition_history: string,
    image: string,
}

interface IOne {
    _id: number,
    status: boolean
}

interface ITwo {
    _selectionId: number,
    name: string
} 
export{
    IStoreData,
    IOne,
    ITwo
}