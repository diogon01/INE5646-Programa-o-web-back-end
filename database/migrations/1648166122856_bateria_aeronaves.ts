import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aircraft extends BaseSchema {
  protected tableName = 'aircraft'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('charger_id').unsigned().references('charger.id')
      // Deleta Gimbal Installations, quando a areonave for deletada
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('charger_id')
    })
  }
}
