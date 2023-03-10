/**
 * @param {String} str
 * @return {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor', 'wuchi']
  return valid_map.includes(str.trim())
}