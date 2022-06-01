import { AiOutlineSearch } from "react-icons/ai";
import { BlogWrapper } from "./style";

import { Toplabel, BlogTitle, BlogCard } from "./components";
import { BottomMargin,  } from "../about-us/style";
import readingImage from "../../assets/images/blog_image.png";
import { blogData, noPictureData } from "./data";
import { Glass } from "../../common/components/elements";
import { Text1, Title2 } from "../../common/components/elements/text";
import { BsArrowRight } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

export interface IBlogProps {}

export function Blog(props: IBlogProps) {

  const {setIsBlogShowing} = useContext(AppContext)
  

  useEffect(() => {
    setIsBlogShowing(true);

    return () => {
      setIsBlogShowing(false);
    }
  }, [])


  return (
    <BlogWrapper>
      <Toplabel />
      <div className="title-wrapper">
        <div className="blog-title-wrapper">
          <BlogTitle
            title="Latest From The Blog"
            content="Proident qui laborum eu aliquip incididunt labore amet nisi in magna. Aliquip proident dolore et irure et magna in. "
          />
        </div>
        <div className="search">
          <input type="text" placeholder="Search here" />
          <AiOutlineSearch className="icon" />
        </div>
      </div>
      <div className="blogs-wrapper">
        {blogData &&
          blogData.map((blog) => (
            <BlogCard
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl.length > 1 ? blog.imageUrl : readingImage}
              content={blog.content}
            />
          ))}
      </div>
      <div className="title-wrapper">
        <div className="blog-title-wrapper">
          <BlogTitle
            title="Recent Articles"
            content="Proident qui laborum eu aliquip incididunt labore amet nisi in magna. Aliquip proident dolore et irure et magna in. "
          />
        </div>
      </div>

      <div className="blogs-wrapper">
        {noPictureData &&
          noPictureData.map((blog) => (
            <BlogCard
              title={blog.title}
              description={blog.description}
              content={blog.content}
            />
          ))}
      </div>

      <div className="more">
        <button>Load More</button>
      </div>

        <div className="last-label">
            <div className="paper"></div>
            <div className="glass-wrapper">
              <Glass />
            </div>
            <div className="text">
              <div className="article">
                <Title2> Want to know more about metrics</Title2>
              </div>
              <div className="to-learn">
                <Text1 >Learn who we are and what drives us</Text1>
              </div>
              <div className="contact-us">
                <Text1 color="active_link">Contact Us</Text1>
                <BsArrowRight className="icon" />
              </div>
            </div>
        </div>
      <BottomMargin />
    </BlogWrapper>
  );
}
