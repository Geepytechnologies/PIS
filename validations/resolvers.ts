import {
  approveChangeRequestSchema,
  assignBillDistributionTaskSchema,
  assignChangeRequestTaskSchema,
  assignEnforcementTaskSchema,
  assignPublicChangeRequestTaskSchema,
  forgotPasswordSchema,
  reassignTaskSchema,
  rejectChangeRequestSchema,
  resetPasswordSchema,
  signInSchema,
  updateFeeSettlementStatusSchema,
  updatePasswordSchema,
} from "@/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

/***************************************** AUTH RESOLVERS *************************************/
export const signInResolver = yupResolver(signInSchema);
export const forgotPasswordResolver = yupResolver(forgotPasswordSchema);
export const resetPasswordResolver = yupResolver(resetPasswordSchema);
export const updatePasswordResolver = yupResolver(updatePasswordSchema);

/***************************************** DASHBOARD RESOLVERS *************************************/

/***************************************** CHANGE REQUEST RESOLVERS *************************************/
export const approveChangeRequestResolver = yupResolver(
  approveChangeRequestSchema
);
export const rejectChangeRequestResolver = yupResolver(
  rejectChangeRequestSchema
);

/***************************************** TASK RESOLVERS *************************************/
export const assignBillDistributionTaskResolver = yupResolver(
  assignBillDistributionTaskSchema
);
export const assignEnforcementTaskResolver = yupResolver(
  assignEnforcementTaskSchema
);
export const assignChangeRequestTaskResolver = yupResolver(
  assignChangeRequestTaskSchema
);
export const reassignTaskResolver = yupResolver(reassignTaskSchema);
export const updateFeeSettlementStatusResolver = yupResolver(
  updateFeeSettlementStatusSchema
);
export const assignPublicChangeRequestTaskResolver = yupResolver(
  assignPublicChangeRequestTaskSchema
);
