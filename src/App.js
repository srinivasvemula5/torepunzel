import { jsx as _jsx } from "react/jsx-runtime";
import Land from './components/Land';
import { useState } from 'react';
function App() {
    // Keep state but prefix with _ to avoid TS6133 errors
    const [_count, _setCount] = useState(0);
    // Example: function to increment count (optional, you can use later)
    const increment = () => {
        _setCount(prev => prev + 1);
    };
    return (_jsx("div", { children: _jsx(Land, {}) }));
}
export default App;
