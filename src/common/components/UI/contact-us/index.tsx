import { BsArrowRight } from "react-icons/bs";
import { Input, TextArea } from "../";
import { ContactWrapper,Text} from "./style";

import { inputData } from "./data";

export interface IContactUsProps {}

export function ContactUs(props: IContactUsProps) {
  return (
    <ContactWrapper>
      <div className="close">
        <BsArrowRight className="icon" />
      </div>
      <div className="text">
        <Text>Hey, we are still in the works, but </Text>
        <Text>you can send us a message!</Text>
      </div>
      {inputData &&
        inputData.map((data) => (
          <Input
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            title={data.title} />
        ))}

      <TextArea
        name="help"
        title="Tell Us What You Need Help With:"
        placeholder='Enter A Topic, Like "Channel Problem..." '
      />
    </ContactWrapper>
  );
}
