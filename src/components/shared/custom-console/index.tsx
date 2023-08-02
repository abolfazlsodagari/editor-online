import React, { useState, useEffect } from "react";

const CustomConsole: React.FC = () => {
  // logs state
  const [logs, setLogs] = useState<string[]>([]);
  // set logs
  useEffect(() => {
    // getting console items
    const originalConsoleLog = window.console.log;
    const originalConsoleError = window.console.error;
    const originalConsoleWarn = window.console.warn;
    const originalConsoleInfo = window.console.info;

    // set console items
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
    window.console.info = (...args: any[]) => {
      originalConsoleInfo(...args);
      setLogs((prevLogs) => [...prevLogs, `INFO: ${args.join(" ")}`]);
    };

    // return console items
    return () => {
      window.console.log = originalConsoleLog;
      window.console.error = originalConsoleError;
      window.console.warn = originalConsoleWarn;
      window.console.info = originalConsoleInfo;
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2>console:</h2>
        {/* clear console action */}
        <button className="text-red-600 font-bold" onClick={() => setLogs([])}>
          clear
        </button>
      </div>
      {/* console logs */}
      <div className="bg-slate-800 rounded-md w-full h-[300px] overflow-y-auto text-white p-2">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default CustomConsole;
