import { Swiper, SwiperSlide } from 'swiper/react'
import { client } from '../../utils/gql'
import { AsyncServerProps } from '../../utils/types'
import Tag from '../../components/Tag'
import { useRouter } from 'next/router'
import ArrowLeftIcon from '../../assets/icons/arrow-circle-left.svg'
import ArrowRightIcon from '../../assets/icons/arrow-circle-right.svg'
import { useState } from 'react'
import SwiperCore from 'swiper'
import Button from '../../components/Button'
import Head from 'next/head'
import _ from 'lodash'

function Project({ project, legal }: AsyncServerProps<typeof getServerSideProps>) {
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
      <div className="flex self-stretch h-[678px] bg-white">
        <Swiper
          slidesPerView={1}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          onBeforeInit={(swiper) => setSwipe(swiper)}
        >
          {project.images.map((image) => (
            <SwiperSlide style={{ height: '100%', backgroundColor: 'gray' }} key={image.id}>
              <img className="w-[100%] h-[100%]" src={image.url} alt={image.alternativeText} />
            </SwiperSlide>
          ))}

          <Button
            className="swiper-button-prev w-16 h-16 ml-30 px-px py-px border-none"
            onClick={() => swipe?.slidePrev()}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            className="swiper-button-next w-16 h-16 mr-30 px-px py-px border-none"
            onClick={() => swipe?.slideNext()}
          >
            <ArrowRightIcon />
          </Button>
        </Swiper>
      </div>
      <section className="section section-no-padding">
        <div className="container grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-4 md:p-16 space-y-4 md:border-r-2 border-dark-gray-color">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.year && (
                <Tag text={project.year.name} variant="inactive" onClick={() => pushQuery('year', project.year.name)} />
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
                <Tag text={goal.name} key={goal.id} variant="inactive" onClick={() => pushQuery('goals', goal.name)} />
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
            <p className=" text-sm italic font-thin">{legal?.project_detail_disclaimer}</p>
          </div>
          <div className="pb-16 px-4 md:p-16">{project.description}</div>
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
