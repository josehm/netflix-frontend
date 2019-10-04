import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Player from '../player'
//https://www.apollographql.com/docs/react/v2.5/essentials/queries/

const MEDIA_QUERY = gql`query Media($id: ID!) {
	getMedia(mediaID: $id) {
    _id
    title
    mediaLink
  }
}`

const Media = ({id}) => (

  <Query query={MEDIA_QUERY} variables={{id}}>
    {
      ({ loading, error, data }) => {
        if (loading) return (<p>Bajando video...</p>);
        if (error) return (<p>Ocurrio algun error</p>);
        return (
          <div>
            {
              data.getMedia.mediaLink? <Player url={data.getMedia.mediaLink} playing={true} /> 
              : <p> Ocurrio un problema </p>
            }
          </div>
        )
      }
    }
  </Query>
);

export default Media;