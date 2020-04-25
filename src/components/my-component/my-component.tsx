import { Component, Prop, h, State } from '@stencil/core';

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
  posts: Post[];

  @Prop() src: string;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  async componentWillLoad() {

    let url = 'http://localhost:8000/' + this.src
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
        {this.posts.map(post => (<div>{post.title}</div>))}
      </div>
    );
  }
}
