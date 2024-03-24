import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from './schema'

const sql = neon(process.env.DATABASE_URL!)
// @ts-expect-error - there is no error in production
const db = drizzle(sql, { schema })

export default db
