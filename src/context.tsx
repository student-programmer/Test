import React, { createContext, useContext, useState } from 'react';
import AddItemModal from './components/AddModal/AddModal';
import DeleteItemModal from './components/DeleteModal/DeleteModal';
import { fileSystemStore } from './store/store';

interface ModalContextType {
	openAddModal: () => void;
	openDeleteModal: () => void;
	closeAddModal: () => void;
	closeDeleteModal: () => void;
	parId: string;
	setParId: React.Dispatch<React.SetStateAction<string>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
	children: any;
}

export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [parId, setParId] = useState(fileSystemStore.rootFolder.id);

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
			<DeleteItemModal
				isOpen={isDeleteModalOpen}
				onClose={closeDeleteModal}
				parId={parId}
			/>
		</ModalContext.Provider>
	);
};

export const useModalStore = () => {
	const context = useContext(ModalContext);
	if (context === undefined) {
		throw new Error('useModalStore must be used within a ModalProvider');
	}
	return context;
};
