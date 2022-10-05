import cx from 'classnames'

import NavigationItem from './NavigationItem'
import FoundationLogo from '../../assets/images/foundation-logo.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import SearchIcon from '../../assets/icons/search.svg'
import SearchBar from '../SearchBar'

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
        if (results.length) {
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
      <div className="container flex items-center py-4 justify-between relative z-20">
        <NavigationItem url="/" className="text-primary">
          <FoundationLogo className="w-64 sm:w-96 mb-[-6px]" />
        </NavigationItem>

        <div className="flex gap-4 items-center 2xl:hidden">
          <button onClick={() => setSearchModalOpen(true)}>
            <SearchIcon />
          </button>
          <button className="hover:text-primary" onClick={() => setNavOpen(true)}>
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
        <nav
          className={cx(
            'fixed 2xl:static p-8 pr-24 2xl:p-0 bg-white z-40 top-0 left-0 bottom-0 flex flex-col 2xl:flex-row gap-8 2xl:items-center transform transition-transform 2xl:transition-none 2xl:transform-none',
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
            'fixed z-30 top-0 right-0 bottom-0 left-0 bg-black visible opacity-40 transition-all cursor-default 2xl:hidden',
            { 'invisible opacity-0': !isNavOpen }
          )}
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role="button"
          tabIndex={0}
        />
      </div>
      {isSearchModalOpen && (
        <div className="fixed flex top-0 right-0 bottom-0 left-0 z-30 items-start justify-center">
          <button
            onClick={() => setSearchModalOpen(false)}
            className="absolute bg-black bg-opacity-40 top-0 right-0 bottom-0 left-0 cursor-default"
          ></button>
          <div className="relative mx-12 mt-32 w-full flex justify-center max-w-[700px]">
            <SearchBar
              className="w-full"
              inputRef={searchInputRef}
              onQueryChange={(query) => setSearchQuery(query)}
              onFocus={() => searchQuery.length > 2 && setSearchResultsVisible(true)}
              onBlur={() => setSearchResultsVisible(false)}
              query={searchQuery}
            />
            {isSearchResultsVisible && (
              <div className="flex w-full left-0 top-16 bg-white flex-col absolute shadow-lg py-4 rounded">
                {searchResults.map((searchResult, index) => (
                  <div className="select-none cursor-pointer" key={index}>
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
                          <div className="flex flex-col sm:flex-row items-start py-2 px-8 hover:bg-gray-100">
                            <span className="bg-primary-muted whitespace-nowrap mt-0.5 rounded text-white px-1 uppercase text-xs mr-2">
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
