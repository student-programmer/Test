
import './App.css';
import FileSystem from './components/FileSystem/FileSystem';

import { MobXProvider, useMobXStore } from './store/context';
import { ModalProvider } from './context';

function App() {
		const fileSystemStore = useMobXStore();
	return (
		<MobXProvider>
			<ModalProvider>
				<div className='App'>
					<div className='file_system'>
						{' '}
						<FileSystem
							element={fileSystemStore.rootFolder}
						/>
					</div>
				</div>
			</ModalProvider>
		</MobXProvider>
	);
}

export default App;
