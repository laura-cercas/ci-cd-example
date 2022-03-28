import React from 'react'
import './App.css'

function App() {
    const styles = {
        color: 'blue',
        marginTop: '2rem'
    }

    return (
        <div className="App">
            <h1>Welcome to CI/CD tutorial</h1>
            <h2 style={styles}>Thanks for following this tutorial,
                this is the last commit</h2>
        </div>
    )
}

export default App