import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Bateria from 'App/Models/Charger'

export default class BateriaSeeder extends BaseSeeder {
  public async run () {
    // Escreva suas consultas de banco de dados dentro do método run
    await Bateria.createMany([
      {
        model: 'TB50',
        voltage: 22.8,
        energy: 97.58,
        weight: 515,
        max_charging_power: 180,
        capacity: 4280
      },
      {
        model: 'TB55',
        capacity: 7660,
        voltage: 22.8,
        energy: 176.93,
        weight: 885,
        max_charging_power: 180
      },
      {
        model: 'TB60',
        capacity: 5935,
        voltage: 52.8,
        energy: 274,
        weight: 1350,
        max_charging_power: 1070
      },
      {
        model: 'TB47S',
        capacity: 4500,
        voltage: 22.2,
        energy: 99.9,
        weight: 595,
        max_charging_power: 180
      },
      {
        model: 'TB48S',
        capacity: 5700,
        voltage: 22.8,
        energy: 129.96,
        weight: 680,
        max_charging_power: 180
      },
    ])

  }
}
