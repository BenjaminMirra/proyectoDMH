export interface IAccount { 
  alias: string,
  available_amount: string,
  cvu: string,
  id: number,
  user_id: number
}

export interface IUser {
  firstname: string,
  lastname: string,
  phone: string,
  dni: number,
  email: string,
  password: string,
}

export interface ITransference {     
  account_id: number,
  amount: number,
  dated: string,
  description: string,
  destination: string,
  id: number,
  origin: string,
  type: string
}