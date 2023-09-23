// DeleteItemModal.tsx
import React from 'react';
import Modal from 'react-modal';
// import { useMobXStore } from '../../store/context';
import { observer } from 'mobx-react-lite';
interface DeleteItemModalProps {
	isOpen: boolean;
	onClose: () => void;
	// Дополнительные пропсы, если необходимо
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = observer(({
	isOpen,
	onClose,
}) => {
    // const fileSystemStore = useMobXStore();
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

	// const handleDeleteFolder = (folderName: string) => {
	// 	fileSystemStore.deleteFolder(folderName);
	// };

	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
			<button>No, cancel</button>
			{/* <button onClick={() => handleDeleteFolder()}>Yes</button> */}
		</Modal>
	);
});

export default DeleteItemModal;
