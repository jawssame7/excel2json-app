import axios from 'axios';
const apiUrl: string = '/api';

export const sendFile = async (file: File) => {
  if (!file) {
    return;
  }

  const formData: FormData = new FormData();
  formData.append('file', file);

  return await axios.post(`${apiUrl}/upload`, formData);
};
