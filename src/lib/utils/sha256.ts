import { createHash } from 'crypto'
import shaJs from 'sha.js'

/**
 * Calculate the sha256 digest of a string.
 *
 * ### Example (es imports)
 * ```js
 * import { sha256 } from 'typescript-starter'
 * sha256('test')
 * // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * ```
 *
 * @returns sha256 message digest
 */
export function sha256(message: any, isHex = false): any {
  return isHex
    ? shaJs('sha256').update(message).digest('hex')
    : shaJs('sha256').update(message).digest()
}

/**
 * A faster implementation of [[sha256]] which requires the native Node.js module. Browser consumers should use [[sha256]], instead.
 *
 * ### Example (es imports)
 * ```js
 * import { sha256Native as sha256 } from 'typescript-starter'
 * sha256('test')
 * // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * ```
 *
 * @returns sha256 message digest
 */
export function sha256Native(message: any, isHex = false): any {
  return isHex
    ? createHash('sha256').update(message).digest('hex')
    : createHash('sha256').update(message).digest()
}

export function sha256x2(message: any, isHex = false): any {
  const first = sha256(message, isHex)
  return sha256(first, isHex)
}
