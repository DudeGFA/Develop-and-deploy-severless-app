import { decode } from 'jsonwebtoken'

import { JwtPayload } from './JwtPayload'
import { createLogger } from '../utils/logger'

const logger = createLogger('createTodo');

/**
 * Parse a JWT token and return a user id
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
export function parseUserId(jwtToken: string): string {
  logger.info("parsing user id")
  const decodedJwt = decode(jwtToken) as JwtPayload
  return decodedJwt.sub
}

export function getToken(authHeader: string): string {

    logger.info("getting token")
    if (!authHeader) {
      throw new Error('No authentication header');
    }
  
    if (!authHeader.toLowerCase().startsWith('bearer ')) {
      throw new Error('Invalid authentication header');
    }
  
    const split = authHeader.split(' ');
    const token = split[1];
  
    return token;
}