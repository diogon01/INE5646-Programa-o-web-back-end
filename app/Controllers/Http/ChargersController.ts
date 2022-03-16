import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bateria from 'App/Models/Charger'

export default class ChargersController {
    public async index({response}: HttpContextContract){
        const baterias = await Bateria.all();
        response.send(baterias)
    }
}
