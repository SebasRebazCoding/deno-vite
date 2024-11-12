import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export function NoFiles() {
    return (
        <Tabs classID="tabContent">
            <TabList>
                <Tab>Nothing...</Tab>
                <Tab>About</Tab>
                <Tab>Mods</Tab>
            </TabList>
            <TabPanel>
                Base game files expected, but none found. Please refer to the
                'Mods' section.
            </TabPanel>
            <TabPanel>
                Me, myself and I.
            </TabPanel>
            <TabPanel>
                Please follow these instructions to upload your game file.
                <ol>
                    <li>Locate your Dungeons of Dredmor folder.</li>
                    <li>
                        Locate the following folders:
                        <ul>
                            <li>dungeon</li>
                            <li>game</li>
                            <li>items</li>
                            <li>skills</li>
                            <li>sprites</li>
                            <li>ui</li>
                        </ul>
                    </li>
                    <li>
                        Compress the folders using your software of choice.
                        <ul>
                            <li>Name your file "data".</li>
                            <li>
                                Make sure to use either 'zip', 'rar' or '7zip'
                                as format.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Use the following to upload it, then press "Upload".
                    </li>
                </ol>
                <form action="">
                    <label htmlFor="upload">Insert Base Game files here</label>
                    <input type="file" id="upload" accept=".zip, .rar, .7zip" />
                    <button type="submit">Upload</button>
                </form>
            </TabPanel>
        </Tabs>
    );
}
