// Register all modules in this file

import authentication from './authentication/'
import encounter from './encounter/'

// ─── SAME STRUCTOR ──────────────────────────────────────────────────────────────
import patient from './patient/'
import organization from './organization/'
import practitioner from './practitioner/'
// ─── END SAME STRUCTOR ──────────────────────────────────────────────────────────

import menu from './menu/'
import alexa from './alexa/'
import profile from './profile/'
import sandbox from './sandbox/'

export default {
  authentication,
  encounter,
  patient,
  organization,
  practitioner,
  menu,
  alexa,
  sandbox,
  profile,
}