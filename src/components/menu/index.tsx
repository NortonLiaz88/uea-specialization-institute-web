import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
}

export default function EnhancedMenu({ children }: Props) {
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
            className={`h-3.5 w-3.5 transition-transform ${openMenu ? 'rotate-180' : ''
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler {...nestedTriggers}>
            <MenuItem className="flex flex-row justify-between">
              Nested Item
              <ChevronRightIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${openNested ? 'rotate-180' : ''
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
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  )
}
