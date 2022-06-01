import styled from "styled-components";
import { Flex } from "../../common/components/elements";

export const BlogWrapper = styled(Flex)`
  min-height: 100vh;
  padding-top: 10rem;
  background-color: rgb(250, 250, 250);
  flex-direction: column;
  justify-content: flex-start;

  .title-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 0 8%;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
      flex-direction: column;
      align-items: center;
    }

    .blog-title-wrapper {
      width: 53%;

      @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
        width: 100%;
        margin-bottom: 3rem;
      }
    }

    .search {
      border: 1px solid ${({ theme }) => theme.text.inverted};
      display: flex;
      width: 30rem;
      height: 4rem;
      border-radius: 1.8rem;
      position: relative;

      @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
        width: 100%;
        height: 3rem;
        margin-bottom: 3rem;
      }

      input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        padding-left: 3rem;
        font-size: 1rem;

        @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
          padding-left: 1.2rem;
          font-size: 0.8rem;
        }
      }

      .icon {
        position: absolute;
        right: 5%;
        top: 13%;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.text.muted};

        @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
          font-size: 1.8rem;
          top: 20%;
        }
      }
    }
  }

  .blogs-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 6%;
    margin: 3rem 0;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      margin: 0;
    }
  }

  .more {
    width: 100%;
    margin: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 13rem;
      height: 3.5rem;
      border-radius: 1.7rem;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.text.primary};
      background-color: ${({ theme }) => theme.text.secondary_button};
      font-size: 1rem;
      text-transform: uppercase;

      @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
         width: 10rem;
         height: 3rem;
         font-size: .8rem;
        }
    }
  }

  .last-label {
    width: 100%;
    height: 22rem;
    background-image: linear-gradient(0deg, rgb(25, 9, 60), rgb(33, 63, 114));
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10.5%;

    .paper {
      width: 15rem;
      height: 7rem;
      background-image: linear-gradient(177deg, #753217 0%, #19073b 100%);
    }

    .glass-wrapper {
      width: 28rem;
      height: 15rem;
      position: absolute;
      right: 8%;
    }

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 8%;

      @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
          padding-left: 5%;
        }

      .article {
        margin-bottom: 1rem;
      }
      .contact-us {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          margin-left: 1rem;
          color: ${({ theme }) => theme.text.active_link};
        }
      }
    }
  }
`;
