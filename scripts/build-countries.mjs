// Regenerates public/api/countries/countries.json from states.json and the
// flag SVGs in public/api/countries/flags/. Run with: pnpm api:countries
//
// To refresh the flags themselves, download flag-icons (e.g. `npm pack flag-icons`
// in a temp folder), then copy its flags/4x3 and flags/1x1 folders and LICENSE
// (as LICENSE.txt) into public/api/countries/flags/ before running this script.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const API_DIR = new URL('../public/api/countries/', import.meta.url);
const FLAG_BASE = 'https://dg-inclass.github.io/api/countries/flags';

const states = JSON.parse(readFileSync(new URL('states.json', API_DIR), 'utf8')).data;
const flags = new Set(
  readdirSync(new URL('flags/4x3/', API_DIR)).map(file => file.replace(/\.svg$/, ''))
);

const data = states.map(({ iso2, iso3, name }) => {
  const code = iso2.toLowerCase();
  return {
    iso2,
    iso3,
    name,
    flag: flags.has(code)
      ? { rect: `${FLAG_BASE}/4x3/${code}.svg`, square: `${FLAG_BASE}/1x1/${code}.svg` }
      : null,
  };
});

writeFileSync(
  new URL('countries.json', API_DIR),
  JSON.stringify({ error: false, msg: 'countries retrieved', data })
);

const missing = data.filter(c => !c.flag).map(c => `${c.iso2} (${c.name})`);
console.log(`Wrote ${data.length} countries to countries.json`);
if (missing.length) console.log(`No flag for: ${missing.join(', ')}`);
