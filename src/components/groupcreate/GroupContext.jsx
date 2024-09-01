import React, { createContext, useState, useMemo } from 'react';

export const GroupContext = createContext();

export function GroupProvider({ children }) {
  const [groups, setGroups] = useState([]);

  const addGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  const contextValue = useMemo(
    () => ({
      groups,
      addGroup,
    }),
    [groups],
  );

  return <GroupContext.Provider value={contextValue}>{children}</GroupContext.Provider>;
}
