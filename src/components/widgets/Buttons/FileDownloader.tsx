'use client';

import { useState } from 'react';

interface FileDownloaderProps {
  url: string;
  filename?: string;
  label?: string;
}

export default function FileDownloader({
  url,
  filename = 'downloaded-file',
  label = 'Download'
}: FileDownloaderProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch file');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download error:', err);
      alert('Could not download file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="bg-blue-600 text-white md:px-6 px-4 md:py-6 py-4 md:text-xl text-lg rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? 'Loading...' : label}
    </button>
  );
}
