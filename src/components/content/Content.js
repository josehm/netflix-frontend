import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Player from '../player'

const MEDIA_QUERY = gql`
query Content($id: ID!) {
	getContent(contentID: $id) {
    _id
    title
    imgHero
    overViewLink
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
                data.getContent.overViewLink? <Player url={data.getContent.overViewLink} playing={true} /> 
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