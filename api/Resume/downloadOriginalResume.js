import axios from 'axios';

const downloadOriginalResume = async (resumeUrl) => {
  const authToken = localStorage.getItem('auth_token');
  
  const config = {
    method: 'get',
    url: `https://aicvpro-api.jamreludhi.workers.dev/api/get-file/${resumeUrl}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    responseType: 'blob'
  };

  const res = await axios(config);

  const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
};

export default downloadOriginalResume;
