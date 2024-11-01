import { Link as _link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Category, Stat, StatGroup } from "../types.ts";

function RenderCategoryTabs(data: Record<string, object>) {
    const tabs = [];
    for (const cat in data["stats"]) {
        tabs.push(<Tab>{cat}</Tab>);
    }
    return <TabList>{tabs}</TabList>;
}

function RenderStats(data: Record<string, object>) {
    const tabpanels = [];
    const category = data["stats"] as Category;
    for (const cat in category) {
        const statGr: StatGroup = category[cat];
        const rows = [];
        for (const stat in statGr) {
            const info: Stat = statGr[stat];
            rows.push(
                <tr>
                    <td>
                        Icon: {info["icon"]}
                        <br />
                        {stat}
                    </td>
                    <td align="left">
                        {info["name"]}
                        <br />
                        {info["description"]}
                    </td>
                </tr>,
            );
        }
        tabpanels.push(
            <TabPanel>
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </TabPanel>,
        );
    }
    return tabpanels;
}

export function Dredmor() {
    const [content, setContent] = useState<Record<string, object>>({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/dredmor/`);
            const siteContent = await response.json();
            setContent(siteContent);
        })();
    }, []);

    return (
        <Tabs classID="tabContent">
            <TabList>
                <Tab>Items</Tab>
                <Tab>Crafts</Tab>
                <Tab>Encrusts</Tab>
                <Tab>Skills</Tab>
                <Tab>Spells</Tab>
                <Tab>Monsters</Tab>
                <Tab>Stats</Tab>
                <Tab>Templates</Tab>
                <Tab>Meta</Tab>
                <Tab>Search</Tab>
                <Tab>About</Tab>
                <Tab>Mods</Tab>
            </TabList>
            <TabPanel>The Items'd be here, but INVENTORY FULL</TabPanel>
            <TabPanel>Craftily Crafted Craftings</TabPanel>
            <TabPanel>I said ENCRUSTS, not UNCRUSTABLES</TabPanel>
            <TabPanel>Please place skillpoints here</TabPanel>
            <TabPanel>Magic Schmagic, just use fireball</TabPanel>
            <TabPanel>Their only crime is being ugly...</TabPanel>
            <TabPanel>
                <Tabs>
                    {RenderCategoryTabs(content)}
                    {RenderStats(content)}
                </Tabs>
            </TabPanel>
            <TabPanel>
                These are where the magic happens, literally
            </TabPanel>
            <TabPanel>Some people call this "Miscellanea"</TabPanel>
            <TabPanel>
                Ask and you shall receive. Unless it's pewter.
            </TabPanel>
            <TabPanel>
                This looks like a great place to place my own info
            </TabPanel>
            <TabPanel>Enable, disable and add mods you'd like.</TabPanel>
        </Tabs>
    );
}
