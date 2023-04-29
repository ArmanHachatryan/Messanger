export interface ISelectedMessage {
    selectedMessage : string | null | undefined,
  }

export interface ISetSelectedMessage {
    setSelectedMessage : React.Dispatch<React.SetStateAction<string | null | undefined>>
  }

export interface IMessage {
    id : string,
    phoneNumber : string,
    sender : string,
    messageStatus : string,
    text : string,
    dateTime : string,
  }

export interface ISendMessage {
    sender : string,
    text : string,
    phoneNumber : string,
}