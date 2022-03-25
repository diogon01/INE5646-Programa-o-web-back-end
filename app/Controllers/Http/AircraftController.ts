import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Aeronave from 'App/Models/Aircraft'
import CreateAircraftValidator from 'App/Validators/CreateAircraftValidator';

export default class AircraftController {
    public async store({ request, response }: HttpContextContract) {
        const aeronave = new Aeronave();
        const payload = await request.validate(CreateAircraftValidator)
        payload.charger_id = payload.bateria.id;
        await aeronave.fill(payload).save();

        response.send(aeronave);
    }

    public async index({ request, response }: HttpContextContract) {

        const page = request.param('nrPagina', 1);
        const limit = request.param('tamPagina', 20);

        const aeronaves = await Database.from('aircraft')
            .paginate(page, limit)

        //const aeronave = await Aeronave.all();
        response.send(aeronaves);

    }

    public async show({ request, response }: HttpContextContract) {
        const aeronave = await Aeronave.findOrFail(request.param('id'));
        await aeronave.load('bateria');

        response.send(aeronave);
    }

    public async update({ request, response }: HttpContextContract) {
        try {
            const aeronave = await Aeronave.findOrFail(request.param('id'));
            const payload = await request.validate(CreateAircraftValidator)
            payload.charger_id = payload.bateria.id
            await aeronave.merge(payload).save();
            response.send(aeronave)
        } catch (err) {
            console.log(err);
        }
    }

    public async destroy({ request, response }: HttpContextContract) {
        const aeronave = await Aeronave.findOrFail(request.param('id'));
        await aeronave.delete();
        response.send(request.param('id'))

    }

}
