import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import "../styles/statBlock.css";
import EncounterMonsterComponent from './EncounterMonsterComponent';
function Encounter({ addToEncounterArray, setAddToEncounterArray }) {



    return (
        <div>
            <Card className='customCard' style={{ width: '36rem', fontSize: '75%' }}>
                <Card.Header as='h4' className='customCard'>Encounter</Card.Header>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {addToEncounterArray.map((monster, i) =>
                        <EncounterMonsterComponent key={i} addToEncounterArray={addToEncounterArray} setAddToEncounterArray={setAddToEncounterArray} monster={monster} i={i} />
                    )
                    }
                </div >
            </Card >
        </div >

    );
}

export default Encounter;