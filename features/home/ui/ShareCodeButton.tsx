import React from 'react'
import { MdShare } from 'react-icons/md'
import { Button } from 'konsta/react'
import { AMPLITUDE_EVENTS, logEvent } from '../../../lib/amplitude'
import { ICode } from '../../atoms'
import isURL from 'validator/lib/isURL'

type Props = {
  code: ICode
}
const ShareCodeButton = ({ code }: Props) => {
  const onShareClick = async () => {
    try {
      if (isURL(code?.src)) {
        await navigator.share({
          url: code?.src,
        })
      } else {
        await navigator.share({
          text: code?.src,
        })
      }
      logEvent(AMPLITUDE_EVENTS.SHARE_CODE)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Button
      onClick={onShareClick}
      colors={{
        bg: 'bg-emerald-700',
      }}
    >
      <MdShare />
    </Button>
  )
}

export default ShareCodeButton
