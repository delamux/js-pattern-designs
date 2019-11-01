import { get as _get } from 'axios';

class HttpClient {
  get(url) {
    return _get(url).then(response => response.data);
  }
}

class PostsService { 
  configure(config) {
    this.configureHttpClient(config);
    this.configureEndPoints(config);
  }

  configureHttpClient(config){
    if(!config.httpClient) {
      throw new Error('HttpClient not configured');
    }
    this.httpClient = config.httpClient;
  }

  configureEndPoints(config) {
    if(!config.endPoints || !config.endPoints.posts || !config.endPoints.comments) {
      throw new Error('Endpoints poorly configured');
    }
    this.postsEndpoint = config.endPoints.posts;
    this.commentsEndpoint = config.endPoints.comments;
  }

  getPosts() {
    return this.httpClient.get(this.postsEndpoint);
  }

  getComments() {
    return this.httpClient.get(this.commentsEndpoint);
  }
}

class PostsServiceFactory {
  prepareInstance() {
    let config = {
      httpClient: new HttpClient(),
      endPoints: {
        posts: 'https://jsonplaceholder.typicode.com/posts',
        comments: 'https://jsonplaceholder.typicode.com/posts/1/comments'
      }
    }
    this.postsService = new PostsService();
    this.postsService.configure(config);
  }

  getInstance() {
    if(!this.postsService) {
      this.prepareInstance();
    }

    return this.postsService;
  }
}

let postsServiceFactory = new PostsServiceFactory();
let postsService = postsServiceFactory.getInstance();

postsService.getPosts().then(response => console.log('Posts: ', response));
postsService.getComments().then(response => console.log('Comments: ', response));
