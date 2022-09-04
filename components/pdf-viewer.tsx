import { useRouter } from 'next/router'

type Props = {
  title: string,
  src: string
}

const PdfViewer = ({ title, src }: Props) => {
  const router = useRouter();

  return (
    <div className="pdf pt-5 mb-5">
      <div className="pdf-header mb-3">
        <div className="row">
          <div className="col-md-8">
            <h3 className="mb-2 pt-2">{title}</h3>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end">
            <div className="pdf-buttons d-flex">
              <a target="_blank" href={src} className="btn btn-outline-success me-1 align-self-center">Download</a>
              <a type="button" className="btn btn-outline-secondary align-self-center" onClick={() => router.back()}>Go Back</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pdf-container mb-5">
        <div className="pdf-viewport">
          <embed src={src + '#view=FitH'} width="100%" height="100%" type="application/pdf"></embed>
        </div>
      </div>
      <div className="pdf-footer mb-5">
        <a type="button" className="btn btn-outline-secondary" onClick={() => router.back()}>Go Back</a>
      </div>
    </div>
  )
}

export default PdfViewer;
