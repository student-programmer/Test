import React from 'react';
import { FaFolder, FaPlus, FaTrash } from 'react-icons/fa';
// import { useModalStore } from '../../context';

interface FolderItem {
	del: () => void;
	addFolder: () => void;
	name: string;
	parId: string;
	setId: (id: string) => void;
}

const FolderItem: React.FC<FolderItem> = ({ name, del, addFolder, parId, setId}) => {



	const handlerClick = () => { 
		setId(parId)
		addFolder()
	}
	
	return (
		<li className='folder-item'>
			<FaFolder />
			<span>{name}</span>
			<FaPlus onClick={handlerClick} />
			<FaTrash onClick={del} />
		</li>
	);
};

export default FolderItem;
