import { Typography } from '@material-tailwind/react'
import { Card } from '@material-tailwind/react'
import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function Body({ children, title, subtitle }: Props) {
  return (
    <Card className="rounded-t-lg h-full p-8 flex flex-col items-center  justify-items-center min-h-screen">
      <Typography variant="h4" color="blue-gray" className="mb-2 capitalize">
        {title}
      </Typography>
      <Typography color="gray" className="font-normal">
        Can you help me out? you will get a lot of free exposure doing this can
        my website be in english?. There is too much white space do less with
        more, so that will be a conversation piece can you rework to make the
        pizza look more delicious other agencies charge much lesser can you make
        the blue bluer?. I think we need to start from scratch can my website be
        in english?, yet make it sexy i&apos;ll pay you in a week we don&apos;t
        need to pay upfront i hope you understand can you make it stand out
        more?. Make the font bigger can you help me out? you will get a lot of
        free exposure doing this that&apos;s going to be a chunk of change other
        agencies charge much lesser. Are you busy this weekend? I have a new
        project with a tight deadline that&apos;s going to be a chunk of change.
        There are more projects lined up charge extra the next time.
      </Typography>
      {children}
    </Card>
  )
}
