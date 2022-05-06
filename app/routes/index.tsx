import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Link, useLoaderData } from "@remix-run/react";
import { getPlaceList, Place } from "~/models/place.server";
import styled from "styled-components";

export const loader: LoaderFunction = async ({ request }) => {
  return await getPlaceList();
};

const Heading = styled.h6`
  color: red;
`;

export default function Index() {
  const places = useLoaderData<Place[]>();
  console.log(places);
  return (
    <div>
      <Heading>Hello. See places here:</Heading>
      {places.map((place) => (
        <div key={place.id}><Link to={`/${place.id}`}>{place.name}</Link></div>
      ))}
      <Link to={'/about'}>About us</Link>
    </div>
  );
}