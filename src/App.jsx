import React from 'react';
import { BaseForm } from './library_components/BaseForm.jsx';
import { PlaceholderForm } from './library_components/PlaceholderForm.jsx';

const formData = [
    {
        name:'email',
        label: 'Enter Email'
    },
    {
        name:'password',
        label:'Enter password',
        type:'password'
    }
]

const App = () => {

    return (
        <div className="app">
            <h1>This is working fine! Hello World</h1>
            <BaseForm formData = { formData }/>
            <PlaceholderForm formData = { formData } />
        </div>
    )

}

export default App;