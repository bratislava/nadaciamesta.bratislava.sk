import _ from 'lodash'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowLeftIcon from '../../assets/icons/arrow-circle-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-circle-right.svg'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import { client } from '../../utils/gql'
import { AsyncServerProps } from '../../utils/types'

const Project = ({ project, legal }: AsyncServerProps<typeof getServerSideProps>) => {
  const router = useRouter()

  const [swipe, setSwipe] = useState<SwiperCore>()

  const pushQuery = (name: string, value: string) => {
    router.push({
      pathname: '/projects',
      query: { [name]: value },
    })
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content={
            /* Truncation legnth decided roughly by this - https://blog.spotibo.com/meta-description-length/ */
            `${project.title} - ${_.truncate(project.description, {
              length: 150 - project.title.length,
            })}`
          }
        />
      </Head>
      <div className="flex h-[678px] self-stretch bg-white">
        <Swiper
          slidesPerView={1}
          speed={2000}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          onBeforeInit={(swiper) => setSwipe(swiper)}
        >
          {project.images.map((image) => (
            <SwiperSlide style={{ height: '100%', backgroundColor: 'gray' }} key={image.id}>
              <img className="h-[100%] w-[100%]" src={image.url} alt={image.alternativeText} />
            </SwiperSlide>
          ))}

          <Button
            className="swiper-button-prev ml-30 h-16 w-16 border-none p-px"
            onClick={() => swipe?.slidePrev()}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            className="swiper-button-next mr-30 h-16 w-16 border-none p-px"
            onClick={() => swipe?.slideNext()}
          >
            <ArrowRightIcon />
          </Button>
        </Swiper>
      </div>
      <section className="section section-no-padding">
        <div className="container grid items-stretch md:grid-cols-2">
          <div className="space-y-4 border-dark-gray-color px-4 py-16 md:border-r-2 md:p-16">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.year && (
                <Tag
                  text={project.year.name}
                  variant="inactive"
                  onClick={() => pushQuery('year', project.year.name)}
                />
              )}
              {project.program && (
                <Tag
                  text={project.program.name}
                  className="uppercase"
                  variant="inactive"
                  onClick={() => pushQuery('program', project.program.name)}
                />
              )}
              {project.categories.map((category) => (
                <Tag
                  text={category.name}
                  key={category.id}
                  variant="inactive"
                  onClick={() => pushQuery('categories', category.name)}
                />
              ))}
              {project.goals.map((goal) => (
                <Tag
                  text={goal.name}
                  key={goal.id}
                  variant="inactive"
                  onClick={() => pushQuery('goals', goal.name)}
                />
              ))}
              {project.support_fields.map((supportField) => (
                <Tag
                  text={supportField.name}
                  key={supportField.id}
                  variant="inactive"
                  onClick={() => pushQuery('supportFields', supportField.name)}
                />
              ))}
              {project.legal_form && (
                <Tag
                  text={project.legal_form.name}
                  variant="inactive"
                  onClick={() => pushQuery('legalForms', project.legal_form.name)}
                />
              )}
              {
                // TEMPORARILY HIDDEN
                /* {project.districts.map((district) => (
                <Tag
                  text={district.name}
                  key={district.id}
                  variant="inactive"
                  onClick={() => pushQuery('district', district.name)}
                />
              ))} */
              }
            </div>
            <p className="text-sm font-thin italic">{legal?.project_detail_disclaimer}</p>
          </div>
          <div className="px-4 pb-16 md:p-16">{project.description}</div>
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { pid } = context.query

  return { props: { ...(await client.Project({ pid })) } }
}

export default Project
