# Sixteen Bites

16 Bites is a photo social media website with. Users can create photo posts and can follow other users.  

# Live Site - [16 bites](https://sixteen-bites.herokuapp.com/#/)

# Posts, Follows

 - Users are able to create photo posts
 - Users are able to follow other people
 - Users have their own profiles

# Challenges

  - Making the carousel side scroll with the button click in React was one of my issues. I initial thought of using some vanilla JS method, but upon realising I could use a ref, the code becomes a bit more concise. 
  ```js
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };
  ```

# Technologies Used

 - Ruby 
 - Rails 
 - JavaScript, React, Redux
 - PostgreSQL 
 - HTML5
 - CSS3
 - Webpack
 - Git
 - AWS

# Future Plans

  - Allow users to have custom homfeed based on follows
  - Allow users to create galleries to organize their photos
