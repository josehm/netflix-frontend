import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import VideoHero from '../video/VideoHero'

const MEDIA_QUERY = gql`
query Content($id: ID!) {
	getContent(contentID: $id) {
    _id
    title
    description
    imgHero
    overViewLink
    clasaification
  }
}`

const Content = ({id}) => (

  <Query query={MEDIA_QUERY} variables={{id}}>
    {
      ({ loading, error, data }) => {
        if (loading) return (<p>Bajando video...</p>);
        if (error) return (<p>Ocurrio algun error</p>);
        return (
          <div>
            {/*
            <div>
              <img src={data.getContent.imgHero} alt="imageHero" style={{width: '100%', height: '100vh'}}/>
            </div>
            */}
            
            <div>
              {
                data.getContent.overViewLink?
                  <div style={{width:'100%', height:'56.25vw'}}>
                    <VideoHero
                      title={data.getContent.title}
                      description={data.getContent.description}
                      clasification={data.getContent.clasaification}
                      url={data.getContent.overViewLink}
                      thumbnail={data.getContent.imgHero}
                      playing={true}  /> 
                  </div>
                : <p> Video no disponible </p>
              }
            </div>
          </div>
        )
      }
    }
  </Query>
);

export default Content;