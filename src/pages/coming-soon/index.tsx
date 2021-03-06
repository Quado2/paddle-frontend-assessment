import { useContext, useEffect, useState } from "react";

import {
  DetailsWrapper,
  Bold,
  Circle,
  TextWrapper,
  MoonsWrapper,
  Text,
  InputWrapper,
  TopWrapper,
} from "./styles";
import { Flex } from "../../common/components/elements/containers";
import { Text1, Moon, PageWrapper } from "../../common/components/elements";

import { AppContext } from "../../context/AppContext";
import { Timer, ButtonInput, Input } from "./component";
import { getDateParts } from "../../utils";

export interface IHomeProps {}

const DUE_DATE = new Date("6-12-2022").getTime();

export function ComingSoon(props: IHomeProps) {
  const { showContactForm } = useContext(AppContext);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const extraDate = DUE_DATE - new Date().getTime();
      const { newDays, newHours, newMinutes, newSeconds } =
        getDateParts(extraDate);
      setSeconds(newSeconds);
      setMinutes(newMinutes);
      setHours(newHours);
      setDays(newDays);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <PageWrapper>
      <TopWrapper>
        <Flex>
          <TextWrapper>
            <Text show={showContactForm}>Something awesome is</Text>
          </TextWrapper>
        </Flex>
        <Flex>
          <TextWrapper>
            <Text show={showContactForm}>coming soon</Text>
          </TextWrapper>
        </Flex>
      </TopWrapper>

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
        <Timer value={days} type="Days" />
        <Timer value={hours} type="Hours" />
        <Timer value={minutes} type="Minutes" />
        <Timer last value={seconds} type="Seconds" />
      </Flex>

      <InputWrapper>
        <Input label="First Name..." />
        <Input label="Last Name..." />
      </InputWrapper>

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
          <Moon color="moon_3"></Moon>
        </div>
      </MoonsWrapper>
    </PageWrapper>
  );
}
