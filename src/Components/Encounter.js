import React, { useState } from 'react';
import { Card, ListGroup, Dropdown, DropdownButton, OverlayTrigger, Popover, Button } from 'react-bootstrap';
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
                            <OverlayTrigger trigger="click" placement="right" overlay={
                                <Popover id="popover-basic">
                                    <Popover.Header as="h4">Add to Encounter</Popover.Header>
                                    <Popover.Body style={{ display: 'flex' }}>
                                        Health: {monster.health}
                                    </Popover.Body>
                                </Popover>
                            }>
                                <Button variant="dark" style={{ height: '2.5rem', width: '6.5rem', fontSize: '40%' }}>{monster.name}</Button>
                            </OverlayTrigger>
                            {/* <h6>{monster.name}</h6>
                            < div style={{ display: 'flex', fontSize: '1rem' }}>
                                Health: {monster.health} 

                            </div> */}
                        </ListGroup.Item>
                    )
                    }
                </div >
            </Card >
        </div >

    );
}

export default Encounter;