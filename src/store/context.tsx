import React, { createContext, useContext } from 'react';
import { fileSystemStore } from './store';

const MobXContext = createContext(fileSystemStore);
interface MobXProviderProps {
	children: any; 
}

export const MobXProvider: React.FC<MobXProviderProps> = ({ children }) => {
	return (
		<MobXContext.Provider value={fileSystemStore}>
			{children}
		</MobXContext.Provider>
	);
};

export const useMobXStore = () => {
	return useContext(MobXContext);
};
