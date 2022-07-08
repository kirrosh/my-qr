import { useAtom } from 'jotai'
import { ROUTES } from 'lib/router'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Button } from 'konsta/react'
import { v4 } from 'uuid'
import { codeInFormAtom, editCodeAtom, addCodeAtom } from 'features/atoms'

const INACTIVE_BUTTON_COLORS = {
  text: 'text-red-600',
  border: 'border-red-600',
  bg: 'bg-red-600',
  activeBg: 'active:bg-red-600',
  activeBgDark: 'active:bg-red-600',
  touchRipple: 'touch-ripple-red-500',
}

export const useSubmitComponent = () => {
  const [code] = useAtom(codeInFormAtom)
  const [_, editCode] = useAtom(editCodeAtom)
  const [__, addCode] = useAtom(addCodeAtom)
  const { push } = useRouter()
  const disabled = !(code?.src && code.title)
  if (code?.id) {
    const onEditClick = () => {
      if (disabled) {
        return
      }
      editCode({
        src: code.src || '',
        title: code.title || '',
        id: code.id || '',
      })
      push(ROUTES.HOME)
    }
    return (
      <Button
        onClick={onEditClick}
        colors={disabled ? INACTIVE_BUTTON_COLORS : {}}
        large
      >
        Save
      </Button>
    )
  }
  const onAddClick = () => {
    if (disabled) {
      return
    }
    addCode({
      title: code?.title || '',
      src: code?.src || '',
      id: v4(),
    })
    push(ROUTES.HOME)
  }
  return (
    <Button
      onClick={onAddClick}
      colors={disabled ? INACTIVE_BUTTON_COLORS : {}}
      large
    >
      Add
    </Button>
  )
}
