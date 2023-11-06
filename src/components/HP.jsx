import React from 'react';

function HP({currentHp = 3}) {

  switch (currentHp) {
    case 1:
        return (
            <div className="flex">
                <i className="nes-icon heart is-medium is-dark"/>
                <i className="nes-icon heart is-medium is-transparent is-dark"/>
                <i className="nes-icon heart is-medium is-transparent is-dark"/>
            </div>
        )
    case 2:
        return (
            <div className="flex">
                <i className="nes-icon heart is-medium is-dark"/>
                <i className="nes-icon heart is-medium is-dark"/>
                <i className="nes-icon heart is-medium is-transparent is-dark"/>
            </div>
        )
    case 3:
        return (
            <div className="flex">
                <i className="nes-icon heart is-medium is-dark"/>
                <i className="nes-icon heart is-medium is-dark"/>
                <i className="nes-icon heart is-medium is-dark"/>
            </div>
        )
        default:
            return (<div className="flex" />)
    }
}

export default HP;