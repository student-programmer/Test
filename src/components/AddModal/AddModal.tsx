import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import { useMobXStore } from '../../store/context';
import { observer } from 'mobx-react-lite';

interface AddItemModalProps {
	isOpen: boolean;
	onClose: () => void;
	parId: string;
}

const AddItemModal: React.FC<AddItemModalProps> = observer(
	({ isOpen, onClose, parId }) => {
		const fileSystemStore = useMobXStore();
		const [folderName, setFolderName] = useState('');

		const handleAddFolder = () => {
			fileSystemStore.addFolder(parId, folderName);
			setFolderName('');
		};
		const handleAddFile = () => {
			fileSystemStore.addFile(parId, folderName);
			setFolderName('');
		};

		const customStyles = {
			content: {
				wdith: '580px',
				height: '171px',
				background: '#333333',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			},
		};

		const changeFolder = (e: ChangeEvent<HTMLInputElement>) => {
			setFolderName(e.target.value);
		};
		console.log(fileSystemStore.rootFolder);

		return (
			<Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
				<input
					type='text'
					placeholder='Enter sequence name'
					value={folderName}
					onChange={changeFolder}
				/>
				<button onClick={handleAddFolder}>Add Folder</button>
				<button onClick={handleAddFile}>Add File</button>
			</Modal>
		);
	}
);

export default AddItemModal;
