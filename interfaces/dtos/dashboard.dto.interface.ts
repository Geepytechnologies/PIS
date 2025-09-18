export type GetAllDashboardRequestParams = {
    area_code?: string;
    task_type_id?: string;
    request_type_id?: string;
    user_id?: string;
    year?: string;
}

export type GetAllDashboardChartDataRequestParams = {
    area_code?: string;
    year?: string;
}

export type GetAllPropertyStatsRequestParams = {
    area_code?: string;
}

export type UseGetAllDashboardProps = {
    params?: GetAllDashboardRequestParams;   
}

export type UseGetAllDashboardChartDataProps = {
    params?: GetAllDashboardChartDataRequestParams;   
}

export type UseGetAllPropertyStatsProps = {
    params?: GetAllPropertyStatsRequestParams;   
}