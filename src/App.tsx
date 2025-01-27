import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Window, WindowHeader, WindowContent, CloseButton } from './components/Window';
import { Taskbar, StartButton } from './components/Taskbar';
import { Button } from './components/Button';

function App() {
  const [isWindowOpen, setIsWindowOpen] = useState(true);

  return (
    <>
      <GlobalStyles />
      <div style={{ height: '100vh', padding: '20px' }}>
        {isWindowOpen && (
          <Window style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <WindowHeader>
              <span>Welcome to Windows 98</span>
              <CloseButton onClick={() => setIsWindowOpen(false)}>×</CloseButton>
            </WindowHeader>
            <WindowContent>
              <p style={{ marginBottom: '10px' }}>Hello! This is a Windows 98 style React app.</p>
              <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
            </WindowContent>
          </Window>
        )}
      </div>
      <Taskbar>
        <StartButton>
          <span>Start</span>
        </StartButton>
      </Taskbar>
    </>
  );
}

export default App;