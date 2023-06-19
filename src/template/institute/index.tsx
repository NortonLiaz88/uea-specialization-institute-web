import React from 'react'
import EnhancedNavbar from '../../components/navbar'
import EnhancedCarousel from '../../components/carousel'
import Body from '../../components/body'
import EnhancedFooter from '../../components/footer'

interface Props {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function InstituteTemplate({
  children,
  title,
  subtitle
}: Props) {
  return (
    <div
      className="bg-background flex flex-col flex-1"
      style={{ paddingTop: '46rem' }}
    >
      <EnhancedNavbar />
      <div className="mx-auto max-w-screen-2xl py-12 flex flex-col items-center  justify-items-center pt-60">
        <div className="flex justify-items-center">
          <EnhancedCarousel />
        </div>
        <Body title={title} subtitle={subtitle}>
          {children}
        </Body>
      </div>
      <EnhancedFooter />
    </div>
  )
}
