import React from 'react';
import { createRoot } from 'react-dom/client';
import CountButton  from './components/CountButton';
import './styles/global.css'

// console.log(App)
const Project = () => {
        return (
                <div>
                    <CountButton incrementBy={1} buttonColor={"yellow"}/>
                    <CountButton incrementBy={5} buttonColor={"green"}/>
                </div>
        )
}
 
let rootEl = document.getElementById('root');
 
let root = createRoot(rootEl);

root.render(<Project/>)
