
export const fetchMovieList = (apiKey, movieName) => (dispatch) => {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&&page=1`)
            .then(response => response.json())
            .then(json => {
                  if (json.Response === 'False') {
                        dispatch({ payload: 'Record Not Found', type: 'MOVIE_RECORD_MISSING' })
                  }
                  else {
                        dispatch({ payload: json, type: 'FETCH_MOVIE_LIST' })
                  }
            }
            )
            .catch(error => dispatch({ payload: 'oops ,Somthing went wrong,Please try agin later', type: 'NETWORK_ERROR' }));
}

export const fetchMovieListNextCycle = (apiKey, movieName, page) => (dispatch) => {
      return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&page=${page}`)
            .then(response => response.json())
            .then(json => {
                  if (json.Response === 'False') {
                        dispatch({ payload: 'Record Not Found', type: 'MOVIE_RECORD_MISSING' })
                  }
                  else {
                        dispatch({ payload: json, type: 'FETCH_MOVIE_LIST_MORE' })
                  }
            }
            )
            .catch(error => dispatch({ payload: 'oops ,Somthing went wrong,Please try agin later', type: 'NETWORK_ERROR' }));
}