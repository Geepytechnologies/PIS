import { IMessageResponse } from "@/interfaces/responses/general.response";

export interface UseCreateUserProps {
    onSuccess?: (_val: IMessageResponse) => void;
    onReset?: () => void;
    onError?: (message: string) => void;
}