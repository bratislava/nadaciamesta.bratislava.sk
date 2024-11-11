import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Button from '../../components/Button';
import ProjectCard from '../../components/ProjectCard';
import SearchBar from '../../components/SearchBar';
import Tag from '../../components/Tag';
import TagGroupMultiple from '../../components/TagGroupMultiple';
import TagGroupSingle from '../../components/TagGroupSingle';
import { client } from '../../utils/gql';
import { parseQueryArray, parseQueryString } from '../../utils/helpers';
import { AsyncServerProps } from '../../utils/types';
import { ProjectsQuery } from '../graphql/index';

const PROJECT_COUNT_PER_LOAD = 24;

export const Projects = ({
  tagPrograms,
  tagCategories,
  tagDistricts,
  tagGoals,
  tagLegalForms,
  tagSupportFields,
  tagYears,
}: AsyncServerProps<typeof getServerSideProps>) => {
  const { query } = useRouter();

  const [projects, setProjects] = useState<ProjectsQuery['projects']>([]);
  const [projectsTotalCount, setProjectsTotalCount] = useState(0);
  const [allProjectsLoaded, setAllProjectsLoaded] = useState(false);

  const [year, setYear] = useState<string>();
  const [program, setProgram] = useState<string>();

  const [categories, setCategories] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [supportFields, setSupportFields] = useState<string[]>([]);
  const [legalForms, setLegalForms] = useState<string[]>([]);

  const [district, setDistrict] = useState<string>();

  const [searchQuery, setSearchQuery] = useState('');
  const [legalSearchQuery, setLegalSearchQuery] = useState('');

  const setStateByQueryString = (
    setValue: Dispatch<SetStateAction<string>>,
    queryParam: string | string[] | undefined,
    tagsObj: { name: string }[]
  ) => {
    if (!queryParam) return;
    const tags = tagsObj.map((tag) => tag.name);
    if (tags.includes(parseQueryString(queryParam))) {
      setValue(parseQueryString(queryParam));
    }
  };

  const setStateByQueryArray = (
    setValue: Dispatch<SetStateAction<string[]>>,
    queryParam: string | string[] | undefined,
    tagsObj: { name: string }[]
  ) => {
    if (!queryParam) return;

    const tags = new Set(tagsObj.map((tag) => tag.name));
    setValue(
      parseQueryArray(queryParam).filter((param) => tags.has(param))
    );
  };

  const determineDeclension = (
    count: number,
    one: string,
    twoThreeOrFour: string,
    zeroOrGreaterThenFour: string
  ) => {
    return count === 1
      ? one
      : count >= 2 && count <= 4
      ? twoThreeOrFour
      : zeroOrGreaterThenFour;
  };

  const getFilteredProjectText = useCallback(() => {
    const wordDisplayed = determineDeclension(
      projects.length,
      'zobrazený',
      'zobrazené',
      'zobrazených'
    );

    const wordProject = determineDeclension(
      projects.length,
      'projekt',
      'projekty',
      'projektov'
    );

    const wordFiltered = determineDeclension(
      projectsTotalCount,
      'vyfiltrovaného',
      'vyfiltrovaných',
      'vyfiltrovaných'
    );

    return `${wordDisplayed} ${projects.length} ${wordProject} z ${projectsTotalCount} ${wordFiltered}`;
  }, [projects, projectsTotalCount]);

  useEffect(() => {
    const {
      year: yearQ,
      program: programQ,
      categories: categoriesQ,
      goals: goalsQ,
      supportFields: supportFieldsQ,
      legalForms: legalFormsQ,
      district: districtQ,
    } = query;
    setStateByQueryString(setYear, yearQ, tagYears);
    setStateByQueryString(setProgram, programQ, tagPrograms);
    setStateByQueryArray(setCategories, categoriesQ, tagCategories);
    setStateByQueryArray(setGoals, goalsQ, tagGoals);
    setStateByQueryArray(setSupportFields, supportFieldsQ, tagSupportFields);
    setStateByQueryArray(setLegalForms, legalFormsQ, tagLegalForms);
    setStateByQueryString(setDistrict, districtQ, tagDistricts);
  }, [
    query,
    tagCategories,
    tagDistricts,
    tagGoals,
    tagLegalForms,
    tagPrograms,
    tagSupportFields,
    tagYears,
  ]);

  useEffect(() => {
    if (searchQuery.length > 2) {
      setLegalSearchQuery(searchQuery);
    } else {
      setLegalSearchQuery('');
    }
  }, [searchQuery]);

  const loadProjects = useCallback(
    async (offset: number) => {
      setAllProjectsLoaded(true);
      const { projects: newProjects } = await client.Projects({
        limit: PROJECT_COUNT_PER_LOAD,
        offset,
        year,
        program,
        district,
        supportFields,
        goals,
        categories,
        legalForms,
        query: legalSearchQuery,
      });

      const projectsCount = await client
        .ProjectsTotalCount({
          year,
          program,
          district,
          supportFields,
          goals,
          categories,
          legalForms,
          query: legalSearchQuery,
        })
        .then(({ projects }) => projects.length);

      setProjects((projects) => [...projects, ...newProjects]);
      setProjectsTotalCount(projectsCount);

      if (newProjects.length === PROJECT_COUNT_PER_LOAD) {
        setAllProjectsLoaded(false);
      }
    },
    [
      year,
      program,
      district,
      supportFields,
      goals,
      categories,
      legalForms,
      legalSearchQuery,
    ]
  );

  useEffect(() => {
    setProjects([]);
    loadProjects(0);
  }, [
    loadProjects,
    year,
    program,
    categories,
    goals,
    supportFields,
    legalForms,
    district,
    legalSearchQuery,
  ]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Príklady podporených projektov Nadácie mesta Bratislava"
        />
      </Head>
      <div className="section section-no-padding">
        <div className="container mx-auto py-8">
          <div className="mb-6">Filtrovať podporené projekty:</div>

          <div className="flex flex-wrap gap-8">
            <TagGroupSingle
              tags={tagYears}
              value={year}
              setValue={setYear}
              clearable
            />
            <TagGroupSingle
              tags={tagPrograms}
              value={program}
              setValue={setProgram}
              clearable
              uppercase
            />
          </div>
          <TagGroupMultiple
            tags={tagCategories}
            values={categories}
            setValues={setCategories}
          />
          <TagGroupMultiple
            tags={tagGoals}
            values={goals}
            setValues={setGoals}
          />
          <TagGroupMultiple
            tags={tagSupportFields}
            values={supportFields}
            setValues={setSupportFields}
          />
          <TagGroupMultiple
            tags={tagLegalForms}
            values={legalForms}
            setValues={setLegalForms}
          />

          <div className="max-w-lg">
            <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
          </div>

          {/*
            TEMPORARILY HIDDEN
          <Select
            id="city-part"
            placeholder="Vyberte mestskú časť"
            options={tagDistricts.map((tag) => ({
              value: tag.name,
              label: tag.name,
            }))}
            value={district && { value: district, label: district }}
            onChange={(event) => setDistrict(event?.value)}
            className="mb-2 w-72 text-sm"
          /> */}
        </div>
      </div>

      <div className="section section-no-padding">
        <div className="container mx-auto flex min-h-[100px] items-stretch">
          <div className="border-black-right flex w-2/5 items-center pr-4">
            {getFilteredProjectText()}
          </div>
          <div className="my-4 flex w-3/5 flex-wrap items-center gap-2 pl-10">
            {year && <Tag text={year} />}
            {program && (
              <Tag
                text={program}
                variant="inactive"
                className="cursor-default uppercase"
              />
            )}
            {[]
              .concat(categories, goals, supportFields, legalForms, district)
              .filter(Boolean)
              .map((label, index) => (
                <Tag text={label} key={index} />
              ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container mx-auto">
          <div className="mb-12 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
          {!allProjectsLoaded && (
            <div className="flex justify-center">
              <Button
                onClick={() => loadProjects(projects.length)}
                className="w-fit"
                variant="primary"
                size="xl"
              >
                Načítať ďalšie
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const {
    tagCategories,
    tagDistricts,
    tagGoals,
    tagLegalForms,
    tagPrograms,
    tagSupportFields,
    tagYears,
  } = await client.ProjectsPage();
  return {
    props: {
      tagCategories,
      tagDistricts,
      tagGoals,
      tagLegalForms,
      tagPrograms,
      tagSupportFields,
      tagYears,
    },
  };
};

export default Projects;
