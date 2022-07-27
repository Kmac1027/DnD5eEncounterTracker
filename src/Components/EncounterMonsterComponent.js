import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Dropdown, DropdownButton, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import "../styles/statBlock.css";
function EncounterMonsterComponent({ addToEncounterArray, setAddToEncounterArray, monster, i }) {
    const [health, setHealth] = useState(monster.health);
    const [status, setStatus] = useState('Normal');
    const [statusButtonColor, setStatusButtonColor] = useState('secondary');
    const [monsterButtonColor, setMonsterButtonColor] = useState('dark');

    useEffect(() => {
        if (status === "Normal") {
            setStatusButtonColor('secondary');
            setMonsterButtonColor('dark');
        } else if (status === "Frightened" || status === "Deafened" || status === "Paralyzed") {
            setStatusButtonColor('warning');
            setMonsterButtonColor('warning');
        } else if (status === "Incapacitated" || status === "Unconscious" || status === "Exhaustion") {
            setStatusButtonColor('danger');
            setMonsterButtonColor('danger');
        } else if (status === "Poisoned" || status === "Blinded") {
            setStatusButtonColor('success');
            setMonsterButtonColor('success');
        } else if (status === "Petrified" || status === "Charmed") {
            setStatusButtonColor('info');
            setMonsterButtonColor('info');
        } else if (status === "Prone" || status === "Grappled" || status === "Restrained" || status === "Stunned") {
            setStatusButtonColor('primary');
            setMonsterButtonColor('primary');
        } else if (status === "Invisible") {
            setStatusButtonColor('');
            setMonsterButtonColor('');
        }
    }, [status]);


    function remove(id) {
        console.log(id);
        setAddToEncounterArray(current =>
            current.filter(monsterButton => {
                return monsterButton.id !== id;
            }),
        );
    };
    function sub(amount) {
        if (amount === '1') {
            setHealth(health - 1);
        } else {
            setHealth(health - 10);
        }
    }
    function add(amount) {
        if (amount === '1') {
            setHealth(health + 1);
        } else {
            setHealth(health + 10);
        }
    };


    return (
        <div>
            <ListGroup.Item style={{ border: 'solid', borderColor: 'black' }}>
                <OverlayTrigger trigger="click" placement="auto" rootClose='true' overlay={
                    <Popover id="popover-basic">
                        <Popover.Header as="h4">{monster.name}</Popover.Header>
                        <Popover.Body style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                            Health: {health}
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button variant="dark" style={{ height: '2rem', width: '2.7rem', fontSize: '60%' }} onClick={() => sub('1')}>-1</Button>
                                <Button variant="dark" style={{ height: '2rem', width: '2.7rem', fontSize: '60%' }} onClick={() => add('1')}>+1</Button>
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Button variant="dark" style={{ height: '2rem', width: '2.7rem', fontSize: '60%' }} onClick={() => sub('10')}>-10</Button>
                                <Button variant="dark" style={{ height: '2rem', width: '2.7rem', fontSize: '60%' }} onClick={() => add('10')}>+10</Button>
                            </div>
                            <br />
                            Status:
                            <br />
                            <Dropdown>
                                <Dropdown.Toggle drop='start' variant={statusButtonColor}>
                                    {status}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Normal')}>Normal</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Blinded')}>Blinded</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Charmed')}>Charmed</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Deafened')}>Deafened</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Frightened')}>Frightened</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Grappled')}>Grappled</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Incapacitated')}>Incapacitated</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Invisible')}>Invisible</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Paralyzed')}>Paralyzed</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Petrified')}>Petrified</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Poisoned')}>Poisoned</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Prone')}>Prone</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Restrained')}>Restrained</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Stunned')}>Stunned</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Unconscious')}>Unconscious</Dropdown.Item>
                                    <Dropdown.Item style={{ fontSize: '60%' }} onClick={() => setStatus('Exhaustion')}>Exhaustion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <br />
                            <Button variant="danger" style={{ height: '1.5rem', width: '3.5rem', fontSize: '50%' }} onClick={() => remove(monster.id)}>Remove</Button>
                        </Popover.Body>
                    </Popover>
                }>
                    <Button variant={monsterButtonColor} style={{ height: '2.5rem', width: '6.5rem', fontSize: '70%' }}>{monster.name} {health}</Button>
                </OverlayTrigger>
            </ListGroup.Item>
        </div>
    );
}

export default EncounterMonsterComponent;