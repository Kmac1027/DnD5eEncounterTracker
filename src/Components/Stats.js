import "../styles/statBlock.css";
import React, { useState } from "react";
import { Card, Button, ListGroup, Popover, OverlayTrigger, ListGroupItem } from 'react-bootstrap';
import Encounter from "./Encounter";
import AddToEncounterButton from "./AddToEncounterButton";
function Stats({ data, name, size, alignment, monsterType, armor, HP, hitDice, speed, stats, skills, actions, legendaryActions, savingThrows, XP, CR, senses, languages, specialAbilities, conditionImmunities, damageImmunities, damageResistances, damageVulnerabilities, IMG }) {

    const [d20, setD20] = useState();
    const [hit, setHit] = useState();
    const [attackBonus, setAttackBonus] = useState();
    const [damage, setDamage] = useState([]);
    const [damageTotal, setDamageTotal] = useState();
    const [attackNameHit, setAttackNameHit] = useState();
    const [attackNameDamage, setAttackNameDamage] = useState();
    const [statCheck, setStatCheck] = useState();
    const [statCheckName, setStatCheckName] = useState();
    const [savingThrow, setSavingThrow] = useState();
    const [savingThrowName, setSavingThrowName] = useState();
    const [addToEncounterArray, setAddToEncounterArray] = useState([]);
    const [statCheckD20Roll, setStatCheckD20Roll] = useState();
    const [statCheckBonus, setStatCheckBonus] = useState();

    const [saveCheckD20Roll, setSaveCheckD20Roll] = useState();
    const [saveCheckBonus, setSaveCheckBonus] = useState();
    const [saveCheckProficency, setSaveCheckProficency] = useState();


    function attackButton(action) {
        // console.log(action);
        setAttackNameHit(action.name);
        setAttackNameDamage(action.name);
        let totalDamage = 0;
        let allDamageArray = [];

        let random = 1 + Math.floor(Math.random() * 20);
        setD20(random);
        let toHit = random + action.attack_bonus;
        setAttackBonus(action.attack_bonus);
        setHit(toHit);
        // console.log(action.damage_dice.split(''));


        let howManyDiceArray = [];
        let typeOfDiceArray = [];
        let additionArray = [];
        let howManyDice = 0;
        let typeOfDice = 0;
        let addition = 0;
        for (let j = 0; j < action.damage_dice.length; j++) {
            if (action.damage_dice[j] === 'd') {
                var leftOffJ = j + 1;
                break;
            } else {
                howManyDiceArray.push(action.damage_dice[j]);
            }
        }
        howManyDice = howManyDiceArray.join('');

        if (action.damage_dice.includes('+') === true) {
            for (let j = leftOffJ; j < action.damage_dice.length; j++) {
                if (action.damage_dice[j] === '+') {
                    leftOffJ = j + 1;
                    break;
                } else {
                    typeOfDiceArray.push(action.damage_dice[j]);
                }
            }
            typeOfDice = typeOfDiceArray.join('');



            for (let j = leftOffJ; j < action.damage_dice.length; j++) {
                additionArray.push(action.damage_dice[j]);
            }
            addition = additionArray.join('');



        } else {
            for (let j = leftOffJ; j < action.damage_dice.length; j++) {
                typeOfDiceArray.push(action.damage_dice[j]);
            }
            typeOfDice = typeOfDiceArray.join('');
        }

        let damageCalc = 0;
        for (let i = 0; i < howManyDice; i++) {
            damageCalc += 1 + Math.floor(Math.random() * parseInt(typeOfDice, 10));
            // console.log('damage roll', damageCalc);
        }
        let finalDamage = 0;
        if (addition) {
            finalDamage = parseInt(damageCalc, 10) + parseInt(addition, 10);
            // console.log('addition', addition);
        } if (action.damage_bonus) {
            finalDamage = parseInt(damageCalc, 10) + parseInt(action.damage_bonus, 10);
        } else {
            finalDamage = damageCalc;
        }
        // console.log('final damage', finalDamage);
        let damageType;
        let split = action.desc.split(" ");
        for (let i = 0; i < split.length; i++) {
            if (split[i] === "damage") {
                damageType = split[i - 1];
            }
        }
        allDamageArray.push({ damage: finalDamage, type: damageType, dice: action.damage_dice, roll: damageCalc, bonus: action.damage_bonus });


        for (let i = 0; i < allDamageArray.length; i++) {
            let stringFix = parseInt(allDamageArray[i].damage, 10);
            totalDamage += stringFix;
        }
        setDamage(allDamageArray);
        setDamageTotal(totalDamage);
    }
    function clearHitFunction() {
        setAttackNameHit();
        setD20();
        setAttackBonus();
        setHit();
    }
    function clearDamageFunction() {
        setAttackNameDamage();
        setDamage([]);
        setDamageTotal();

    }

    function statCheckRoll(stat, name) {
        stat = Math.floor((stat - 10) / 2);
        console.log(stat);
        setStatCheckName(name);
        let random = 1 + Math.floor(Math.random() * 20);
        setStatCheck(random + stat);
        setStatCheckD20Roll(random);
        setStatCheckBonus(stat);
        // console.log('D20 Roll ', random, 'Stat Modifier: ', stat);
    }
    function savingThrowRoll(save, name, stat) {
        stat = Math.floor((stat - 10) / 2);
        setSavingThrowName(name);
        let random = 1 + Math.floor(Math.random() * 20);
        if (save) {
            setSavingThrow(random + save);
            setSaveCheckBonus('Included in Proficency');
            setSaveCheckProficency(save);
            // console.log('D20 Roll: ', random, 'Proficency bonus: ', save);
        } else {
            setSavingThrow(random + stat);
            setSaveCheckBonus(stat);
            setSaveCheckProficency("None");
            // console.log('D20 Roll ', random, 'Stat Modifier: ', stat);
        }
        setSaveCheckD20Roll(random);
    }

    function clearStatRolls() {
        setStatCheckName();
        setStatCheckD20Roll();
        setStatCheck();
        setStatCheckBonus();
    }
    function clearSaveRolls() {
        setSavingThrowName();
        setSavingThrow();
        setSaveCheckBonus();
        setSaveCheckD20Roll();
        setSaveCheckProficency();
    }
    return (
        <div id="statBlock" style={{ color: 'black' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className='customCard' style={{ width: '18rem', fontSize: '75%' }}>
                    <Card.Header as='h4'>{statCheckName} Stat Check: {statCheck}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="warning"><h5> D20 Roll: {statCheckD20Roll} </h5></ListGroup.Item>
                        <ListGroup.Item variant="warning"><h5>Stat Bonus: {statCheckBonus}</h5></ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearStatRolls()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
                    </div>
                </Card>
                <Card className='customCard' style={{ width: '18rem', fontSize: '75%' }}>
                    <Card.Header as='h4'>{savingThrowName} Saving Throw: {savingThrow} </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="warning"><h5>D20 Roll: {saveCheckD20Roll}</h5></ListGroup.Item>
                        <ListGroup.Item variant="warning"><h5>Stat Bonus: {saveCheckBonus}</h5></ListGroup.Item>
                        <ListGroup.Item variant="warning"><h5>Proficency Bonus: {saveCheckProficency} </h5></ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearSaveRolls()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
                    </div>
                </Card>


                <Card className='customCard' style={{ width: '18rem', fontSize: '75%' }}>
                    <Card.Header as='h4'>{attackNameHit} Hit: {hit}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="warning"><h5>D20 Roll: {d20}</h5></ListGroup.Item>
                        <ListGroup.Item variant="warning"><h5>Attack Bonus: {attackBonus}</h5></ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearHitFunction()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
                    </div>
                </Card>
                <Card className='customCard' style={{ width: '18rem', fontSize: '75%' }}>
                    <Card.Header as='h4'>{attackNameDamage} Damage: {damageTotal}</Card.Header>
                    <ListGroup variant="flush">
                        {damage.map((damage, i) =>
                            <div key={i}>
                                <ListGroup.Item variant="warning"><h5>Damage {i + 1}: Roll {damage.roll}  {damage.type}</h5> ({damage.dice}) <h5>Bonus {damage.bonus}</h5></ListGroup.Item>
                            </div>
                        )}
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearDamageFunction()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
                    </div>
                </Card>
                <Encounter addToEncounterArray={addToEncounterArray} setAddToEncounterArray={setAddToEncounterArray} />
            </div>
            <br />


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <div>



                        <AddToEncounterButton
                            addToEncounterArray={addToEncounterArray}
                            setAddToEncounterArray={setAddToEncounterArray}
                            name={name}
                            hitDice={hitDice}
                            HP={HP}
                        />

                        <Card.Img fluid='true' variant="top" src={IMG} style={{ width: '10rem' }} />

                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{monsterType}, {size}, {alignment}
                        </Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="warning"> <h5>AC: {armor}</h5></ListGroup.Item>
                            <ListGroup.Item variant="warning"><h5> HP: {HP}  ({hitDice})</h5></ListGroup.Item>
                            <ListGroup.Item variant="warning">
                                <div id='speed' >
                                    <h5>Speed:</h5>
                                    {speed.walk ? <div style={{ fontSize: '50%' }}>Walk: {speed.walk}</div> : null}
                                    {speed.fly ? <div style={{ fontSize: '50%' }}>Fly: {speed.fly}</div> : null}
                                    {speed.burrow ? <div style={{ fontSize: '50%' }}>Burrow: {speed.burrow}</div> : null}
                                    {speed.swim ? <div style={{ fontSize: '50%' }}>Swim: {speed.swim}</div> : null}
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <div>
                    <Card className='customCard' style={{ width: '15rem', height: '16rem' }}>
                        <Card.Header as="h4">Info</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="warning"><h6>CR: {CR} - XP: {XP}</h6></ListGroup.Item>
                            <ListGroup.Item variant="warning"><h6>Senses:</h6>
                                <p style={{ fontSize: '50%' }}>{senses}</p>
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning" style={{ fontSize: '50%' }}><h6>Languages:</h6> {languages} </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className='customCard' style={{ width: '15rem', height: '16rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="warning"><h6>Condition Immunities:</h6>
                                {conditionImmunities.map((condition, i) =>
                                    <p key={i} style={{ fontSize: '50%' }}>{condition.name}</p>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning"><h6>Damage Immunities:</h6>
                                {damageImmunities.map((typeOfDamage, i) =>
                                    <p key={i} style={{ fontSize: '50%' }}>{typeOfDamage}</p>
                                )}</ListGroup.Item>
                            <ListGroup.Item variant="warning"><h6>Damage Resist:</h6>
                                {damageResistances.map((typeOfDamage, i) =>
                                    <p key={i} style={{ fontSize: '50%' }}>{typeOfDamage}</p>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning"><h6>Damage Vulnerabilities:</h6>
                                {damageVulnerabilities.map((typeOfDamage, i) =>
                                    <p key={i} style={{ fontSize: '50%' }}>{typeOfDamage}</p>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div>
                    <Card className='customCard' style={{ width: '15rem', height: '16rem' }}>
                        <Card.Header as="h4">Stats</Card.Header>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.str, 'STR')}>STR: {stats.str}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.dex, 'DEX')}>DEX: {stats.dex}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.con, 'CON')}>CON: {stats.con}</Button></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.int, 'INT')}>INT: {stats.int}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.wis, 'WIS')}>WIS: {stats.wis}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button variant='dark' onClick={() => statCheckRoll(stats.char, 'CHAR')}>CHAR: {stats.char}</Button></ListGroup.Item>
                                </ListGroup>
                                {/* <div>Roll: {statCheck}</div> */}
                            </div>
                        </div>
                    </Card>
                    <Card className='customCard' style={{ width: '15rem', height: '16rem' }}>
                        <Card.Header as="h4">Saving Throws</Card.Header>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.str, 'STR', stats.str)} variant="outline-dark">STR: {savingThrows.str}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.dex, 'DEX', stats.dex)} variant="outline-dark">DEX: {savingThrows.dex}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.con, 'CON', stats.con)} variant="outline-dark">CON: {savingThrows.con}</Button></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.int, 'INT', stats.int)} variant="outline-dark">INT: {savingThrows.int}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.wis, 'WIS', stats.wis)} variant="outline-dark">WIS: {savingThrows.wis}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.char, 'CHAR', stats.char)} variant="outline-dark">CHAR: {savingThrows.char}</Button></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className='customCard' style={{ width: '15rem', height: '8rem' }}>
                        <Card.Header as="h4">Skills:</Card.Header>
                        <ListGroup.Item variant="warning">
                            <div>
                                {skills.athletics ? <div style={{ fontSize: '50%' }}>Athletics: {skills.athletics}</div> : null}
                                {skills.acrobatics ? <div style={{ fontSize: '50%' }}>Acrobatics: {skills.acrobatics}</div> : null}
                                {skills.sleight_of_hand ? <div style={{ fontSize: '50%' }}>Slight of Hand: {skills.sleight_of_hand}</div> : null}
                                {skills.stealth ? <div style={{ fontSize: '50%' }}>Stealth: {skills.stealth}</div> : null}
                                {skills.arcana ? <div style={{ fontSize: '50%' }}>Arcana: {skills.arcana}</div> : null}
                                {skills.history ? <div style={{ fontSize: '50%' }}>History: {skills.history}</div> : null}
                                {skills.investigation ? <div style={{ fontSize: '50%' }}>Investigation: {skills.investigation}</div> : null}
                                {skills.nature ? <div style={{ fontSize: '50%' }}>Nature: {skills.nature}</div> : null}
                                {skills.religion ? <div style={{ fontSize: '50%' }}>Religion: {skills.religion}</div> : null}
                                {skills.animal_handling ? <div style={{ fontSize: '50%' }}>Animal Handling: {skills.animal_handling}</div> : null}
                                {skills.insight ? <div style={{ fontSize: '50%' }}>Insight: {skills.insight}</div> : null}
                                {skills.medicine ? <div style={{ fontSize: '50%' }}>Medicine: {skills.medicine}</div> : null}
                                {skills.perception ? <div style={{ fontSize: '50%' }}>Perception: {skills.perception}</div> : null}
                                {skills.survival ? <div style={{ fontSize: '50%' }}>Survival: {skills.survival}</div> : null}
                                {skills.deception ? <div style={{ fontSize: '50%' }}>Deception: {skills.deception}</div> : null}
                                {skills.intimidation ? <div style={{ fontSize: '50%' }}>Intimidation: {skills.intimidation}</div> : null}
                                {skills.performance ? <div style={{ fontSize: '50%' }}>Performance: {skills.performance}</div> : null}
                                {skills.persuasion ? <div style={{ fontSize: '50%' }}>Persuasion: {skills.persuasion}</div> : null}
                            </div>
                        </ListGroup.Item>
                    </Card>
                    <Card className='customCard' style={{ width: '15rem', height: '24rem' }}>
                        <Card.Header as="h4">Special Abilities:</Card.Header>
                        <ListGroup>

                            {specialAbilities ? specialAbilities.map((ability, i) =>
                                <ListGroup.Item variant="warning" key={i}>
                                    <OverlayTrigger rootClose='true' trigger="click" placement="auto" overlay={
                                        <Popover id="popover-basic">
                                            <Popover.Header as="h3">{ability.name}</Popover.Header>
                                            <Popover.Body>
                                                {ability.desc}
                                                {ability.damage ?
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Button onClick={() => attackButton(ability)} variant="danger" size="sm">{ability.name}</Button>
                                                    </div> : null}
                                            </Popover.Body>
                                        </Popover>
                                    }>
                                        <Button variant="dark" style={{ height: '3rem', width: '8rem', fontSize: '50%' }}>{ability.name}</Button>
                                    </OverlayTrigger>
                                </ListGroup.Item>
                            ) : null}

                        </ListGroup>
                    </Card>
                </div>
                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <Card.Header as="h4">Actions</Card.Header>
                    <ListGroup variant="flush">
                        {actions.map((action, i) =>
                            <ListGroup.Item variant="warning" key={i}>
                                <OverlayTrigger rootClose='true' trigger="click" placement="auto" overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Header as="h3">{action.name}</Popover.Header>
                                        <Popover.Body>
                                            {action.desc}
                                            <br />
                                            <br />
                                            {action.damage_dice ?
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Button onClick={() => attackButton(action)} variant="danger" size="sm">{action.name}</Button>
                                                </div>
                                                : null}
                                        </Popover.Body>
                                    </Popover>
                                }>
                                    <Button variant="dark" style={{ height: '3rem', width: '8rem', fontSize: '50%' }}>{action.name}</Button>
                                </OverlayTrigger>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Card>

                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <Card.Header as="h4">Legendary Actions</Card.Header>
                    <ListGroup variant="flush">
                        {legendaryActions ? legendaryActions.map((action, i) =>
                            <ListGroup.Item variant="warning" key={i}>
                                <OverlayTrigger rootClose='true' trigger="click" placement="auto" overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Header as="h3">{action.name}</Popover.Header>
                                        <Popover.Body>
                                            {action.desc}
                                            <br />
                                            <br />
                                            {action.damage ?
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Button onClick={() => attackButton(action)} variant="danger" size="sm">{action.name}</Button>
                                                </div> : null}
                                        </Popover.Body>
                                    </Popover>
                                }>
                                    <Button variant="dark" style={{ height: '3rem', width: '8rem', fontSize: '50%' }}>{action.name}</Button>
                                </OverlayTrigger>
                            </ListGroup.Item>
                        ) : null}
                    </ListGroup>
                </Card>
            </div >
        </div >
    );
}

export default Stats;;;