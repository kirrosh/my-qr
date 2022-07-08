import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Button } from 'tailwind-mobile/react'
import { deleteCodeAtom } from '../../atoms'

type Props = {
  id: string
}

const DeleteCodeButton = ({ id }: Props) => {
  const [_, deleteCode] = useAtom(deleteCodeAtom)
  const [sure, setSure] = useState(false)
  const onDeleteClick = () => {
    if (!sure) {
      setSure(true)
    } else {
      deleteCode(id)
    }
  }

  useEffect(() => {
    const timeout = (() => {
      if (sure) {
        return setTimeout(() => setSure(false), 3000)
      }
    })()
    return () => timeout && clearTimeout(timeout)
  }, [sure])
  return (
    <Button onClick={onDeleteClick} className="bg-red-600">
      <MdDelete />
      {sure ? ' ???' : ''}
    </Button>
  )
}

export default DeleteCodeButton
