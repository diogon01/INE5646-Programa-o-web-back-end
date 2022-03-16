import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GimballInstallations extends BaseSchema {
  protected tableName = 'gimball_installations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('downward')
      table.boolean('upward')
      table.boolean('downward_dual')
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
