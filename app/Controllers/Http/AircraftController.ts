import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aeronave from 'App/Models/Aircraft'
import AeronaveUpateValidator from 'App/Validators/AeronaveUpateValidator';
import CreateAircraftValidator from 'App/Validators/CreateAircraftValidator';

export default class AircraftController {
    public async store({request, response}: HttpContextContract){
        const aeronave = new Aeronave();
        const payload = await request.validate(CreateAircraftValidator)
        await aeronave.fill(payload).save();
        response.send(aeronave);
    }

    public async index({response}: HttpContextContract){
        const aeronave = await Aeronave.all();
        response.send(aeronave);

    }

    public async show({request, response}: HttpContextContract){
        const aeronave = await Aeronave.findOrFail(request.param('id'));
        response.send(aeronave);
    }

    public async update({request, response}: HttpContextContract){
        try {
            const aeronave = await Aeronave.findOrFail(request.param('id'));
            const payload = await request.validate(AeronaveUpateValidator)
            await aeronave.merge(payload).save();
            response.send(aeronave)
          } catch (err) {
            console.log(err);
          }
    }

    public async destroy({request, response }: HttpContextContract) { 
        const aeronave = await Aeronave.findOrFail(request.param('id'));
        await aeronave.delete();
        response.send('ok')

    }
    
}
