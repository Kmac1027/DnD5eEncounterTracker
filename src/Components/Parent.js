import Stats from "./Stats";
import { useState } from 'react';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Autocomplete from "./Autocomplete";

var data;
var data2;
var savingThrowObj = {};
function Parent() {
    const [name, setName] = useState();
    const [size, setSize] = useState();
    const [alignment, setAlignment] = useState();
    const [monsterType, setMonsterType] = useState();
    const [armor, setArmor] = useState();
    const [HP, setHP] = useState();
    const [hitDice, setHitDice] = useState();
    const [speed, setSpeed] = useState({});
    const [stats, setStats] = useState({});
    const [savingThrows, setSavingThrows] = useState({});
    const [actions, setActions] = useState([]);
    const [legendaryActions, setLegendaryActions] = useState([]);
    const [XP, setXP] = useState();
    const [CR, setCR] = useState();
    const [senses, setSenses] = useState({});
    const [languages, setLanguages] = useState();
    const [specialAbilities, setSpecialAbilities] = useState([]);
    const [conditionImmunities, setConditionImmunities] = useState([]);
    const [damageImmunities, setDamageImmunities] = useState([]);
    const [damageResistances, setDamageResistances] = useState([]);
    const [damageVulnerabilities, setDamageVulnerabilities] = useState([]);


    const [monsterButtons, setMonsterButtons] = useState([]);



    async function getData(monster) {
        // console.log(monster);
        const response = await fetch(`https://www.dnd5eapi.co${monster.url}`);
        data = await response.json();
        populateMonsterInfo(data);
        console.log(data, 'this is the data');

        const response2 = await fetch(`https://www.dnd5eapi.co/api/monsters/druid`);
        data2 = await response2.json();
        console.log(data2);
    }

    async function populateMonsterInfo(data) {
        // const response = await fetch('https://www.dnd5eapi.co/api/monsters/adult-blue-dragon');
        // data = await response.json();
        // console.log(data);

        setName(data.name);
        setSize(data.size);
        setAlignment(data.alignment);
        setMonsterType(data.type);
        setArmor(data.armor_class);
        setHP(data.hit_points);
        setHitDice(data.hit_dice);
        setSpeed(data.speed);
        setStats({ str: data.strength, dex: data.dexterity, con: data.constitution, int: data.intelligence, wis: data.wisdom, char: data.charisma });
        setActions(data.actions);
        setLegendaryActions(data.legendary_actions);
        setXP(data.xp);
        setCR(data.challenge_rating);
        setSenses(data.senses);
        setLanguages(data.languages);
        setSpecialAbilities(data.special_abilities);
        setConditionImmunities(data.condition_immunities);
        setDamageImmunities(data.damage_immunities);
        setDamageResistances(data.damage_resistances);
        setDamageVulnerabilities(data.damage_vulnerabilities);
        //function to loop through proficiencies and filter them into proper catogories
        proficienciesLoop(data.proficiencies);
    };

    function proficienciesLoop(proficienciesArray) {
        for (let i = 0; i < proficienciesArray.length; i++) {
            // console.log(proficienciesArray[i].value);
            if (proficienciesArray[i].proficiency.name === 'Saving Throw: DEX') {
                savingThrowObj['dex'] = proficienciesArray[i].value;
            } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: CON') {
                savingThrowObj['con'] = proficienciesArray[i].value;
            } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: WIS') {
                savingThrowObj['wis'] = proficienciesArray[i].value;
            } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: CHA') {
                savingThrowObj['char'] = proficienciesArray[i].value;
            } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: INT') {
                savingThrowObj['int'] = proficienciesArray[i].value;
            } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: STR') {
                savingThrowObj['str'] = proficienciesArray[i].value;
            }
        }
        setSavingThrows(savingThrowObj);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Autocomplete monsterButtons={monsterButtons} setMonsterButtons={setMonsterButtons} />
            <br />
            {/* <div>
                <button onClick={() => getMonsterInfo()}>get</button>
            </div> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <Card className='customCard' style={{ display: 'flex' }}>
                    {
                        monsterButtons.map((button, i) =>
                            <div key={i}>
                                <Button onClick={() => getData(button)} variant='dark' >{button.name}</Button>
                                <br />
                            </div>
                        )
                    }
                </Card>
            </div >
            <br />
            <div >
                <Stats
                    data={data}
                    name={name}
                    alignment={alignment}
                    size={size}
                    monsterType={monsterType}
                    armor={armor}
                    HP={HP}
                    hitDice={hitDice}
                    speed={speed}
                    stats={stats}
                    actions={actions}
                    legendaryActions={legendaryActions}
                    savingThrows={savingThrows}
                    XP={XP}
                    CR={CR}
                    senses={senses}
                    languages={languages}
                    specialAbilities={specialAbilities}
                    conditionImmunities={conditionImmunities}
                    damageImmunities={damageImmunities}
                    damageResistances={damageResistances}
                    damageVulnerabilities={damageVulnerabilities}
                />
            </div>
        </div>
    );
}

export default Parent;