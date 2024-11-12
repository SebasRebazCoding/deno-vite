import { Source } from "./source.ts";

/**
 * A Mod is a set of files intended to modify the base game, usually to add content and new ways to play.
 * This information will be presented in the 'Mods' section, in the 'Toggle' tab.
 * A Mod stores information in a file called 'mod.xml', from similarly named fields:
 * 1. name: A string representing its name.
 * 2. rev: A string representing its revision number.
 * 3. author: A string representing its author.
 * 4. desc: A string containing the mod's description.
 * It also has a fifth field, which links a Mod to a Source:
 * 5. source_dir: A string that should match the 'dir' field of a single Source.
 */
type Mod = {
    name: string;
    rev: string;
    author: string;
    desc: string;
    source_dir: string;
};

/**
 * This function creates a Mod object from a given Source object, through its 'dir' attribute.
 */
export function ParseMod(_source: Source) {
}

/**
 * This function gathers all Mod objects from available Sources and passes them for rendering.
 */
export function AllMods() {
}
