import { Home } from 'features/home'
import MetaData from 'features/MetaData'
import { ROUTES } from 'lib/router'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { Popup, Page, Navbar, Link } from 'tailwind-mobile/react'

export const AnimatedPopup: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { push, pathname } = useRouter()
  const show = pathname !== ROUTES.HOME

  return (
    <>
      <MetaData />
      <Home />
      <Popup opened={show} onBackdropClick={() => push(ROUTES.HOME)}>
        <Page>
          <Navbar
            right={
              <Link navbar onClick={() => push(ROUTES.HOME)}>
                Close
              </Link>
            }
          />
          {pathname !== ROUTES.HOME && children}
        </Page>
      </Popup>
    </>
  )
}
