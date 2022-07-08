import React from 'react'
import QRCode from 'qrcode.react'
import { Button } from 'konsta/react'
import { MdModeEdit } from 'react-icons/md'
import { useSetAtom } from 'jotai'
import { codeInFormAtom, ICode } from '../../atoms'
import DeleteCodeButton from './DeleteCodeButton'
import ShareCodeButton from './ShareCodeButton'
import { useRouter } from 'next/dist/client/router'
import { ROUTES } from 'lib/router'

type Props = {
  code: ICode
}

const DEFAULT_SIZE = 200

const CodeContent = ({ code }: Props) => {
  const setCodeInForm = useSetAtom(codeInFormAtom)
  const { push } = useRouter()
  const onEditClick = () => {
    push(ROUTES.FORM)
    setCodeInForm(code)
  }
  return (
    <div className="grid w-full place-items-center">
      <div className="grid gap-4 p-4 rounded-md">
        <div className="grid text-3xl text-gray-100 place-items-center">
          {code.title}
        </div>
        <div
          style={{
            width: DEFAULT_SIZE,
            height: DEFAULT_SIZE,
          }}
        >
          <QRCode
            value={code.src}
            level="Q"
            size={DEFAULT_SIZE}
            bgColor="#212121"
            fgColor="#ffffff"
          />
        </div>
        <div className="flex gap-4">
          <DeleteCodeButton id={code.id} />
          <ShareCodeButton code={code} />
          <Button
            onClick={onEditClick}
            colors={{
              bg: 'bg-indigo-700',
            }}
          >
            <MdModeEdit />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CodeContent
