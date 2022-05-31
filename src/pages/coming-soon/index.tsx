import * as React from "react";
import { DetailsWrapper, Bold, Circle, TextWrapper } from "./styles";
import { Flex } from "../../common/components/elements/containers";
import { Title, Text1, Moon, PageWrapper } from "../../common/components/elements";

import { Timer, ButtonInput, Input} from "./component";

export interface IHomeProps {}

export  function ComingSoon(props: IHomeProps) {
  return (
    <PageWrapper>
      <Flex>
        <TextWrapper>
          <Title casing="uppercase" size="3rem">
            Something awesome is
          </Title>
        </TextWrapper>
      </Flex>
      <Flex>
        <TextWrapper>
          <Title casing="uppercase" size="3rem">
            coming soon
          </Title>
        </TextWrapper>
      </Flex>
      <Flex>
        <DetailsWrapper>
          <Text1 weight="300" size="16px">
            Your all-in-one affiliate marketing tracking software{" "}
            <Bold>track, automate</Bold> and <Bold>optimize</Bold> your
            campaigns
          </Text1>
        </DetailsWrapper>
      </Flex>

      <Flex mt="1.5rem">
        <Timer value={7} type="Days" />
        <Timer value={24} type="Hours" />
        <Timer value={54} type="Minutes" />
        <Timer last value={11} type="Seconds" />
      </Flex>

      <Flex mt="1.5rem">
        <Input label="First Name..." />
        <Input label="Last Name..." />
      </Flex>
      <Flex mt="1.5rem" mb="20rem" >
        <ButtonInput />
      </Flex>
      
      <Circle></Circle>
      <Moon color="#7F1E7B" size="6.6rem" styles={{top:"17vh",left: "12.1vw"}}></Moon>
      <Moon color="#203C71" size="5rem" styles={{top:"35vh",right: "19.5vw"}}></Moon>
      <Moon color="#7C4029" size="9.5rem" styles={{top:"87vh",left: "26vw"}}></Moon>
    </PageWrapper>

  );
}
