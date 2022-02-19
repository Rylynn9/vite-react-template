declare namespace API {
  export interface ResponseDataType {
    code: number;
    msg?: string;
  }
  export interface ResponseModel {
    data: ResponseDataType;
    status: number;
    headers?: Readonly<Record<string, string>>;
  }
}
