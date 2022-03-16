import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Gimbal from 'App/Models/Gimbal'

export default class GimbalSeeder extends BaseSeeder {
  public async run () {
    // Adicionado modelos de Gimbal na base de dados.
    await Gimbal.createMany([
      {
        model: 'Ronin-MX'
      },
      {
        model: 'Zenmuse Z30'
      },
      {
        model: 'Zenmuse X5/X5R'
      },
      {
        model: 'Zenmuse X3'
      },
      {
        model: 'Zenmuse XT'
      },
      {
        model: 'Zenmuse Z15 Series HD Gimbal: Z15-A7'
      },
      {
        model: 'Z15-5D III'
      },
      {
        model: 'Z15-GH4'
      },
      {
        model: 'Zenmuse H20'
      },
      {
        model: 'Zenmuse P1'
      },
      {
        model: 'Zenmuse L1'
      },

    ])
  }
}
