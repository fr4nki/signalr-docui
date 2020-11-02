export type ConnectionStruct = Record<
string,
Record<string, string | Record<string, string>>
>

export type ConnectionHandlerPayloadNamed = {
  [key: string]: 'number' | 'string';
}

export type ConnectionHandlerPayloadFull = {
  [key: string]: {
    type: 'number' | 'string',
    description: string;
  }
}

export type ConnectionHandlerPayloadLine = 'string' | 'number' | null;

export type ConnectionHandlerPayload = (
  ConnectionHandlerPayloadNamed |
  ConnectionHandlerPayloadFull |
  ConnectionHandlerPayloadLine
)[];

export type ConnectionHandlerAction = {
  method: string;
  description: string;
  payload: ConnectionHandlerPayload;
}

export interface ConnectionHandler {
  sender: ConnectionHandlerAction;
  listener: ConnectionHandlerAction;
  description?: string;
}

export interface ConnectionAbout {
  description?: string;
  name?: string;
}

export interface ConnectionConfig {
  endpoint: string;
  about?: ConnectionAbout;
  handlers: ConnectionHandler[],
  structs?: ConnectionStruct;
}
