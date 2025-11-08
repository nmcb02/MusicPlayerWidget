export default function ThemeSelector({ theme, onThemeChange, onApplyTheme }) {
    return (
        <div className="themeChooserContainer">
            <p>Select a theme:</p>
            <select name="themes" id="themes" value={theme} onChange={onThemeChange}>
                <optgroup label="Lo-fi">
                    <option value="LoFi">Amethyst LoFi</option>
                </optgroup>
                <optgroup label="OST">
                    <option value="FFvii">Final Fantasy VII</option>
                </optgroup>
                <optgroup label="Custom">
                    <option value="folder">Available soon...</option>
                </optgroup>
            </select>
            <button type="button" id="applyThemeBtn" onClick={onApplyTheme}>Apply Theme</button>
        </div>
    );
}