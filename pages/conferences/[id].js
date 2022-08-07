// External Imports
import Head from 'next/head'
import { gql } from '@apollo/client';


// Internal Imports
import client from "../../lib/apollo-client";
import HeaderInner from '../../components/header/HeaderInner';
import ConferenceDetails from '../../components/conference/ConferenceDetails';


export default function Conference({ data }) {
    const { conference } = data;
    return (
        <div>
            <Head>
                <title>React Conference - Conference Info</title>
                <meta name="description" content="React Conference" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="relative left-0 top-0 z-50 w-full">
                <HeaderInner />
            </header>

            {conference && (
                <ConferenceDetails conference={conference} />
            )}

        </div>
    )
}

// get path
export async function getStaticPaths() {
    const QUERY = gql`
    query {
        conferences {
            id
            name 
        }
    }
  `
    const { data } = await client.query({ query: QUERY });
    const { conferences } = data;
    const paths = conferences.map((conference) => (
        { params: { id: `${conference?.id}` } }
    ))

    return {
        paths,
        fallback: false
    }
}

// get data
export async function getStaticProps(context) {
    const { id } = context?.params;
    const QUERY = gql`
            query  ($id: ID!) {
                conference (id: $id) {
                    id
                    name
                    year
                    startDate
                    endDate
                    slogan
                    organizers {
                    name
                    about
                    }
                    speakers {
                    name
                    about
                    aboutShort
                    company
                    image {
                        url
                        title
                    }
                    }
                    locations {
                    name
                    about
                    image {
                        url
                        title
                        style {
                        backgroundSize
                        }
                    }
                    }
                    schedules {
                    day
                    location {
                        name
                        about
                        image {
                        url
                        title
                        }
                        city
                        address
                    }
                    description
                    intervals {
                        begin
                        end
                        title
                        sessions {
                        title
                        }
                    }
                    }
                    sponsors {
                    name
                    about
                    aboutShort
                    company
                    image {
                        url
                        title
                    }
                    }
                }
            }
      `

    const { data } = await client.query({ query: QUERY, variables: { id } })
    return {
        props: {
            data
        }
    }
}