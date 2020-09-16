// type PayloadItem = Record<string, string>
// type ConnectionHandlerPayloadItemTypes = 'string' | 'integer' | 'float' | 'any';
//
// type ConnectionHandlerPayloadItem = {
//   $type?: 'string' | 'integer' | 'float' | 'any';
//   $description?: string;
//   [k: string]?: ConnectionHandlerPayloadItem;
// }
// export type ConnectionHandlerPayload = null | Record<'$structs' | string, string | PayloadItem>;

export type ConnectionStruct = Record<
string,
Record<string, string | Record<string, string>>
>

// TODO: Need more typings
export type ConnectionHandlerPayload = null | Record<'$structs', string> | Record<string, string>;

export interface ConnectionHandler {
  sender: {
    method: string;
    description: string;
    payload: ConnectionHandlerPayload;
  };
  listener: {
    method: string;
    description: string;
    payload: ConnectionHandlerPayload;
  },
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
