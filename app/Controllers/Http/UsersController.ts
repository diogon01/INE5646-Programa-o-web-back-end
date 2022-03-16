import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator';



export default class UsersController {
  public async index({ }: HttpContextContract) { }

  public async create({ }: HttpContextContract) {

  }

  public async store({ request, response }: HttpContextContract) {

    const user = new User();
    // Insere no banco de dados
    await user.fill(request.body()).save();
    response.send(user);
  }

  public async show({ request, response }: HttpContextContract) {
    const user = await User.find(request.param('id'));
    response.send(user);
  }

  public async update({ request, response }: HttpContextContract) {

    try {
      const user = await User.findOrFail(request.param('id'));
      const payload = await request.validate(UpdateUserValidator)
      await user.merge(payload).save();
      response.send(user)
    } catch (err) {
      console.log(err);
    }

  }

  public async destroy({ }: HttpContextContract) { }

  public async login({ auth, request, response }: HttpContextContract) {

    const email = request.input('email')
    const password = request.input('password')

    // Lookup user manually
    const user = await User
      .query()
      .where('email', email)
      .firstOrFail()

    // Verify password
    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest('Invalid credentials')
    }

    // Generate token
    const token = await auth.use('api').generate(user)
    response.send(token);

  }


}
