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
        <>
            <Head>
                <title>React Conference - Home</title>
                <meta name="description" content="React Conference" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSection />

            {conferences && (
                <EventSchedule conferences={conferences} />
            )}

        </>
    )
}

// get data
export async function getStaticProps() {
    const QUERY = gql`
    query{
        conferences {
            id
            schedules {
                day
                intervals {
                    begin
                    end
                    title
                }
            }
        }
    }
`
    // get data
    const { data } = await client.query({ query: QUERY })
    return {
        props: {
            data
        }
    }
}