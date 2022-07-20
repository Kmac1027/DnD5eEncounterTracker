import Stats from "./Stats";
import React, { useRef, useState, useEffect } from 'react';

import { Card, Button } from 'react-bootstrap';
import Autocomplete from "./Autocomplete";

// var data;
var allMonsterArray = [];
var allMonsterObj = {};
// var savingThrowObj = {};
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
    const [skills, setSkills] = useState({});
    const [savingThrows, setSavingThrows] = useState({});
    const [actions, setActions] = useState([]);
    const [legendaryActions, setLegendaryActions] = useState([]);
    const [XP, setXP] = useState();
    const [CR, setCR] = useState();
    const [senses, setSenses] = useState();
    const [languages, setLanguages] = useState();
    const [specialAbilities, setSpecialAbilities] = useState([]);
    const [conditionImmunities, setConditionImmunities] = useState([]);
    const [damageImmunities, setDamageImmunities] = useState([]);
    const [damageResistances, setDamageResistances] = useState([]);
    const [damageVulnerabilities, setDamageVulnerabilities] = useState([]);
    const [IMG, setIMG] = useState();


    // const [monsterButtons, setMonsterButtons] = useState([]);
    const [monsterButtons, setMonsterButtons] = useState(['1']);


    useEffect(() => {
        async function getData() {
            const response1 = await fetch(`https://api.open5e.com/monsters/?page=1`);
            let data1 = await response1.json();
            for (let i = 0; i <= data1.results.length; i++) {
                allMonsterArray.push(data1.results[i]);
            }
            const response2 = await fetch(`https://api.open5e.com/monsters/?page=2`);
            let data2 = await response2.json();
            for (let i = 0; i <= data2.results.length; i++) {
                allMonsterArray.push(data2.results[i]);
            }
            const response3 = await fetch(`https://api.open5e.com/monsters/?page=3`);
            let data3 = await response3.json();
            for (let i = 0; i <= data3.results.length; i++) {
                allMonsterArray.push(data3.results[i]);
            }
            const response4 = await fetch(`https://api.open5e.com/monsters/?page=4`);
            let data4 = await response4.json();
            for (let i = 0; i <= data4.results.length; i++) {
                allMonsterArray.push(data4.results[i]);
            }
            const response5 = await fetch(`https://api.open5e.com/monsters/?page=5`);
            let data5 = await response5.json();
            for (let i = 0; i <= data5.results.length; i++) {
                allMonsterArray.push(data5.results[i]);
            }
            const response6 = await fetch(`https://api.open5e.com/monsters/?page=6`);
            let data6 = await response6.json();
            for (let i = 0; i <= data6.results.length; i++) {
                allMonsterArray.push(data6.results[i]);
            }
            const response7 = await fetch(`https://api.open5e.com/monsters/?page=7`);
            let data7 = await response7.json();
            for (let i = 0; i <= data7.results.length; i++) {
                allMonsterArray.push(data7.results[i]);
            }
            const response8 = await fetch(`https://api.open5e.com/monsters/?page=8`);
            let data8 = await response8.json();
            for (let i = 0; i <= data8.results.length; i++) {
                allMonsterArray.push(data8.results[i]);
            }
            const response9 = await fetch(`https://api.open5e.com/monsters/?page=9`);
            let data9 = await response9.json();
            for (let i = 0; i <= data9.results.length; i++) {
                allMonsterArray.push(data9.results[i]);
            }
            const response10 = await fetch(`https://api.open5e.com/monsters/?page=10`);
            let data10 = await response10.json();
            for (let i = 0; i <= data10.results.length; i++) {
                allMonsterArray.push(data10.results[i]);
            }
            const response11 = await fetch(`https://api.open5e.com/monsters/?page=11`);
            let data11 = await response11.json();
            for (let i = 0; i <= data11.results.length; i++) {
                allMonsterArray.push(data11.results[i]);
            }
            const response12 = await fetch(`https://api.open5e.com/monsters/?page=12`);
            let data12 = await response12.json();
            for (let i = 0; i <= data12.results.length; i++) {
                allMonsterArray.push(data12.results[i]);
            }
            const response13 = await fetch(`https://api.open5e.com/monsters/?page=13`);
            let data13 = await response13.json();
            for (let i = 0; i <= data13.results.length; i++) {
                allMonsterArray.push(data13.results[i]);
            }
            const response14 = await fetch(`https://api.open5e.com/monsters/?page=14`);
            let data14 = await response14.json();
            for (let i = 0; i <= data14.results.length; i++) {
                allMonsterArray.push(data14.results[i]);
            }
            const response15 = await fetch(`https://api.open5e.com/monsters/?page=15`);
            let data15 = await response15.json();
            for (let i = 0; i <= data15.results.length; i++) {
                allMonsterArray.push(data15.results[i]);
            }
            const response16 = await fetch(`https://api.open5e.com/monsters/?page=16`);
            let data16 = await response16.json();
            for (let i = 0; i <= data16.results.length; i++) {
                allMonsterArray.push(data16.results[i]);
            }
            const response17 = await fetch(`https://api.open5e.com/monsters/?page=17`);
            let data17 = await response17.json();
            for (let i = 0; i <= data17.results.length; i++) {
                allMonsterArray.push(data17.results[i]);
            }
            const response18 = await fetch(`https://api.open5e.com/monsters/?page=18`);
            let data18 = await response18.json();
            for (let i = 0; i <= data18.results.length; i++) {
                allMonsterArray.push(data18.results[i]);
            }
            const response19 = await fetch(`https://api.open5e.com/monsters/?page=19`);
            let data19 = await response19.json();
            for (let i = 0; i <= data19.results.length; i++) {
                allMonsterArray.push(data19.results[i]);
            }
            const response20 = await fetch(`https://api.open5e.com/monsters/?page=20`);
            let data20 = await response20.json();
            for (let i = 0; i <= data20.results.length; i++) {
                allMonsterArray.push(data20.results[i]);
            }
            const response21 = await fetch(`https://api.open5e.com/monsters/?page=21`);
            let data21 = await response21.json();
            for (let i = 0; i <= data21.results.length; i++) {
                allMonsterArray.push(data21.results[i]);
            }
            const response22 = await fetch(`https://api.open5e.com/monsters/?page=22`);
            let data22 = await response22.json();
            for (let i = 0; i <= data22.results.length; i++) {
                allMonsterArray.push(data22.results[i]);
            }

            for (let k = 0; k < allMonsterArray.length; k++) {
                if (allMonsterArray[k]) {
                    allMonsterObj[allMonsterArray[k].name] = allMonsterArray[k];
                }
            }
            // console.log(Object.keys(allMonsterObj).length);
            // console.log(allMonsterObj);
        };
        getData();
    }, []);

    function populateMonsterInfo(monster) {
        // console.log(monster);
        setName(monster.name);
        setSize(monster.size);
        setAlignment(monster.alignment);
        setMonsterType(monster.type);
        setArmor(monster.armor_class);
        setHP(monster.hit_points);
        setHitDice(monster.hit_dice);
        setSpeed(monster.speed);
        setStats({ str: monster.strength, dex: monster.dexterity, con: monster.constitution, int: monster.intelligence, wis: monster.wisdom, char: monster.charisma });
        setSkills(monster.skills);
        setSavingThrows({ str: monster.strength_save, dex: monster.dexterity_save, con: monster.constitution_save, int: monster.intelligence_save, wis: monster.wisdom_save, char: monster.charisma_save });
        setActions(monster.actions);
        setLegendaryActions(monster.legendary_actions);
        setXP(monster.xp);
        setCR(monster.challenge_rating);
        setSenses(monster.senses);
        setLanguages(monster.languages);
        setSpecialAbilities(monster.special_abilities);
        setIMG(monster.img_main);
        setConditionImmunities(monster.condition_immunities.split(','));
        setDamageImmunities(monster.damage_immunities.split(','));
        setDamageResistances(monster.damage_resistances.split(','));
        setDamageVulnerabilities(monster.damage_vulnerabilities.split(','));
    };

    // function proficienciesLoop(proficienciesArray) {
    //     for (let i = 0; i < proficienciesArray.length; i++) {
    //         // console.log(proficienciesArray[i].value);
    //         if (proficienciesArray[i].proficiency.name === 'Saving Throw: DEX') {
    //             savingThrowObj['dex'] = proficienciesArray[i].value;
    //         } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: CON') {
    //             savingThrowObj['con'] = proficienciesArray[i].value;
    //         } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: WIS') {
    //             savingThrowObj['wis'] = proficienciesArray[i].value;
    //         } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: CHA') {
    //             savingThrowObj['char'] = proficienciesArray[i].value;
    //         } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: INT') {
    //             savingThrowObj['int'] = proficienciesArray[i].value;
    //         } else if (proficienciesArray[i].proficiency.name === 'Saving Throw: STR') {
    //             savingThrowObj['str'] = proficienciesArray[i].value;
    //         }
    //     }
    //     setSavingThrows(savingThrowObj);
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Autocomplete monsterButtons={monsterButtons} setMonsterButtons={setMonsterButtons} />
            <br />
            {/* <div>
                <button onClick={() => getMonsterInfo()}>get</button>
            </div> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <Card className='customCard'>
                    <Card.Header style={{ color: 'black' }}>Stat Block</Card.Header>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        {
                            monsterButtons.map((button, i) =>
                                <div key={i} style={{ padding: '5px' }}>
                                    <Button onClick={() => populateMonsterInfo(allMonsterObj['Ammut'])} variant='dark' >{button.name}</Button>
                                    {/* <Button variant='dark' >{button.name}</Button> */}
                                </div>
                            )
                        }
                    </div>

                </Card>
            </div >
            <br />
            <div >
                <Stats
                    // data={data}
                    name={name}
                    alignment={alignment}
                    size={size}
                    monsterType={monsterType}
                    armor={armor}
                    HP={HP}
                    hitDice={hitDice}
                    speed={speed}
                    stats={stats}
                    skills={skills}
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
                    IMG={IMG}
                />
            </div>
        </div>
    );
}

export default Parent;