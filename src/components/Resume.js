"use client";
import React, { useEffect, useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import Image from "next/image";
import Link from "next/link";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Define the PDF document component
function MyDocument() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return "loading";
  return (
    <div id="Work">
      <div className="hidden md:flex justify-center">
        <Link href="/resume.pdf" target="_blank">
          <div className="relative inline-block mx-auto">
            <div className="transition duration-300 ease-in-out transform hover:blur-sm cursor-pointer">
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
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              Click to open
            </div>
          </div>
        </Link>
      </div>
      <div className="md:hidden flex justify-center">
        <Link href="/resume.pdf" target="_blank">
          <div className="relative inline-block cursor-pointer mx-auto">
            <Image src="/snapshot2.png" alt="resume" width={300} height={400} />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2">
              Tap to open
            </div>
          </div>
        </Link>
      </div>
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
