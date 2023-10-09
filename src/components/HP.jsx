import React from 'react';

function HP({n = 3}) {

  switch (n) {
    case 1:
        return (
            <div className="flex">
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
            </div>
        )
    case 2:
        return (
            <div className="flex">
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
            </div>
        )
    case 3:
        return (
            <div className="flex">
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
                <i class="nes-icon heart is-medium"/>
            </div>
        )
        default:
            return (<div className="flex" />)
    }
}

export default HP;