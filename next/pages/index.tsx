import Head from 'next/head';
import React from 'react';
import { GrantRequest } from '../components/GrantRequest';
import LandingGallery from '../components/LandingGallery';
import { client } from '../utils/gql';
import { AsyncServerProps } from '../utils/types';

export function Index({
  landingPage,
}: AsyncServerProps<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Webstránka grantov a podporených projektov Nadácie mesta Bratislava"
        />
      </Head>
      <div className="flex justify-start items-center mt-1 flex-col">
        <LandingGallery
          slidesTop={landingPage.featured_projects_top}
          slidesBottom={landingPage.featured_projects_bottom}
        />
        <GrantRequest
          text={landingPage.grants_text}
          buttonText={landingPage.grants_button_text}
        />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: { ...(await client.LandingPage()) },
  };
};

export default Index;
