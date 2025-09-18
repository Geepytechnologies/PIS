export interface IDashboardResponse {
	total_generated_bills: number;
	total_delivered_bills: number;
	total_undelivered_bills: number;
	total_tasks: number;
	total_completed_tasks: number;
	total_uncompleted_tasks: number;
	total_issue_noticed: number;
	total_paid_bills: number;
	total_unpaid_bills: number;
	total_sum_billed_amount: number;
	total_sum_amount_paid: number;
	total_sum_amount_unpaid: number;
	total_change_requests: number;
	total_approved_change_requests: number;
	total_rejected_change_requests: number;
	total_pending_change_requests: number;
	total_first_approval_change_requests: number;
	total_second_approval_change_requests: number;
	total_final_approval_change_requests: number;
	total_admin_users: number;
	total_active_admin_users: number;
	total_inactive_admin_users: number;
	total_billers: number;
	total_active_billers: number;
	total_inactive_billers: number;
	total_inspection_officers: number;
	total_active_inspection_officers: number;
	total_inactive_inspection_officers: number;
	total_enforcement_leads: number;
	total_active_enforcement_leads: number;
	total_inactive_enforcement_leads: number;
	total_zonal_supervisors: number;
	total_active_zonal_supervisors: number;
	total_inactive_zonal_supervisors: number;
	total_chairmen: number;
	total_active_chairmen: number;
	total_inactive_chairmen: number;
	total_leadership_group: number;
	total_active_leadership_group: number;
	total_inactive_leadership_group: number;
    total_expected_revenue: number;
    current_total_expected_revenue: number;
    total_previous_arrears: number;
    total_transacted_amount: number;
    current_total_transacted_amount: number;
    previous_total_transacted_amount: number;
    current_payment_completion_rate: number;
    current_year: number;
    previous_year: number;
	total_enforcement_tasks: number;
	total_completed_enforcement_tasks: number;
	total_assigned_enforcement_tasks: number;
	total_issue_noticed_enforcement_tasks: number;
	total_bill_tasks: number;
	total_completed_bill_tasks: number;
	total_assigned_bill_tasks: number;
	total_issue_noticed_bill_tasks: number;
	total_public_change_requests: number;
	total_assigned_public_change_requests: number;
	total_unassigned_public_change_requests: number;
	total_completed_public_change_requests: number;
}

export interface IPropertyStatsResponse {
	total_properties: number;
    total_non_billable_properties: number;
    total_billable_properties: number;
    total_paid_properties: number;
    total_unpaid_properties: number;
}

export interface IDashboardChartDataResponse {
	month: string;
	total_payments: number;
}

export interface GetAllDashboardResponse {
    error: boolean;
    dashboard: IDashboardResponse;
}

export interface GetAllDashboardChartDataResponse {
	error: boolean;
	chartData: IDashboardChartDataResponse[];
}

export interface GetAllPropertyStatsResponse {
	error: boolean;
	propertyStats: IPropertyStatsResponse;
}