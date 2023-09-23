import React, { createContext, useContext, useState } from 'react';
import AddItemModal from './components/AddModal/AddModal';
import DeleteItemModal from './components/DeleteModal/DeleteModal';
import { fileSystemStore } from './store/store';

const ModalContext = createContext<unknown>(null);
interface ModalProps {
	children: any;
}

export const ModalProvider: React.FC<ModalProps> = ({ children }) => {

	

	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [parId, setParId] = useState(fileSystemStore.rootFolder.id)






	const openAddModal = () => {
		setIsAddModalOpen(true);
	};

	const closeAddModal = () => {
		setIsAddModalOpen(false);
	};

	const openDeleteModal = () => {
		setIsDeleteModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsDeleteModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				openAddModal,
				openDeleteModal,
				closeAddModal,
				closeDeleteModal,
				parId,
				setParId,
			}}
		>
			{children}
			<AddItemModal
				isOpen={isAddModalOpen}
				onClose={closeAddModal}
				parId={parId}
			/>
			<DeleteItemModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
		</ModalContext.Provider>
	);
};

export const useModalStore = () => {
	return useContext(ModalContext);
};
