/**
 * bugsy module.
 *
 * @module src/renameMe
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
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
  // TODO: Fix the bug(s) in this function to get the tests to pass.
  const fullname = getNames()
  let theSuspect
  // const name = names.next().value
  const initialsOfTheName = getInitials(fullname)

  for (const name of fullname) {
    if (initials === initialsOfTheName) {
      theSuspect = name
      return theSuspect
    }
  }
  //  while (name)
}
