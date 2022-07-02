import "../styles/statBlock.css";
import React, { useState } from "react";
import { Card, Button, ListGroup, Popover, OverlayTrigger } from 'react-bootstrap';
function Stats({ data, name, size, alignment, monsterType, armor, HP, hitDice, speed, stats, actions, legendaryActions, savingThrows, XP, CR, senses, languages, specialAbilities, conditionImmunities, damageImmunities, damageResistances, damageVulnerabilities }) {

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

    function attackButton(action) {
        setAttackNameHit(action.name);
        setAttackNameDamage(action.name);
        let totalDamage = 0;
        let allDamageArray = [];

        let random = 1 + Math.floor(Math.random() * 20);
        setD20(random);
        let toHit = random + action.attack_bonus;
        setAttackBonus(action.attack_bonus);
        setHit(toHit);

        for (let i = 0; i < action.damage.length; i++) {
            let howManyDiceArray = [];
            let typeOfDiceArray = [];
            let additionArray = [];
            let howManyDice = 0;
            let typeOfDice = 0;
            let addition = 0;
            for (let j = 0; j < action.damage[i].damage_dice.length; j++) {
                if (action.damage[i].damage_dice[j] === 'd') {
                    var leftOffJ = j + 1;
                    break;
                } else {
                    howManyDiceArray.push(action.damage[i].damage_dice[j]);
                }
            }
            howManyDice = howManyDiceArray.join('');



            if (action.damage[i].damage_dice.includes('+') === true) {
                for (let j = leftOffJ; j < action.damage[i].damage_dice.length; j++) {
                    if (action.damage[i].damage_dice[j] === '+') {
                        leftOffJ = j + 1;
                        break;
                    } else {
                        typeOfDiceArray.push(action.damage[i].damage_dice[j]);
                    }
                }
                typeOfDice = typeOfDiceArray.join('');



                for (let j = leftOffJ; j < action.damage[i].damage_dice.length; j++) {
                    additionArray.push(action.damage[i].damage_dice[j]);
                }
                addition = additionArray.join('');



            } else {
                for (let j = leftOffJ; j < action.damage[i].damage_dice.length; j++) {
                    typeOfDiceArray.push(action.damage[i].damage_dice[j]);
                }
                typeOfDice = typeOfDiceArray.join('');
            }

            let damageCalc = 0;
            for (let i = 0; i < howManyDice; i++) {
                damageCalc += 1 + Math.floor(Math.random() * parseInt(typeOfDice, 10));
                console.log('damage roll', damageCalc);
            }
            let finalDamage = 0;
            if (addition) {
                finalDamage = parseInt(damageCalc, 10) + parseInt(addition, 10);
                console.log('addition', addition);
            } else {
                finalDamage = damageCalc;
            }
            console.log('final damage', finalDamage);
            allDamageArray.push({ damage: finalDamage, type: action.damage[i].damage_type.name, dice: action.damage[i].damage_dice });

        }
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
        setStatCheckName(name);
        let random = 1 + Math.floor(Math.random() * 20);
        setStatCheck(random + stat);
    }
    function savingThrowRoll(stat, name) {
        setSavingThrowName(name);
        let random = 1 + Math.floor(Math.random() * 20);
        if (!stat) {
            setSavingThrow(random);
        } else {
            setSavingThrow(random + stat);
        }
    }

    function clearStatRolls() {
        setStatCheckName();
        setSavingThrowName();
        setStatCheck();
        setSavingThrow();
    }
    return (
        <div id="statBlock" style={{ color: 'black' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className='customCard' style={{ width: '18rem', fontSize: '75%' }}>
                    <Card.Header as='h4'>Checks/Saving Throws</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="warning"><h5>{statCheckName} Check: {statCheck}</h5></ListGroup.Item>
                        <ListGroup.Item variant="warning"><h5>{savingThrowName} Saving Throw: {savingThrow}</h5></ListGroup.Item>
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearStatRolls()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
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
                                <ListGroup.Item variant="warning"><h5>Damage{i + 1}: {damage.damage} {damage.type}</h5> ({damage.dice})</ListGroup.Item>
                            </div>
                        )}
                    </ListGroup>
                    <div>
                        <Button onClick={() => clearDamageFunction()} variant='dark' size="sm" style={{ width: '5rem' }}>Clear</Button>
                    </div>
                </Card>
            </div>
            <br />


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <div>
                        <Card.Img fluid='true' variant="top" src="ABD.jpeg" style={{ width: '10rem' }} />
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
                                {senses.blindsight ? <div style={{ fontSize: '50%' }}> Blindsight: {senses.blindsight}</div> : null}
                                {senses.darkvision ? <div style={{ fontSize: '50%' }}>Darkvision: {senses.darkvision}</div> : null}
                                {senses.passive_perception ? <div style={{ fontSize: '50%' }}>Passive Perception: {senses.passive_perception}</div> : null}
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
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.str, 'STR')} variant="outline-dark">STR: {savingThrows.str}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.dex, 'DEX')} variant="outline-dark">DEX: {savingThrows.dex}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.con, 'CON')} variant="outline-dark">CON: {savingThrows.con}</Button></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.int, 'INT')} variant="outline-dark">INT: {savingThrows.int}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.wis, 'WIS')} variant="outline-dark">WIS: {savingThrows.wis}</Button></ListGroup.Item>
                                    <ListGroup.Item variant="warning"><Button onClick={() => savingThrowRoll(savingThrows.char, 'CHAR')} variant="outline-dark">CHAR: {savingThrows.char}</Button></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Card>
                </div>
                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <Card.Header as="h4">Special Abilities:</Card.Header>
                    <ListGroup>

                        {specialAbilities.map((ability, i) =>
                            <ListGroup.Item variant="warning" key={i}>
                                <OverlayTrigger trigger="click" placement="right" overlay={
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
                        )}

                    </ListGroup>
                </Card>
                <Card className='customCard' style={{ width: '15rem', height: '32rem' }}>
                    <Card.Header as="h4">Actions</Card.Header>
                    <ListGroup variant="flush">
                        {actions.map((action, i) =>
                            <ListGroup.Item variant="warning" key={i}>
                                <OverlayTrigger trigger="click" placement="right" overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Header as="h3">{action.name}</Popover.Header>
                                        <Popover.Body>
                                            {action.desc}
                                            <br />
                                            <br />
                                            {action.damage ?
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
                        {legendaryActions.map((action, i) =>
                            <ListGroup.Item variant="warning" key={i}>
                                <OverlayTrigger trigger="click" placement="left" overlay={
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
                        )}
                    </ListGroup>
                </Card>
            </div >
        </div >
    );
}

export default Stats;;;