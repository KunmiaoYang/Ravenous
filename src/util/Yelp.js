const apiKey = 'd8Z797PtA6jqbm2pNFB6kf-EiKjNYnd-zU7AkXqDO_s53rEshXtQ9EQYVypgveBRaZaBaoJKLSc8t2h658oB7KvD_FbUFjZw1snQxHGH3AxahSdyvNluRTDbLAGcW3Yx';
export const Yelp = {
  search: function(term, location, sortBy) {
    console.log(term, location, sortBy);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        })
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if ('businesses' in jsonResponse)
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1 +
                       (business.location.address2? "\n" + business.location.address2 : "") +
                       (business.location.address3? "\n" + business.location.address3 : ""),
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0]? business.categories[0].title.toUpperCase() : "",
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
      });
  }
};
