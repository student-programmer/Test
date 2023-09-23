export interface BaseItem {
	id: string;
	name: string;
	isFolder: boolean;
	parentId: string | null;
	children?: (Folder | File)[];
}

export interface Folder extends BaseItem {
	isFolder: true;
	children: (Folder | File)[];
}

export interface File extends BaseItem {
	isFolder: false;
}
