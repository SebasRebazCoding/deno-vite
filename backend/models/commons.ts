import { AllStats } from "./stats.ts";

/*
Functions, data and other such things
Many other properties across here might need them.
*/
export default function LoadDredmor() {
    const data: {
        [key: string]: object;
    } = {
        "stats": AllStats(),
    };
    return data;
}
