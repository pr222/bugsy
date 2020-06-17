/**
 * bugsy module.
 *
 * @module src/renameMe
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

import { getNames, getInitials } from './mostWanted.js'

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the first gangster whose full name matching the initials.
 *
 * @param {string} initials - The initials of the full name to be found.
 * @returns {string} The first full name found matching the initials.
 */
export function getGangster (initials) {
  for (const name of getNames()) {
    if (initials === getInitials(name)) {
      return name
    }
  }

  return 'No suspect found!'

  // // ALTERNATIVE SOLUTION I
  // // A little old school type of approach.
  // const names = getNames()
  // let name = names.next().value

  // while (name) {
  //   if (initials === getInitials(name)) {
  //     return name
  //   }

  //   name = names.next().value
  // }

  // return 'No suspect found!'

  // // ALTERNATIVE SOLUTION II
  // // An interesting solution, BUT with a drawback. The generator
  // // must be transformed to an array.
  // return Array.from(getNames())
  //   .filter(name => initials === getInitials(name))
  //   .shift() || 'No suspect found!'

  // // ALTERNATIVE SOLUTION III
  // // A variant of II
  // const [...names] = getNames()

  // return names
  //   .filter(name => initials === getInitials(name))
  //   .shift() || 'No suspect found!'
}
