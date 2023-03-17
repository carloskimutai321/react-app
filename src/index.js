import React from 'react';
import { createRoot } from 'react-dom/client';
import CountButton  from './components/CountButton/CountButton';
import SearchBar from './components/SearchBar/SearchBar';
import './styles/global.css'

// console.log(App)
const Project = () => {
        return (
                <div>
                    <SearchBar/>
                </div>
        )
}
 
let rootEl = document.getElementById('root');
 
let root = createRoot(rootEl);

root.render(<Project/>)
