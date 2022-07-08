import QrScanner from 'qr-scanner'
import React, { useRef } from 'react'
import { MdQrCodeScanner } from 'react-icons/md'
import { ListButton } from 'tailwind-mobile/react'
type Props = {
  src: string
  setSrc: (src: string) => void
}
QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js'
const QRCodeFileUpload = ({ src, setSrc }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const file = e.target.files[0]
    if (!file) {
      return
    }
    QrScanner.scanImage(file)
      .then((result) => setSrc(result))
      .catch((e) => alert('No QR code founded :('))
  }
  return (
    <ListButton onClick={() => inputRef.current?.click()}>
      <MdQrCodeScanner />
      &nbsp;Read QR code from file
      <input
        type="file"
        onChange={onUpload}
        style={{ display: 'none' }}
        ref={inputRef}
      />
    </ListButton>
  )
}

export default QRCodeFileUpload
