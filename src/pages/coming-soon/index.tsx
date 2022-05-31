import { useContext } from "react";

import {
  DetailsWrapper,
  Bold,
  Circle,
  TextWrapper,
  MoonsWrapper,
  Text,
} from "./styles";
import { Flex } from "../../common/components/elements/containers";
import {
  Title,
  Text1,
  Moon,
  PageWrapper,
} from "../../common/components/elements";

import { AppContext } from "../../context/AppContext";
import { Timer, ButtonInput, Input } from "./component";

export interface IHomeProps {}

export function ComingSoon(props: IHomeProps) {

  const {showContactForm} = useContext(AppContext);

  return (
    <PageWrapper>
      <Flex>
        <TextWrapper>
          <Text show={showContactForm}>
            Something awesome is
          </Text>
        </TextWrapper>
      </Flex>
      <Flex>
        <TextWrapper>
          <Text show={showContactForm}>
            coming soon
          </Text>
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
      <Flex mt="1.5rem" mb="20rem">
        <ButtonInput show={showContactForm} />
      </Flex>

      <Circle></Circle>
      <MoonsWrapper show={showContactForm}>
        <div className="left-moon">
          <Moon color="moon_1" />
        </div>
        <div className="right-moon">
          <Moon color="moon_2" />
        </div>
        <div className="bottom-moon">
          <Moon
            color="moon_3"
          ></Moon>
        </div>
      </MoonsWrapper>
    </PageWrapper>
  );
}
