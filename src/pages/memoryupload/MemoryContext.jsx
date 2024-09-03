import React, { createContext, useState, useMemo } from 'react';

export const MemoryContext = createContext();

export function MemoryProvider({ children }) {
  const [memories, setMemories] = useState([]);

  const addMemory = (newMemory) => {
    setMemories((prevMemories) => [...prevMemories, newMemory]);
  };

  const contextValue = useMemo(
    () => ({
      memories,
      addMemory,
      setMemories,
    }),
    [memories],
  );

  return <MemoryContext.Provider value={contextValue}>{children}</MemoryContext.Provider>;
}
