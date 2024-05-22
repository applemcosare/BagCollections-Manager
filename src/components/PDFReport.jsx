import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode.react';

const PDFReport = ({ bags }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Bag Collection Report', 14, 20);

    const tableColumn = ['Name', 'Description', 'Price', 'QR Code'];
    const tableRows = [];

    bags.forEach((bag) => {
      const qrCanvas = document.createElement('canvas');
      QRCode.toCanvas(qrCanvas, JSON.stringify(bag));
      const qrDataUrl = qrCanvas.toDataURL();

      const bagData = [
        bag.name,
        bag.description,
        `$${bag.price}`,
        { content: qrDataUrl, styles: { halign: 'center' } }
      ];

      tableRows.push(bagData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      didDrawCell: (data) => {
        if (data.column.index === 3 && data.cell.raw) {
          const qrDataUrl = data.cell.raw;
          doc.addImage(qrDataUrl, 'PNG', data.cell.x + 2, data.cell.y + 2, 20, 20);
        }
      },
    });

    doc.save('bag_collection_report.pdf');
  };

  return (
    <div className="pdf-report">
      <button onClick={generatePDF}>Generate PDF Report</button>
    </div>
  );
};

export default PDFReport;
