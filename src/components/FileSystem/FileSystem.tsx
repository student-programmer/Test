// FileSystem.tsx
import React from 'react';
import FolderItem from '../FolderItem/FolderItem';
import FileItem from '../FileItem/FileItem';
import { File, Folder } from '../../type/type';
import { useModalStore } from '../../context';

interface FileSystem {
	element: Folder | File;
}

const FileSystem: React.FC<FileSystem> = ({ element }) => {
	const isFolder = (item: Folder | File): boolean => {
		return 'isFolder' in item && item.isFolder;
	};
	const modal = useModalStore();

	if (isFolder(element)) {
		return (
			<ul className='file-system'>
				<FolderItem
					name={element.name}
					del={modal.openDeleteModal}
					addFolder={modal.openAddModal}
					parId={element.id}
					setId={modal.setParId}
				/>

				{element.children &&
					element.children.map(child => <FileSystem element={child} key={element.id}/>)}
			</ul>
		);
	} else {
		return (
			<ul>
				<FileItem
					name={element.name}
					del={modal.openDeleteModal}
					parId={element.id}
					setId={modal.setParId}
				/>
			</ul>
		);
	}
};

export default FileSystem;
