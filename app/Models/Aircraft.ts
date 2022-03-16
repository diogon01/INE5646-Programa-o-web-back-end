import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aircraft extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public model: string

  @column()
  public max_payload: number

  @column()
  public weight: number

  @column()
  public motor_model: string

  @column()
  public ip_rating: string

  @column()
  public max_flight_time: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
