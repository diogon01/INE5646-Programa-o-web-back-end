import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GimbalAircrafts extends BaseSchema {
  protected tableName = 'gimbal_aircrafts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('aircraft_id').unsigned().references('aircraft.id')
      table.integer('gimbal_id').unsigned().references('gimbals.id')
      table.unique(['gimbal_id', 'aircraft_id'])
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
