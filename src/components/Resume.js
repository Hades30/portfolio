"use client";
import React, { useEffect, useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Define the PDF document component
function MyDocument() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return "loading";
  return (
    <div className="hidden md:block">
      <Document
        file="resume.pdf"
        externalLinkTarget="_blank"
        externalLinkRel="nofollow"
        className="document"
      >
        <Page
          pageNumber={1}
          renderTextLayer={false}
          height={1000}
          width={800}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

// const DownloadLink = () => (
//   <PDFDownloadLink document={<MyDocument />} fileName="Resume.pdf">
//     {({ blob, url, loading, error }) =>
//       loading ? "Loading document..." : "Download PDF"
//     }
//   </PDFDownloadLink>
// );

export default MyDocument;
