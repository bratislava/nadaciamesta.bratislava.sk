import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import DownloadCard from '../components/DownloadCard'
import { client } from '../utils/gql'
import { formatKiloBytes, getLocalDate } from '../utils/helpers'
import { AsyncServerProps } from '../utils/types'

export const AboutUs = ({ aboutUs }: AsyncServerProps<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <meta name="description" content="O Nadácii mesta Bratislava" />
      </Head>
      {aboutUs.sections.map((section) => (
        <section className="section" key={section.id}>
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="space-y-4 md:pr-16 lg:col-span-2 xl:col-span-3 xl:pr-80 2xl:pr-96">
                <div className="text-xl font-bold">{section.title}</div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.detail}</ReactMarkdown>
              </div>
              <div className="flex flex-col items-center gap-8">
                {section.files.map((file) => (
                  <DownloadCard
                    title={file.name}
                    key={file.id}
                    downloadLink={file.url}
                    uploadDate={getLocalDate(file.created_at)}
                    downloadDetail={`${file.ext.toUpperCase()}; ${formatKiloBytes(file.size)}`}
                    containerClassName="download-card-container"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export const getServerSideProps = async () => {
  return { props: { ...(await client.AboutUsPage()) } }
}

export default AboutUs
