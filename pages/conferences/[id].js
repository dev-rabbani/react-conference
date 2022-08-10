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
        <>
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

        </>
    )
}

// get path
export async function getStaticPaths() {
    const QUERY = gql`
        query {
            conferences {
                id
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

    // get id by params
    const { id } = context?.params;

    // QUERY
    const QUERY = gql`
        query  ($id: ID!) {
            conference (id: $id) {
                name
                slogan
                organizers {
                    name
                    about
                    image {
                        url
                    }
                }
                speakers {
                    name
                    about
                    company
                    image {
                        url
                    }
                }
                locations {
                    name
                    about
                    image {
                        url
                    }
                }
                schedules {
                    day
                    description
                    location {
                        image {
                            url
                        }
                    }
                    intervals {
                        begin
                        end
                        sessions {
                            title
                        }
                    }
                }
                sponsors {
                    name
                    about
                    company
                    image {
                        url
                    }
                }
            }
        }
    `

    // get data by id    
    const { data } = await client.query({ query: QUERY, variables: { id } });


    return {
        props: {
            data
        }
    }
}