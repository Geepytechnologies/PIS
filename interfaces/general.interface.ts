import { JwtPayload } from "jwt-decode";
import { icons } from 'lucide-react';
import { DateRange } from "react-day-picker";

export type IRolesType = "Admin" | "Leadership Group" | "Chairman" | "Enforcement Lead" | "Biller" | "Auditor" | "Zonal Supervisor" | "Inspection Officer" | "Senior Special Assistant" | "Public";

export interface IRoleObject {
    ADMIN: IRolesType;
    LEADERSHIPGROUP: IRolesType;
    CHAIRMAN: IRolesType;
    ENFORCEMENTLEAD: IRolesType;
    BILLER: IRolesType;
    AUDITOR: IRolesType;
    ZONALSUPERVISOR: IRolesType;
    INSPECTIONOFFICER: IRolesType;
    SENIORSPECIALASSISTANT: IRolesType;
    PUBLIC: IRolesType;
}

export type IChildren = {
    children: React.ReactNode;
};

export type IBreadCrumb = {
    label: string;
    value: string;
};

export type IBreadCrumbProps = {
    links?: IBreadCrumb[];
    current: string;
    isBack?: boolean;
    //   back: boolean;
};

export interface IUserDecoded extends JwtPayload {
    UserAccountID: number;
    Firstname: string;
    Lastname: string;
    Email: string;
    Dob: string;
    Gender: string;
    Country: string;
    CurrentLocation: string;
    Phonenumber: string;
    RegistrationDate: string;
    Isactive: string;
    SmsNotification: string;
    EmailNotification: string;
    UserType: IRolesType;
}

export interface ILoadingProps {
    color?: string;
    size?: number;
}

export interface CarouselItem {
	id: number;
	imageUrl: string;
	text: string;
}

export interface AvatarProps {
    name: string;
    size?: number;
    backgroundColor?: string;
    textColor?: string;
}

export interface AvatarProps2 {
    name: string;
    className?: string;
    initialsClass?: string;
}

export interface IconProps {
    name: keyof typeof icons; // keyof typeof icons represents the valid icon names
    color?: string;
    size?: number;
    className?: string;
}

export interface IDashboardCountProps {
    label: string;
    secondaryLabel?: string;
    count: number;
    secondaryCount?: number;
    tertiaryCount?: number;
    changeRate: number;
    positiveCount?: number;
    negativeCount?: number;
    positiveLabel?: string;
    negativeLabel?: string;
    path: string;
    id?: string;
    isLoading?: boolean;
    bg: string;
    icon: keyof typeof icons;
    type: string;
}

export interface IRevenueAndPaymentsDashboardStatProps {
    label: string;
    secondaryLabel: string;
    total: number;
    current: number;
    previous: number;
    completionRate: number;
    currentYear: number;
    previousYear: number;
    path: string;
    isLoading: boolean;
    bg: string;
    icon: keyof typeof icons;
}

export interface IDashboardStatProps {
    label: string;
    total: number;
    positiveCount: number;
    negativeCount: number;
    neutralCount?: number;
    positiveLabel: string;
    negativeLabel: string;
    neutralLabel?: string;
    hasNeutralCount?: boolean;
    path: string;
    isLoading: boolean;
    icon: keyof typeof icons;
}

export interface IDashboardStatProps2 {
    label: string;
    total: number;
    positiveCount: number;
    negativeCount: number;
    neutralCount?: number;
    positiveLabel: string;
    negativeLabel: string;
    neutralLabel?: string;
    hasNeutralCount?: boolean;
    isLoading: boolean;
    icon: keyof typeof icons;
}

export interface IUserCountProps {
    label: string;
    active: number;
    inactive: number;
    count: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface IBillViewCountProps {
    label: string;
    positiveCount: number;
    negativeCount: number;
    neutralCount?: number;
    positiveLabel: string;
    negativeLabel: string;
    neutralLabel?: string;
    hasNeutralCount?: boolean;
    totalCount: number;
    icon: keyof typeof icons;
    isLoading: boolean;
    billionView?: boolean;
    showCurrency?: boolean;
}

export interface ITaskStatusCountProps {
    label: string;
    positiveCount: number;
    negativeCount: number;
    positiveLabel: string;
    negativeLabel: string;
    totalCount: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface IChangeRequestStatusCountProps {
    label: string;
    positiveCount: number;
    negativeCount: number;
    neutralCount?: number;
    positiveLabel: string;
    negativeLabel: string;
    neutralLabel?: string;
    hasNeutralCount?: boolean;
    totalCount: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface IChangeRequestApprovalCountProps {
    label: string;
    count: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface IDeliveredBillCountProps {
    label: string;
    count: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface IIssueTaskCountProps {
    label: string;
    count: number;
    icon: keyof typeof icons;
    isLoading: boolean;
}

export interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ name: string; value: number }>; // Payload type
    label?: string;
}

export interface IPagination {
    pageIndex: number;
    pageSize: number;
}

export interface ITableCellMenuItem {
    label: string;
    icon: keyof typeof icons;
    iconColor: string;
    handleClick: () => void;
}

export interface ITableCellActionMenuProps {
    menuLabel?: string;
    menuItems: ITableCellMenuItem[];
}

export interface DateRangePickerProps {
    selected: DateRange | undefined;
    onChange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
    placeHolder?: string;
    disableFuture?: boolean;
    dateFormat?: string;
    className?: React.HTMLAttributes<HTMLDivElement>;
    buttonClassName?: string;
    iconClassName?: string;
    calendarClassName?: string;
}

export type ParseQueryParams = Record<string | symbol | number, string | string[] | boolean>;

export type IBaseQueryParams = {
    page?: number;
    perPage?: number;
    search_term?: string;
};

export interface IPaginationData {
    totalRecords: number;
    totalPages: number | null;
    currentPage: number | null;
    itemsPerPage: number | null;
    nextPage: number | null;
    prevPage: number | null;
}

export type UseErrorQueryHandlerProps = {
    message?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
    isSuccess?: boolean;
    isError?: boolean;
};

export interface IDashboardProps {
    area_code?: string[];
    task_type_id?: string[];
    request_type_id?: string[];
    user_id?: string[];
    year?: string[];
}