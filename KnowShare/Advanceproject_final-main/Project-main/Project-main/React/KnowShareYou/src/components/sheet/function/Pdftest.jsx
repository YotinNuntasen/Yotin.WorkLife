import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
function Pdftest() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
    <Document file="'../../public/filepdf/pdf1.pdf'" onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
    <p>
      Page {pageNumber} of {numPages}
    </p>
  </div>
  )
}

export default Pdftest
