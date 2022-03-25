import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Gimbal from './Gimbal'
import Charger from './Charger'
import GimballInstallation from './GimballInstallation'
import Bateria from './Bateria'

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
  public charger_id: number

  @column()
  public ip_rating: string

  @column()
  public max_flight_time: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Uma aeronave pode ter vários modelos de gimbals
  @manyToMany(()=> Gimbal)
  public gimbals: ManyToMany<typeof Gimbal>

  // Uma aeronave pode ter vários modelos de baterias
  @hasOne(()=> Charger)
  public bateria: HasOne<typeof Charger>

  // Uma aeronave contem um tipo instalação (Poderia ser ENUM talvez)
  @hasOne(()=> GimballInstallation)
  public gimbal_installation: HasOne<typeof GimballInstallation> 

}
