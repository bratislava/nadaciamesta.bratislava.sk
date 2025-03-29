import cx from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import CancelIcon from '../assets/icons/cancel.svg'
import Button from './Button'
import CheckBox from './CheckBox'
import Input from './Input'

export interface INewsletterProps {
  text: string
}

const Newsletter = ({ text }: INewsletterProps) => {
  const [isModalOpened, setModalOpened] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [acquaintance, setAcquaintance] = useState(false)

  const [nameError, setNameError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [acquaintanceError, setAcquaintanceError] = useState<string | null>(null)

  const onSubmit = () => {
    if (isFormValid()) {
      fetch(`/api/email-sender`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      })
      setModalOpened(false)
      clear()
    }
  }

  const clear = () => {
    setName('')
    setEmail('')
    setAcquaintance(false)
    setNameError(null)
    setEmailError(null)
    setAcquaintanceError(null)
  }

  const isFormValid = (): boolean => {
    let nameError: string | null
    let emailError: string | null
    let acquaintanceError: string | null

    // name validation
    nameError = name.length <= 0 ? 'Meno je povinné' : null

    // email validation
    if (email.length <= 0) {
      emailError = 'Email je povinný'
    } else if (
      !/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      emailError = 'Nesprávny formát emailovej adresy'
    } else {
      emailError = null
    }

    // acquaintance validation
    acquaintanceError = !acquaintance ? 'Toto pole je povinné' : null

    setNameError(nameError)
    setEmailError(emailError)
    setAcquaintanceError(acquaintanceError)

    return !nameError && !emailError && !acquaintanceError
  }

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-between gap-8 md:flex-row">
      <div className="max-w-3xl">{text}</div>
      <Button
        size="xl"
        className="l:whitespace-nowrap md:whitespace-nowrap xl:whitespace-nowrap"
        onClick={() => setModalOpened(true)}
      >
        Prihlásiť sa na odber noviniek
      </Button>
      <div
        className={cx('fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center', {
          hidden: !isModalOpened,
        })}
      >
        <div
          className="absolute inset-0 h-full w-full bg-white bg-opacity-80"
          onClick={() => setModalOpened(false)}
          onKeyDown={() => setModalOpened(false)}
          role="button"
          tabIndex={0}
        />
        <div className="m-8z relative z-10 grid gap-8 bg-font px-8 py-12 text-white md:p-24">
          <Button className="absolute right-5 top-5 border-none p-2" onClick={() => setModalOpened(false)}>
            <CancelIcon stroke="var(--secondary-color)" />
          </Button>
          <div className="text-center text-xl font-bold lg:text-2xl">Prihlásenie sa na odber noviniek</div>
          <div className="grid gap-y-4 gap-x-8 md:grid-cols-2">
            <div className="grid content-start gap-2">
              <div>Meno</div>
              <Input
                className="border-semilight-gray"
                hasError={!!nameError}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div className="text-error">{nameError}</div>}
            </div>
            <div className="grid gap-2">
              <div>Email</div>
              <Input
                className="border-semilight-gray"
                hasError={!!emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="text-error">{emailError}</div>}
            </div>
          </div>
          <div>
            <CheckBox
              className="items-center"
              id="acquaintance"
              // @ts-ignore
              content={
                <span>
                  Oboznámil/a som sa s{' '}
                  <Link href="gdpr">
                    <a href="gdpr" className="text-primary">
                      podmienkami ochrany súkromia
                    </a>
                  </Link>
                </span>
              }
              checked={acquaintance}
              onChange={() => setAcquaintance(!acquaintance)}
            />
            {acquaintanceError && <div className="ml-14 text-error">{acquaintanceError}</div>}
          </div>
          <div className="flex justify-center md:justify-end">
            <Button
              className="border-primary bg-primary py-3 px-6 text-base text-white hover:text-font"
              variant="primary"
              onClick={onSubmit}
            >
              Odoberať novinky
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
