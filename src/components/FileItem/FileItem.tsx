import { FaFile, FaTrash } from 'react-icons/fa';

interface FileItem {
	del: () => void;
	name: string;
	parId: string;
	setId: (id: string) => void;
}

const FileItem: React.FC<FileItem> = ({ name, del, parId, setId }) => {
	const handleDel = () => {
		del();
		setId(parId);
	};

	return (
		<li className='file-item'>
			<FaFile />
			<span>{name}</span>
			<FaTrash onClick={handleDel} />
		</li>
	);
};

export default FileItem;
