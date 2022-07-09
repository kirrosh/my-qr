import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Button } from 'konsta/react'
import { deleteCodeAtom } from '../../atoms'

type Props = {
  id: string
  disabled?: boolean
}

const DeleteCodeButton = ({ id, disabled }: Props) => {
  const [_, deleteCode] = useAtom(deleteCodeAtom)
  const [sure, setSure] = useState(false)
  const onDeleteClick = () => {
    if (disabled) return
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
    <Button
      onClick={onDeleteClick}
      colors={{
        bg: 'bg-red-600',
        activeBg: 'bg-red-700',
        activeBgDark: 'bg-red-700',
      }}
    >
      <MdDelete />
      {sure ? ' ???' : ''}
    </Button>
  )
}

export default DeleteCodeButton
