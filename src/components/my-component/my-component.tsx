import { Component, Prop, h } from '@stencil/core';

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {

  // @State() posts: Post[];
  posts: Post[] = [];

  /**
   * Base URL e.g. 'http://localhost:8000/'
   */
  @Prop() baseurl: string;

  /**
   * URI (path to resource)
   */
  @Prop() src: string;

  async componentWillLoad() {

    if (this.baseurl == null) return

    let url = this.baseurl + this.src
    console.log(url);

    return fetch(url)
      .then(r => {
        if (r.ok)
          return r.json()
        else {
          console.error(r.status)
          return []
        }
      })
      .then(json => {
        this.posts = json.posts || [];
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.posts.length > 0 ? this.posts.map(post => (<div>{post.title}</div>)) : "NO DATA" }
      </div>
    );
  }
}
