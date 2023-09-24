import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import { useMobXStore } from '../../store/context';
import { observer } from 'mobx-react-lite';
import a from './AddModal.module.css';

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
			onClose()
		};
		const handleAddFile = () => {
			fileSystemStore.addFile(parId, folderName);
			setFolderName('');
			onClose()
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

		return (
			<Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
				<input
					type='text'
					placeholder='Enter sequence name'
					value={folderName}
					onChange={changeFolder}
					className={a.add_input}
				/>
				<div className={a.add_block}>
					{' '}
					<button onClick={handleAddFolder} className={a.add_folder}>
						Add Folder
					</button>
					<button onClick={handleAddFile} className={a.add_file}>
						Add File
					</button>
				</div>
			</Modal>
		);
	}
);

export default AddItemModal;
