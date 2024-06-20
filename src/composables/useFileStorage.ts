import { IDBPDatabase, openDB } from 'idb';

interface FileData {
  id?: number;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  content: ArrayBuffer;
}

const dbPromise = openDB<IDBPDatabase>('files-storage', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('files')) {
      db.createObjectStore('files', { keyPath: 'id', autoIncrement: true });
    }
  }
});

const readFileAsArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

export const useFileStorage = () => {
  const addFile = async (file: File): Promise<IDBValidKey> => {
    const db = await dbPromise;
    const content = await readFileAsArrayBuffer(file);
    const fileData: FileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      content
    };
    const result = await db.add('files', fileData);
    return result;
  };

  const downloadAndSaveFile = async (
    url: string,
    fileName: string
  ): Promise<IDBValidKey> => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], fileName, {
      type: blob.type,
      lastModified: Date.now()
    });
    return addFile(file);
  };

  const getFile = async (id: number): Promise<FileData | undefined> => {
    const db = await dbPromise;
    return await db.get('files', id);
  };

  const getAllFiles = async (): Promise<FileData[]> => {
    const db = await dbPromise;
    return await db.getAll('files');
  };

  const deleteFile = async (id: number): Promise<void> => {
    const db = await dbPromise;
    await db.delete('files', id);
  };

  return {
    addFile,
    downloadAndSaveFile,
    getFile,
    getAllFiles,
    deleteFile
  };
};
