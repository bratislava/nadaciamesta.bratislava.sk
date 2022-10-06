import cx from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import MenuIcon from '../../assets/icons/menu.svg'
import SearchIcon from '../../assets/icons/search.svg'
import FoundationLogo from '../../assets/images/foundation-logo.svg'
import SearchBar from '../SearchBar'
import NavigationItem from './NavigationItem'

const searchResultTypes = {
  project: 'Podporený projekt',
  grant: 'Grantový program',
  blog: 'Blog',
  document: 'Dokument',
}

const searchResultLinks = {
  project: (id: string) => `/projects/${id}`,
  grant: (id: string) => `/grants#${id}`,
  blog: (id: string) => `/blog/${id}`,
  document: (id: string) => `/documents#${id}`,
}

const Navigation = () => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('beforeHistoryChange', () => setSearchQuery(''))
    return () => router.events.off('beforeHistoryChange', () => setSearchQuery(''))
  }, [router])

  const [isNavOpen, setNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearchResultsVisible, setSearchResultsVisible] = useState(false)
  const [isSearchModalOpen, setSearchModalOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (query) => fetch(`/search/${query}`).then((res) => res.json())

  useEffect(() => {
    if (searchQuery.length > 2) {
      search(searchQuery).then((results) => {
        setSearchResults(results)
        if (results.length > 0) {
          setSearchResultsVisible(true)
        } else {
          setSearchResultsVisible(false)
        }
      })
    } else {
      setSearchResultsVisible(false)
    }
  }, [searchQuery, setSearchResultsVisible])

  useEffect(() => {
    setNavOpen(false)
  }, [router.pathname])

  useEffect(() => {
    if (isSearchModalOpen) {
      searchInputRef?.current.focus()
    }
  }, [isSearchModalOpen])

  return (
    <>
      <div className="container relative z-20 flex items-center justify-between py-4">
        <NavigationItem url="/" className="text-primary">
          <FoundationLogo className="mb-[-6px] w-64 sm:w-96" />
        </NavigationItem>

        <div className="flex items-center gap-4 2xl:hidden">
          <button onClick={() => setSearchModalOpen(true)}>
            <SearchIcon />
          </button>
          <button className="hover:text-primary" onClick={() => setNavOpen(true)}>
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>
        <nav
          className={cx(
            'fixed top-0 left-0 bottom-0 z-40 flex transform flex-col gap-8 bg-white p-8 pr-24 transition-transform 2xl:static 2xl:transform-none 2xl:flex-row 2xl:items-center 2xl:p-0 2xl:transition-none',
            { 'translate-x-0': isNavOpen },
            { '-translate-x-full': !isNavOpen }
          )}
        >
          <NavigationItem className="2xl:hidden" url="/">
            Domov
          </NavigationItem>
          <NavigationItem url="/blog">Novinky</NavigationItem>
          <NavigationItem url="/grants">Programy</NavigationItem>
          <NavigationItem url="/projects">Podporené projekty</NavigationItem>
          <NavigationItem url="/data">Dáta</NavigationItem>
          <NavigationItem url="/documents">Dokumenty</NavigationItem>
          <NavigationItem url="/about-us">O nás</NavigationItem>
          <NavigationItem url="/contacts">Kontakty</NavigationItem>
          <button className="hidden xl:block" onClick={() => setSearchModalOpen(true)}>
            <SearchIcon />
          </button>
        </nav>
        <div
          className={cx(
            'visible fixed top-0 right-0 bottom-0 left-0 z-30 cursor-default bg-black opacity-40 transition-all 2xl:hidden',
            { 'invisible opacity-0': !isNavOpen }
          )}
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role="button"
          tabIndex={0}
        />
      </div>
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-30 flex items-start justify-center">
          <button
            onClick={() => setSearchModalOpen(false)}
            className="absolute inset-0 cursor-default bg-black bg-opacity-40"
           />
          <div className="relative mx-12 mt-32 flex w-full max-w-[700px] justify-center">
            <SearchBar
              className="w-full"
              inputRef={searchInputRef}
              onQueryChange={(query) => setSearchQuery(query)}
              onFocus={() => searchQuery.length > 2 && setSearchResultsVisible(true)}
              onBlur={() => setSearchResultsVisible(false)}
              query={searchQuery}
            />
            {isSearchResultsVisible && (
              <div className="absolute left-0 top-16 flex w-full flex-col rounded bg-white py-4 shadow-lg">
                {searchResults.map((searchResult, index) => (
                  <div className="cursor-pointer select-none" key={index}>
                    {searchResult.result.map(({ id: fullId, doc: { title, slug } }) => {
                      const type = fullId.split('-')[0]
                      const id = fullId.split('-')[1]
                      return (
                        <div
                          key={id}
                          onMouseDown={() => {
                            setSearchModalOpen(false)
                            router.push(searchResultLinks[type](slug ?? id))
                          }}
                          role="link"
                          tabIndex={0}
                        >
                          <div className="flex flex-col items-start py-2 px-8 hover:bg-gray-100 sm:flex-row">
                            <span className="mt-0.5 mr-2 whitespace-nowrap rounded bg-primary-muted px-1 text-xs uppercase text-white">
                              {searchResultTypes[type]}
                            </span>
                            <span>{title}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
