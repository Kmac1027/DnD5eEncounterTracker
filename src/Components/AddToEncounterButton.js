
import React from 'react';
import { Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import "../styles/statBlock.css";
function AddToEncounterButton({ addToEncounterArray, setAddToEncounterArray, name, HP, hitDice }) {


    function calculateHealth(dice, MaxOrRoll) {
        let howManyDiceArray = [];
        let typeOfDiceArray = [];
        let additionArray = [];
        let howManyDice = 0;
        let typeOfDice = 0;
        let addition = 0;
        for (let j = 0; j < dice.length; j++) {
            if (dice[j] === 'd') {
                var leftOffJ = j + 1;
                break;
            } else {
                howManyDiceArray.push(dice[j]);
            }
        }
        howManyDice = howManyDiceArray.join('');

        if (dice.includes('+') === true) {
            for (let j = leftOffJ; j < dice.length; j++) {
                if (dice[j] === '+') {
                    leftOffJ = j + 1;
                    break;
                } else {
                    typeOfDiceArray.push(dice[j]);
                }
            }
            typeOfDice = typeOfDiceArray.join('');



            for (let j = leftOffJ; j < dice.length; j++) {
                additionArray.push(dice[j]);
            }
            addition = additionArray.join('');

        } else {
            for (let j = leftOffJ; j < dice.length; j++) {
                typeOfDiceArray.push(dice[j]);
            }
            typeOfDice = typeOfDiceArray.join('');
        }
        if (MaxOrRoll === 'Max') {
            return (parseInt(howManyDice, 10) * parseInt(typeOfDice, 10)) + parseInt(addition, 10);
        }
        else {
            let hpcalc = 0;
            for (let i = 0; i < howManyDice; i++) {
                hpcalc += 1 + Math.floor(Math.random() * parseInt(typeOfDice, 10));
                // console.log('damage roll', hpcalc);
            }
            let rolledHealth = 0;
            if (addition) {
                rolledHealth = parseInt(hpcalc, 10) + parseInt(addition, 10);
                // console.log('addition', addition);
            } else {
                rolledHealth = hpcalc;
            }
            console.log('rolled health', rolledHealth);
            return parseInt(rolledHealth);
            // allDamageArray.push({health: rolledHealth, dice: action.damage_dice });


            // for (let i = 0; i < allDamageArray.length; i++) {
            //     let stringFix = parseInt(allDamageArray[i].damage, 10);
            //     totalDamage += stringFix;
            // }

        }

        // console.log(howManyDice);
        // console.log(typeOfDice);
        // console.log(addition);

    }




    function addMonsterToEncounter(hp, hitdice, name, hpAmount) {
        let health;
        if (hpAmount === 'Max') {
            // console.log(hitdice);
            health = calculateHealth(hitdice, 'Max');
        } else if (hpAmount === 'Roll') {
            health = calculateHealth(hitdice, 'Roll');
        } else {
            health = hp;
        }

        let addedMonster = { name: name, health: health, id: Math.random() };
        setAddToEncounterArray(current => [...current, addedMonster]);
    }

    return (
        <div style={{ margin: '5px' }} >
            <OverlayTrigger rootClose='true' trigger="click" placement="auto" overlay={
                <Popover id="popover-basic">
                    <Popover.Header as="h4">Add to Encounter</Popover.Header>
                    <Popover.Body style={{ display: 'flex' }}>
                        <Button onClick={() => addMonsterToEncounter(HP, hitDice, name, 'Max')} style={{ margin: '5px' }} variant='dark'>Max Health</Button>
                        <Button onClick={() => addMonsterToEncounter(HP, hitDice, name, 'Roll')} style={{ margin: '5px' }} variant='dark'>Roll Health</Button>
                        <Button onClick={() => addMonsterToEncounter(HP, hitDice, name, 'Average')} style={{ margin: '5px' }} variant='dark'>Average Health</Button>
                    </Popover.Body>
                </Popover>
            }>
                <Button variant="dark" style={{ height: '2.5rem', width: '6.5rem', fontSize: '40%' }}>Add to Encounter</Button>
            </OverlayTrigger>
        </div>

    );
}

export default AddToEncounterButton;