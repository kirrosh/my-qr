import { Home } from 'features/home'
import MetaData from 'features/MetaData'
import { ROUTES } from 'lib/router'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { Popup, Page, Navbar, Link } from 'konsta/react'

export const AnimatedPopup: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { push, pathname } = useRouter()
  const show = pathname !== ROUTES.APP

  return (
    <>
      <MetaData />
      <Home />
      <Popup opened={show} onBackdropClick={() => push(ROUTES.APP)}>
        <Page>
          <Navbar
            right={
              <Link navbar onClick={() => push(ROUTES.APP)}>
                Close
              </Link>
            }
          />
          {pathname !== ROUTES.APP && children}
        </Page>
      </Popup>
    </>
  )
}

export default AnimatedPopup