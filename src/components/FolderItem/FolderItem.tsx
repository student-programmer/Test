import React from 'react';
import { FaFolder, FaPlus, FaTrash } from 'react-icons/fa';

interface FolderItem {
	del: () => void;
	addFolder: () => void;
	name: string;
	parId: string;
	setId: (id: string) => void;
}

const FolderItem: React.FC<FolderItem> = ({
	name,
	del,
	addFolder,
	parId,
	setId,
}) => {
	const handlerClick = () => {
		setId(parId);
		addFolder();
	};

	const handleDel = () => {
		del();
		setId(parId);
	};

	return (
		<li className='folder-item'>
			<FaFolder />
			<span>{name}</span>
			<FaPlus onClick={handlerClick} />
			<FaTrash onClick={handleDel} />
		</li>
	);
};

export default FolderItem;
