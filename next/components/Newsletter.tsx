import { useState } from 'react';
import cx from 'classnames';
import Input from './Input'
import CheckBox from './Checkbox'
import Button from './Button';
import { ReactComponent as CancelIcon } from '../assets/icons/cancel.svg';
import Link from 'next/link';

export interface INewsletterProps {
  text: string;
}

const Newsletter = ({ text }: INewsletterProps) => {
  const [isModalOpened, setModalOpened] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acquaintance, setAcquaintance] = useState(false);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [acquaintanceError, setAcquaintanceError] = useState<string | null>(
    null
  );

  const onSubmit = () => {
    if (isFormValid()) {
      fetch(`/api/email-sender`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });
      setModalOpened(false);
      clear();
    }
  };

  const clear = () => {
    setName('');
    setEmail('');
    setAcquaintance(false);
    setNameError(null);
    setEmailError(null);
    setAcquaintanceError(null);
  };

  const isFormValid = (): boolean => {
    let nameError: string | null;
    let emailError: string | null;
    let acquaintanceError: string | null;

    // name validation
    if (name.length <= 0) {
      nameError = 'Meno je povinné';
    } else {
      nameError = null;
    }

    // email validation
    if (email.length <= 0) {
      emailError = 'Email je povinný';
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      emailError = 'Nesprávny formát emailovej adresy';
    } else {
      emailError = null;
    }

    // acquaintance validation
    if (!acquaintance) {
      acquaintanceError = 'Toto pole je povinné';
    } else {
      acquaintanceError = null;
    }

    setNameError(nameError);
    setEmailError(emailError);
    setAcquaintanceError(acquaintanceError);

    return !nameError && !emailError && !acquaintanceError;
  };

  return (
    <div className="container mx-auto w-full flex flex-col md:flex-row gap-8 justify-between items-center">
      <div className="max-w-3xl">{text}</div>
      <Button
        size="xl"
        className="md:whitespace-nowrap l:whitespace-nowrap xl:whitespace-nowrap"
        onClick={() => setModalOpened(true)}
      >
        Prihlásiť sa na odber noviniek
      </Button>
      <div
        className={cx(
          'flex items-center justify-center fixed top-0 right-0 bottom-0 left-0',
          { hidden: !isModalOpened }
        )}
      >
        <div
          className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-white bg-opacity-80"
          onClick={() => setModalOpened(false)}
          onKeyDown={() => setModalOpened(false)}
          role="button"
          tabIndex={0}
        />
        <div className="grid relative z-10 gap-8 m-8z bg-font text-white px-8 py-12 md:px-24 md:py-24">
          <Button
            className="absolute right-5 top-5 border-none px-2 py-2"
            onClick={() => setModalOpened(false)}
          >
            <CancelIcon stroke="var(--secondary-color)" />
          </Button>
          <div className="text-center text-xl lg:text-2xl font-bold">
            Prihlásenie sa na odber noviniek
          </div>
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
            {acquaintanceError && (
              <div className="text-error ml-14">{acquaintanceError}</div>
            )}
          </div>
          <div className="flex justify-center md:justify-end">
            <Button
              className="bg-primary border-primary text-white text-base py-3 px-6 hover:text-font"
              variant="primary"
              onClick={onSubmit}
            >
              Odoberať novinky
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
