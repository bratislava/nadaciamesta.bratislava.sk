import cx from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import GrantCard from '../components/GrantCard';
import Newsletter from '../components/Newsletter';
import Tag from '../components/Tag';
import { client } from '../utils/gql';
import { AsyncServerProps } from '../utils/types';

export const Grants = ({
  grants,
  tagPrograms: programs,
  general: { newsletter_text },
}: AsyncServerProps<typeof getServerSideProps>) => {
  const [selectedProgram, setSelectedProgram] = useState<string>(
    programs[0].name
  );
  const router = useRouter();

  return (
    <>
      <section className="section">
        <div className="container mx-auto">
          <div className="pb-5">Vyberte si jeden z programov.</div>
          <div className="flex flex-wrap gap-3 pb-8">
            {/* TEMP show just the first two programs, quick & dirty fix */}
            {programs.map(
              ({ name }, index) =>
                index < 2 && (
                  <div key={index}>
                    <Tag
                      text={name}
                      className="uppercase"
                      variant={name === selectedProgram ? 'active' : 'inactive'}
                      size="large"
                      onClick={() => setSelectedProgram(name)}
                    />
                  </div>
                )
            )}
          </div>
          <div className="grid w-full gap-8 pb-52 lg:grid-cols-3 xl:grid-cols-5">
            {grants
              .filter((grant) => grant.program.name === selectedProgram)
              .sort((a, b) => a.order - b.order)
              .map((grant) => (
                <div key={grant.id} id={grant.id}>
                  <GrantCard
                    className={cx({
                      'rounded-xl border-4 border-primary-muted p-2':
                        router.asPath.split('#')[1] == grant.id,
                    })}
                    href={grant.link}
                    title={grant.title}
                    text={grant.description}
                    files={grant.files}
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
  const { general, grants, tagPrograms } = await client.GrantsPage();

  return {
    props: {
      general,
      grants,
      tagPrograms,
    },
  };
};

export default Grants;
