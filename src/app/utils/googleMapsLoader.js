import { Loader } from '@googlemaps/js-api-loader';
const loader = new Loader({
    apiKey: 'AIzaSyDz85GtAL9QJwco83UH0jUx8lbeS_UNJuk',
    version: 'weekly',
    libraries: ['places'],
  });
export default loader;