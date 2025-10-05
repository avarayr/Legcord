import type { ProcessInfo } from "arrpc";
import { For, createSignal } from "solid-js";
import { sleep } from "../../../common/sleep.js";
import { Dropdown } from "../components/Dropdown.jsx";
import classes from "./RegisteredGames.module.css";
const {
    ui: { Header, HeaderTags, Divider, Button, ButtonSizes },
} = shelter;

export function RegisteredGamesPage() {
    const [detectables, setDetectables] = createSignal<ProcessInfo[]>();
    const [selectedDetectable, setSelectedDetectable] = createSignal("");
    function getDetectables() {
        window.legcord.rpc.refreshProcessList();
        sleep(500).then(() => {
            setDetectables(window.legcord.rpc.getProcessList());
        });
    }
    getDetectables();
    function addGame() {
        // Logic to add a game
        console.log("Game added");
    }
    return (
        <>
            <Header tag={HeaderTags.H1}>Registered Games</Header>
            <Divider mt mb />
            <Header tag={HeaderTags.H2}>Legcord doesn't support adding games manually yet. Coming soon!</Header>
        </>
    );
}
