import Head from 'next/head'

export const Contacts = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Kontakty Nadácie mesta Bratislava" />
      </Head>
      <section className="section">
        <div className="container mx-auto" style={{ maxWidth: '1024px' }}>
          <div
            className="relative flex w-full justify-center"
            style={{ paddingTop: '115%' }} // this is just to keep ratio of an iframe content
          >
            <iframe
              className="absolute top-0 h-full w-full"
              title="Nadacia_web - Prehľad"
              src="https://app.powerbi.com/view?r=eyJrIjoiN2FhNjZmYjEtN2RjYi00ODM2LWE5NzgtYmJmYTA3ZjhiN2Y4IiwidCI6ImZlNjllNzRlLTFlNjYtNGZjYi05OWM1LTU4ZTRhMmQyYTA2MyIsImMiOjl9&pageName=ReportSectionbf571cbfa82dbe07c22e"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Contacts
