import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aircraft extends BaseSchema {
  protected tableName = 'aircraft'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('model')
      table.decimal('max_payload', 8, 2)
      table.decimal('weight')
      table.string('motor_model')
      table.string('ip_rating')
      table.decimal('max_flight_time', 8, 2)

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
