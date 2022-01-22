/* eslint-disable camelcase */

interface Credentials {
  created_at: string
  email: string
  exp: number
  expired_token?: number
  lat: number
  id: string
  is_active: boolean
  is_user: boolean
  name: string
  password: string
  phone: string
  photo?: string
  reset_token?: string
  token: string
  type: string
  updated_at: string
}

export class CredentialsModel {
  public created_at: string
  public email: string
  public exp: number
  public expired_token?: number
  public lat: number
  public id: string
  public is_active: boolean
  public is_user: boolean
  public name: string
  public password: string
  public phone: string
  public photo?: string
  public reset_token?: string
  public token: string
  public type: string
  public updated_at: string

  constructor(data: Credentials) {
    this.created_at = data.created_at
    this.email = data.email
    this.exp = data.exp
    this.expired_token = data.expired_token
    this.lat = data.lat
    this.id = data.id
    this.is_active = data.is_active
    this.is_user = data.is_user
    this.name = data.name
    this.password = data.password
    this.phone = data.phone
    this.photo = data.photo
    this.reset_token = data.reset_token
    this.token = data.token
    this.type = data.type
    this.updated_at = data.updated_at
  }
}

export default CredentialsModel
