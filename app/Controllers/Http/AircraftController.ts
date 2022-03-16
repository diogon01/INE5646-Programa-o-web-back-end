import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aeronave from 'App/Models/Aircraft'
import CreateAircraftValidator from 'App/Validators/CreateAircraftValidator';

export default class AircraftController {
    public async store({request, response}: HttpContextContract){
        const aeronave = new Aeronave();
        const payload = await request.validate(CreateAircraftValidator)
        await aeronave.fill(payload).save();
        response.send(aeronave);
    }
}
