import {
  PageWrapper,
  Flex,
  Title,
  Text1,
  Bold,
  Moon,
  
} from "../../common/components/elements";
import { Detail } from "./components/Details";
import {
  IntroWrapper,
  LeftGlassWrapper,
  InnerPaper,
  InnerPaper2,
  Glass,
  Glass2,
  IntroTextWrapper,
  SmallerTextWrapper,
  LowerText,
  BottomMargin,
  BigText,
  RightGlassWrapper,
  MidWrapper,
  LeftWrapper,
  InnerLeft,
  InnerText,
  Dot,
  BottomWrapper,
  InnerPaper3,
  InnerText2,
} from "./style";

import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export interface IAboutUsProps {}

export function AboutUs(props: IAboutUsProps) {
  return (
    <PageWrapper>
      <Flex>
        <IntroWrapper>
          <LeftGlassWrapper>
            <InnerPaper />
            <Glass />
          </LeftGlassWrapper>
          <IntroTextWrapper>
            <SmallerTextWrapper>
              <div></div>
              <Text1 weight="500" size="16px">
                ABOUT US
              </Text1>
            </SmallerTextWrapper>

            <div>
              <Title weight="400" >
                Built for Saas
              </Title>
              <Title weight="400">and E-commerce</Title>
            </div>
          </IntroTextWrapper>
          <LowerText>
            <Text1>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes
            </Text1>
          </LowerText>
          <div className="moon-wrapper">
            <Moon color="moon_2"/>
          </div>
        </IntroWrapper>
      </Flex>
      <Flex>
        <BigText>
          Metricks was developed because just like you, we need a product that
          could give <Bold>good value</Bold>
        </BigText>
      </Flex>

      <MidWrapper>
        <LeftWrapper>
          <InnerLeft>
            <Detail
              content1={`We pride ourselves in our ability to innovate and create
              world-class tools that provide reliable and efficient touchpoints
              between advertisers and affiliates`}
              number="01"
              title="WHY US"
            />
            <Dot></Dot>
          </InnerLeft>
        </LeftWrapper>

        <RightGlassWrapper>
          <InnerPaper2></InnerPaper2>
          <Glass2></Glass2>
          <InnerText>
            <Detail
              content1={`Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influencer campaigns, all from one dashboard`}
              
              content2={`Our team of experts are constantly brainstorming, testing and 
              developing new solutions with only one thing in mind - your business growth. Your
              success is our success and by giving you the tools you need to scale,
              we grow as well.`}
              number="02"
              title="GROWING WITH YOU"
            />
          </InnerText>
        </RightGlassWrapper>
      </MidWrapper>
      <BottomWrapper>
        <InnerPaper3 />
        <Glass2 />
        <InnerText2>
          <div className="question"><h2>Got a Question</h2></div>
          <div className="description"><h3>See how Metricks can help your business grow with best affiliate marketing tracking software</h3></div>
          <div className="contact"><button>Contact us</button><HiOutlineArrowNarrowRight /></div>
        </InnerText2>
      </BottomWrapper>
      <BottomMargin></BottomMargin>
    </PageWrapper>
  );
}
