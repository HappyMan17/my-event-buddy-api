import { ActivitiesEntity, CustomError } from '../../domain'

export class ActivitiesEntityMapper {
  /**
   * Builds a UserEntity from the db response
   * @param object
   * @returns UserEntity
   */
  static activitiesEntityFromObject (object: Record<string, any>): ActivitiesEntity {
    try {
      const { activitie_id, event_id, user_id, description, total_activity_value, percentage, amount } = object

      if (!description) throw CustomError.badRequest('Missing event id')
      if (!total_activity_value) throw CustomError.badRequest('Missing user id')

      return new ActivitiesEntity(
        activitie_id,
        event_id,
        user_id,
        description,
        total_activity_value,
        false,
        percentage,
        amount
      )
    } catch (error) {
      throw CustomError.internalServer('Missing some event fields.')
    }
  }
}
