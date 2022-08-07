// External Imports
import Head from 'next/head'
import { gql } from '@apollo/client';

// Internal Imports
import client from "../lib/apollo-client";
import EventSchedule from '../components/event-schedule/EventSchedule'
import HeroSection from '../components/hero/HeroSection'

export default function Home({ data }) {
    const { conferences } = data
    return (
        <div>
            <Head>
                <title>React Conference - Home</title>
                <meta name="description" content="React Conference" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSection />

            {conferences && (
                <EventSchedule conferences={conferences} />
            )}

        </div>
    )
}

// get data
export async function getStaticProps() {
    const QUERY = gql`
    query {
        conferences {
            id
            name
            year
            startDate
            endDate
            slogan
        }
    }

  `
    const { data } = await client.query({ query: QUERY })
    return {
        props: {
            data
        }
    }
}