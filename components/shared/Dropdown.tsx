import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { genres } from "@/constants";

type DropdownProps = {
  value?: string;
  onChangeHandler: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        {genres.length > 0 &&
          genres.map((genre, id) => (
            <SelectItem
              key={id}
              value={genre.name}
              className="py-3 cursor-pointer"
            >
              {genre.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
