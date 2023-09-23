
import { FaFile, FaTrash } from 'react-icons/fa';

	interface FileItem {
		del: () => void;
		name: string;
	}

const FileItem: React.FC<FileItem> = ({name, del}) => {


	return (
		<div className='file-item'>
			<FaFile />
			<span>{name}</span>
			<FaTrash onClick={del} />
		</div>
	);
};

export default FileItem;
