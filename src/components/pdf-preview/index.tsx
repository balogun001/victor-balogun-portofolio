import { useState } from 'react';
import { HiFolderDownload } from 'react-icons/hi';
import { IoShareSocialSharp } from 'react-icons/io5';
import { Document, Page, pdfjs } from 'react-pdf';
import classNames from 'classnames';
import Link from 'next/link';

import { useWindowSize } from '@/hooks/useWindowSize';
import { generateArray } from '@/utils/generateArray';

import { ClipboardCopy } from '../clipboard-copy';
import { IconButton } from '../icon-button';
import { Modal } from '../modal';
import { SocialShare } from '../social-share';
import { Tooltip } from '../tooltip';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  src: string;
};
export const PdfPreview = ({ src }: Props) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [openShareModal, setOpenShareModal] = useState(false);
  const { width } = useWindowSize();
  const defaultHeight = 1200;
  function onDocumentLoadSuccess(num: number) {
    setNumPages(num);
  }

  return (
    <div
      className={classNames(
        'w-max max-w-full overflow-hidden border border-gray-200',
        {
          'h-[1200px]': !(width < defaultHeight),
          'h-[500px]  sm:h-[800px]': width < defaultHeight,
        }
      )}>
      <Modal
        onClose={() => setOpenShareModal(false)}
        open={openShareModal}
        title="Share my resume">
        <div className="flex flex-wrap gap-6 md:gap-8">
          <SocialShare iconWrapper={IconButton} url={src} />
        </div>
        <div className="mt-6">
          <ClipboardCopy text={src} />
        </div>
      </Modal>
      <div className="flex justify-end gap-2 bg-silver px-4 py-1">
        <Tooltip content="Share">
          <IconButton
            className="!border-none"
            onClick={() => setOpenShareModal(true)}>
            <IoShareSocialSharp className="h-5 w-5 fill-black" />
          </IconButton>
        </Tooltip>
        <Tooltip content="Download">
          <Link download href={src}>
            <IconButton className="!border-none">
              <HiFolderDownload className="h-5 w-5 fill-black" />
            </IconButton>
          </Link>
        </Tooltip>
      </div>
      <div className="h-full overflow-auto">
        <Document
          file={src}
          loading={() => (
            <div
              className={classNames(
                'flex w-[700px] max-w-full items-center justify-center',
                {
                  'h-[500px]': !(width < defaultHeight),
                  'h-[500px]  sm:h-[800px]': width < defaultHeight,
                }
              )}>
              Loading
            </div>
          )}
          onLoadProgress={(data) => console.log(data)}
          onLoadSuccess={({ numPages }) => onDocumentLoadSuccess(numPages)}>
          {numPages &&
            generateArray(numPages).map((num: number) => (
              <Page
                height={defaultHeight}
                key={num}
                pageNumber={num}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={width < defaultHeight ? width - 30 : undefined}
              />
            ))}
        </Document>
      </div>
    </div>
  );
};
