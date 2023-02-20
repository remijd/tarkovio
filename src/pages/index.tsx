import Home from "@/page-components/Home";
import ButtonAppBar from "@/components/AppBar";
import graphQLClient from "@/GraphQL/graphQLClient";
import { tarkovAmmo } from "@/GraphQL/queries";
import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import * as Styles from "../components/StyledComponents";
export const getStaticProps: GetStaticProps = async () => {
  const data = await graphQLClient.request(tarkovAmmo);

  return {
    props: { data },
  };
};
export default Home;
