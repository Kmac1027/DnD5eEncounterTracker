
import React from 'react';
import { Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import "../styles/statBlock.css";
function AddToEncounterButton({ addToEncounterArray, setAddToEncounterArray, name, HP }) {

    function addMonsterToEncounter(health, name) {
        let addedMonster = { name: name, health: health };
        setAddToEncounterArray(current => [...current, addedMonster]);
    }

    return (
        <div style={{ margin: '5px' }} >
            <OverlayTrigger trigger="click" placement="right" overlay={
                <Popover id="popover-basic">
                    <Popover.Header as="h4">Add to Encounter</Popover.Header>
                    <Popover.Body style={{ display: 'flex' }}>
                        <Button onClick={() => addMonsterToEncounter(HP, name)} style={{ margin: '5px' }} variant='dark'>Max Health</Button>
                        <Button onClick={() => addMonsterToEncounter(HP, name)} style={{ margin: '5px' }} variant='dark'>Roll Health</Button>
                        <Button onClick={() => addMonsterToEncounter(HP, name)} style={{ margin: '5px' }} variant='dark'>Average Health</Button>
                    </Popover.Body>
                </Popover>
            }>
                <Button variant="dark" style={{ height: '2.5rem', width: '6.5rem', fontSize: '40%' }}>Add to Encounter</Button>
            </OverlayTrigger>
        </div>

    );
}

export default AddToEncounterButton;