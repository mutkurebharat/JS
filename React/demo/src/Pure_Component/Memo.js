import React from 'react'

const Memo = () => {
    console.log("Pure Functional Component")
    return (
        <h1>Pure Functional Component</h1>
    )
}

export default React.memo(Memo);