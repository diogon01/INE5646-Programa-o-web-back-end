import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAircraftValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    model: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'aircraft', column: 'model' })
    ]),
    weight: schema.number(),
    max_payload: schema.number(),
    ip_rating: schema.string(),
    max_flight_time: schema.number(),
    bateria: schema.object().members({
      id: schema.number(),
      model: schema.string(),
      voltage: schema.string(),
      capacity: schema.number(),
      energy: schema.number(),
      weight: schema.number(),
      max_charging_power: schema.number(),
  })
})

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
 
}
