import { useState } from 'react';

import Menu from './components/Menu/Menu.jsx';
import ThemeSelector from './components/ThemeSelector/ThemeSelector.jsx';

function App() {
    const [theme, setTheme] = useState('');

    function handleThemeChange(event) {
        setTheme(event.target.value);
    }

    return (
        <main>
            <Menu />
            <header>
                <h1>Music Player</h1>
            </header>

            <ThemeSelector
                theme={theme}
                onThemeChange={handleThemeChange}
            />
        </main>
    );
}

export default App;