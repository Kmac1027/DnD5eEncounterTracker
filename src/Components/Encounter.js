import React, { useState } from 'react';
import { Card, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import "../styles/statBlock.css";
function Encounter({ addToEncounterArray, setAddToEncounterArray }) {
    const [condition, setCondition] = useState('Normal');


    return (
        <div>
            <Card className='customCard' style={{ width: '36rem', fontSize: '75%' }}>
                <Card.Header as='h4' className='customCard'>Encounter</Card.Header>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {addToEncounterArray.map((monster, i) =>

                        <ListGroup.Item key={i} style={{ border: 'solid', borderColor: 'black' }}>
                            <h6>{monster.name}</h6>
                            < div style={{ display: 'flex', fontSize: '1rem' }}>
                                Health: {monster.health} /
                                Condition:<DropdownButton variant='warning' size="sm" id="dropdown-basic-button" title={condition}>
                                    <Dropdown.Item onClick={() => setCondition('Poisoned')}>Poisoned</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setCondition('Paralyzed')}>Paralyzed</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setCondition('Doomed')}>Doomed</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </ListGroup.Item>
                    )
                    }
                </div >
            </Card >
        </div >

    );
}

export default Encounter;