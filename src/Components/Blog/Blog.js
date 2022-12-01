import React, { useState } from 'react';
import BlogCard from './BlogCard';
import BlogCardData from './BlogCardData';



const Blog = () => {

  const [blogData] = useState(BlogCardData);


  return (
    <>
      {/* Blog section */}
      <section id="blogs" class="blogs ">
        <div className="title text-center">
          <h2>Blogs</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint  consectetur velit. Quisquam quos quisquam cupiditate. <br /> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="container">
          <div className="row mt-5">
            {
              blogData.map((currData, ind) => {
                return (
                  <BlogCard key={ind} {...currData} />
                )

              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog;