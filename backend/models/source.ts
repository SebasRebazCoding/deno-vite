import * as _fs from "node:fs";
import _source from "../data/source.json" with { type: "json" };
import { IsDirAndNotEmpty } from "./commons.ts";

/*
 * A source is a directory containing specific files to load and parse.
 * It follows the following structure:
 * 1. dir: The main directory's name, where gamefiles may be found.
 * 2. title: A string representing the source's proper name.
 * 3. tag: Nullable string that works as the title's shorthand.
 * 4. active: If set to 'true', the parsing and rendering of its contents will proceed.
 * 5. required: Nullable boolean that does what it says on the tin. If any of the sources with this property set to 'true' is missing, the program will request the user to upload files.
 */
export type Source = {
    dir: string;
    title: string;
    tag?: string;
    active: boolean;
    required?: boolean;
};

/**
 * This function will return all the available sources from a JSON file.
 */
export function GetSourcesJSON() {
}

/**
 * This one will add a source instead, requiring a folder or ZIP file containing the data.
 */
export function AddSource(_dir: string, _title: string, _tag?: string) {
}

/**
 * This function will remove a source using its title as lookup parameter.
 */
export function RemoveSource(_title: string) {
}

/**
 * This function will enable or disable sources. This affects the loading of files for rendering.
 */
export function ToggleSource(_source: Source, _enable: boolean) {
}

/**
 * This function will check if a Source has, at the very least, a 'mod.xml' file, validating it as a mod.
 */
export function CheckModXML() {
}

/**
 * This function checks if the Base Game has its proper, required folder structure.
 * The structure is as follows:
 * source_files [contains game files, expansions and mods]
 * '-data       [reserved for game files]
 *  |-dungeon   [art for traps]
 *  |-game      [contains essential XML]
 *  |-items     [has all of the item art]
 *  |-skills    [has all of the skill art]
 *  |-sprites   [contains every monster art]
 *  '-ui        [UI elements, most importantly, Stat icons]
 */
export function CheckBaseFiles() {
    // Just something to save time
    const root = "../sources/data/";
    // Synchronously check if the folders exist, then AND all values and return result.
    // This means that if at *least* one of them doesn't exist, it returns false.
    return IsDirAndNotEmpty(root + "dungeon") &&
        IsDirAndNotEmpty(root + "game") &&
        IsDirAndNotEmpty(root + "items") &&
        IsDirAndNotEmpty(root + "skills") &&
        IsDirAndNotEmpty(root + "sprites") &&
        IsDirAndNotEmpty(root + "ui");
}

/**
 * This will load ALL the sources marked as REQUIRED (base game) and ENABLED.
 */
export function AllSources() {
}
