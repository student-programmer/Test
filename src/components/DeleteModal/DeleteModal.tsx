import React from 'react';
import Modal from 'react-modal';
import { observer } from 'mobx-react-lite';
import { useMobXStore } from '../../store/context';
import d from './DeleteModal.module.css'

interface DeleteItemModalProps {
	isOpen: boolean;
	onClose: () => void;
	parId: string;
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = observer(
	({ isOpen, onClose, parId }) => {
		const fileSystemStore = useMobXStore();
		const customStyles = {
			content: {
				wdith: '523px',
				height: '267px',
				background: '#333333',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			},
		};

		const handleDelete = () => {
			fileSystemStore.deleteFileById(parId);
			onClose()
		};

		return (
			<Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
				<div className={d.delete_block}>
					{' '}
					<button onClick={onClose} className={d.no}>No</button>
					<button onClick={handleDelete}>Yes</button>
				</div>
			</Modal>
		);
	}
);

export default DeleteItemModal;
