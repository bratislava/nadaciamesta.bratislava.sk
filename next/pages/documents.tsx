import DownloadCard from '../components/DownloadCard';
import { client } from '../utils/gql';
import { AsyncServerProps } from '../utils/types';
import { formatKiloBytes, getLocalDate } from '../utils/helpers';
import Newsletter from '../components/Newsletter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cx from 'classnames';

export function Documents({
  documents,
  general: { newsletter_text },
}: AsyncServerProps<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="description" content="Dokumenty na stiahnutie" />
      </Head>
      <section className="section">
        <div className="container mx-auto">
          <div className="w-full grid gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {documents.map(({ id, title, created_at, file }) => (
              <div key={id} id={id}>
                <DownloadCard
                  title={title}
                  downloadLink={file.url}
                  uploadDate={getLocalDate(created_at)}
                  downloadDetail={`${file.ext.toUpperCase()}; ${formatKiloBytes(
                    file.size
                  )}`}
                  className={cx({
                    'border-primary-muted': router.asPath.split('#')[1] == id,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <Newsletter text={newsletter_text} />
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const { documents, general } = await client.DocumentsPage();

  return {
    props: { documents, general },
  };
};

export default Documents;
