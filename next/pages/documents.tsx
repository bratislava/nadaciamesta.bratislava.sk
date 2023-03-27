import cx from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'

import DownloadCard from '../components/DownloadCard'
import Newsletter from '../components/Newsletter'
import { client } from '../utils/gql'
import { formatKiloBytes, getLocalDate } from '../utils/helpers'
import { AsyncServerProps } from '../utils/types'

export const Documents = ({ documents, general: { newsletter_text } }: AsyncServerProps<typeof getServerSideProps>) => {
  const router = useRouter()

  const shouldBeArchived = (document) => document?.archived

  const archivedDocuments = documents.filter(shouldBeArchived)
  const activeDocuments = documents.filter((document) => !shouldBeArchived(document))

  return (
    <>
      <Head>
        <meta name="description" content="Dokumenty na stiahnutie" />
      </Head>
      <section className="section">
        <div className="container mx-auto">
          <div className="mb-8 text-xl font-bold">Aktuálne dokumenty</div>
          <div className="grid w-full gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {activeDocuments.map(({ id, title, created_at, file }) => (
              <div key={id} id={id}>
                <DownloadCard
                  title={title}
                  downloadLink={file.url}
                  uploadDate={getLocalDate(created_at)}
                  downloadDetail={`${file.ext.toUpperCase()}; ${formatKiloBytes(file.size)}`}
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
        <div className="container mx-auto">
          <div className="mb-8 text-xl font-bold">Archív</div>
          <div className="grid w-full gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {archivedDocuments.map(({ id, title, created_at, file }) => (
              <div key={id} id={id}>
                <DownloadCard
                  title={title}
                  downloadLink={file.url}
                  uploadDate={getLocalDate(created_at)}
                  downloadDetail={`${file.ext.toUpperCase()}; ${formatKiloBytes(file.size)}`}
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
  )
}

export const getServerSideProps = async () => {
  const { documents, general } = await client.DocumentsPage()

  return {
    props: { documents, general },
  }
}

export default Documents
