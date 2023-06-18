import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ItemMenu {
  name: string
  items?: ItemMenu[]
}

interface Props {
  children: React.ReactNode
  items: ItemMenu[]
}

export default function EnhancedMenu({ children, items: routes }: Props) {
  const [openMenu, setOpenMenu] = React.useState(false)
  const [openNested, setOpenNested] = React.useState(false)

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false)
  }

  const nestedTriggers = {
    onMouseEnter: () => setOpenNested(true),
    onMouseLeave: () => setOpenNested(false)
  }

  return (
    <Menu>
      <MenuHandler>
        <Button
          {...triggers}
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal text-gray-600"
        >
          {children}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList>
        {routes.map((route) => {
          if (route?.items && route?.items?.length > 0) {
            return (
              <Menu placement="right-start" offset={15}>
                <MenuHandler {...nestedTriggers}>
                  <MenuItem className="flex flex-row justify-between">
                    Nested Item
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openNested ? 'rotate-180' : ''
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Nested Item 1</MenuItem>
                  <MenuItem>Nested Item 2</MenuItem>
                  <MenuItem>Nested Item 3</MenuItem>
                </MenuList>
              </Menu>
            )
          }
          return (
            <MenuItem className="flex items-center gap-3 text-base font-normal capitalize tracking-normal text-gray-600 hover:bg-green-600 active:bg-green-700">
              {route.name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
