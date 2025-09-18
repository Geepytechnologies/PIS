import { SelectOption } from "@/interfaces/controlledElements.interface";
import { icons } from "lucide-react";

export interface ISelectDropDownProps {
	selected: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
	options: SelectOption[];
	prefixIcon?: keyof typeof icons;
	className?: string;
	placeholder?: string;
	allowEmpty?: boolean;
	isLoading?: boolean;
	onEndOfRow?: (_x: boolean) => void;
	onValueChange?: (value: string) => void;
}
