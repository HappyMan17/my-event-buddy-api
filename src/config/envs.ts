import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  HOST: get('HOST').required().asString(),
  PORT: get('PORT').required().asInt(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),
  DB_PORT: get('DB_PORT').required().asInt(),
  JWT_SEED: get('JWT_SEED').required().asString()
}
