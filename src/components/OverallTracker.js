import React, {useState} from 'react';

const OverallTracker = (props) => {
const {aliveRicks, aliveMortys} = props;

    return (
        <div>
            There are currently {aliveRicks} Ricks alive and {aliveMortys} alive Mortys we know about in the multiverse
            <div>
                <br></br>
            </div>
        </div>
    )
}

export default OverallTracker;