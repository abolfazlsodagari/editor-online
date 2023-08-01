import React, { useState, useEffect } from "react";

const CustomConsole: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Override the console methods to capture messages
    const originalConsoleLog = window.console.log;
    const originalConsoleError = window.console.error;
    const originalConsoleWarn = window.console.warn;

    window.console.log = (...args: any[]) => {
      originalConsoleLog(...args);
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
    };

    window.console.error = (...args: any[]) => {
      originalConsoleError(...args);
      setLogs((prevLogs) => [...prevLogs, `ERROR: ${args.join(" ")}`]);
    };

    window.console.warn = (...args: any[]) => {
      originalConsoleWarn(...args);
      setLogs((prevLogs) => [...prevLogs, `WARNING: ${args.join(" ")}`]);
    };

    return () => {
      // Restore the original console methods when the component unmounts
      window.console.log = originalConsoleLog;
      window.console.error = originalConsoleError;
      window.console.warn = originalConsoleWarn;
    };
  }, []);

  return (
    <div>
      <h2>Console Display:</h2>
      <div>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default CustomConsole;
