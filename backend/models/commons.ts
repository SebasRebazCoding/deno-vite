import * as fs from "node:fs";
import { AllStats } from "./stats.ts";

/*
Functions, data and other such things
Many other properties across here might need them.
*/

//This just calls other data generators and loads them onto the frontend with the router's help
export default function LoadDredmor() {
    const data: {
        [key: string]: object;
    } = {
        "stats": AllStats(),
    };
    return data;
}

/**
 * This function grabs a filepath and, if it exists, checks if it is a directory.
 * If true, it also checks that it isn't empty.
 * If all checks are true, it returns true. If it failed at any moment, it returns false.
 */
export function IsDirAndNotEmpty(path: string) {
    try {
        if (fs.lstatSync(path).isDirectory()) {
            const contents = fs.readdirSync(path);
            return contents.length > 0 ? true : false;
        } else return false;
    } catch {
        return false;
    }
}
