import { FaFile, FaTrash } from 'react-icons/fa';
import a from './FileItem.module.css'

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
		<li className={a.file_item}>
			<FaFile />
			<span>{name}</span>
			<FaTrash onClick={handleDel} />
		</li>
	);
};

export default FileItem;
