import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Charger extends BaseSchema {
  protected tableName = 'charger'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('model')
      table.decimal('voltage', 8, 2)
      table.integer('rated_power')
      table.integer('capacity')
      table.decimal('energy', 8, 2)
      table.integer('weight')
      table.integer('max_charging_power')

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
