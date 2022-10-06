import Head from 'next/head';

import Button from '../components/Button';
import ContactPerson from '../components/ContactPerson';
import { client } from '../utils/gql';
import { AsyncServerProps } from '../utils/types';

export const Contacts = ({
  contacts,
  general: { address, bank_account_iban, bank_account_url },
}: AsyncServerProps<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <meta name="description" content="Kontakty Nadácie mesta Bratislava" />
      </Head>
      <section className="section">
        <div className="container mx-auto">
          <div className="grid w-full gap-12 lg:grid-cols-2">
            {contacts.map((contact) => (
              <ContactPerson
                key={contact.id}
                image={contact.photo?.formats?.medium?.url || contact.photo.url}
                name={contact.full_name_including_degrees}
                role={contact.role}
                email={contact.email}
                phone={contact.phone}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto text-center md:text-left">
          <div className="flex w-full flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:space-x-4">
              <div>Transparentný účet:</div>
              <div className="text-xl font-bold">{bank_account_iban}</div>
            </div>
            <Button href={bank_account_url} size="xl">
              Pozrieť účet
            </Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto text-center md:text-left">
          <div className="flex w-full flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:space-x-4">
              <div>Adresa:</div>
              <div className="font-bold">{address}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const { contacts, general } = await client.ContactPage();

  return {
    props: { contacts, general },
  };
};

export default Contacts;
