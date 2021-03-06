import styled from "styled-components";
import { DashedText } from "../../../common/components/UI";

export interface IBlogCardProps {
  imageUrl?: string;
  description: string;
  title: string;
  content: string;
  link?: string;
}

interface BlogProps {
  imageUrl: string | null | undefined;
}

export const BlogWrapper = styled.div<BlogProps>`
  width: 25rem;
  margin: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0px 0px 30px #00000038;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
   width: 100%;
  }

  .image {
    img {
      width: 100%;
    }
  }

  .texts {
    padding: 0 1rem;
    .desc {
      margin-top: 1rem;
      h3 {
        font-weight: 200;
        font-size: 0.65rem;
        text-transform: uppercase;
      }
    }

    .title {
      margin-top: 1rem;
      h2 {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 2rem;
        padding-right: 5rem;
        text-transform: capitalize;

        @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
         font-size: 1rem;
         padding-right: 1rem;
         line-height: 1.5rem;
        }
      }
    }

    .content {
      margin-top: 1.2rem;
      h3 {
        font-size: 0.85rem;
        font-weight: 300;

        @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
         font-size: .8rem;
         text-align: justify;
        }
      }
    }

    .dashed-text {
      margin-top: 1rem;
      display: flex;
    }
  }
`;

export function BlogCard({
  imageUrl,
  description,
  title,
  content,
  link,
}: IBlogCardProps) {
  return (
    <BlogWrapper imageUrl={imageUrl}>
      {imageUrl && (
        <div className="image">
          <img src={imageUrl} alt={description} />
        </div>
      )}

      <div className="texts">
        <div className="desc">
          <h3>{description}</h3>
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="content">
          <h3 color="muted">{content}</h3>
        </div>
        <div className="dashed-text">
          <DashedText color="active_link" text="Read More" />
        </div>
      </div>
    </BlogWrapper>
  );
}
