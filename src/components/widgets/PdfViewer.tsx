'use client';

import { useEffect, useRef } from 'react';
import 'pdfjs-dist/web/pdf_viewer.css';



export default function PdfViewer({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let renderTask: any = null;
    let cancelled = false;

    const loadPdf = async () => {
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf/pdf.worker.min.mjs';

      const pdf = await pdfjsLib.getDocument(url).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1 });

      const canvas = canvasRef.current;
      if (!canvas || cancelled) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      renderTask = page.render({ canvasContext: context, viewport });
      await renderTask.promise;
    };

    loadPdf().catch(console.error);

    return () => {
      cancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [url]);

  return (
    <div className="w-full max-w-4xl px-4 py-10">
      <canvas ref={canvasRef} className="mx-auto block" />
    </div>
  );
}
