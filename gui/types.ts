/*
A Stat is composed of:
1. Name: Its full name, without abbreviations
2. Description: A string with clever jokes
3. Icon: A string representing a filename
*/
export type Stat = {
    name: string;
    description: string;
    icon: string;
};

//A StatGroup is a map of Stats with IDs as keys.
//To note: the stat IDs in XML are NOT unique, so this will have to do.
export type StatGroup = {
    [id: string]: Stat;
};

//A Category is a map of StatGroups ordered by a key, which is a statCategory.
//To note: there are 4 stat categories in Dredmor
export type Category = {
    [key: string]: StatGroup;
};
