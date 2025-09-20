import * as yup from "yup";

/***************************************** AUTH SCHEMAs *************************************/
export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  salt: yup.string().required("salt is required"),
  new_password: yup.string().required("New Password is required"),
  confirm_password: yup.string().required("Confirm Password is required"),
});

export const updatePasswordSchema = yup.object({
  current_password: yup.string().required("Current Password is required"),
  new_password: yup.string().required("New Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("Confirm Password is required"),
});

/***************************************** DASHBOARD SCHEMAs *************************************/

/***************************************** TASK SCHEMAs *************************************/
export const assignBillDistributionTaskSchema = yup.object({
  user_id: yup.string().required("User is required"),
  task_dates: yup.object().shape({
    from: yup
      .string()
      .required(
        "Start Date is required"
      ) /* .min(new Date(), "Start date cannot be in the past") */,
    to: yup.string().required("End Date is required"),
  }),
  bill_id: yup
    .array()
    .of(yup.string())
    .required("Bill is required & must be more than 1"),
  description: yup.string(),
});

export const assignEnforcementTaskSchema = yup.object({
  user_id: yup.string().required("User is required"),
  task_dates: yup.object().shape({
    from: yup
      .string()
      .required(
        "Start Date is required"
      ) /* .min(new Date(), "Start date cannot be in the past") */,
    to: yup.string().required("End Date is required"),
  }),
  bill_id: yup
    .array()
    .of(yup.string())
    .required("Bill is required & must be more than 1"),
  description: yup.string(),
});

export const assignChangeRequestTaskSchema = yup.object({
  user_id: yup.string().required("User is required"),
  task_dates: yup.object().shape({
    from: yup
      .string()
      .required(
        "Start Date is required"
      ) /* .min(new Date(), "Start date cannot be in the past") */,
    to: yup.string().required("End Date is required"),
  }),
  property_id: yup
    .array()
    .of(yup.string())
    .required("Property is required & must be more than 1"),
  description: yup.string(),
});

export const assignPublicChangeRequestTaskSchema = yup.object({
  user_id: yup.string().required("User is required"),
  task_dates: yup.object().shape({
    from: yup
      .string()
      .required(
        "Start Date is required"
      ) /* .min(new Date(), "Start date cannot be in the past") */,
    to: yup.string().required("End Date is required"),
  }),
  web_request_id: yup
    .array()
    .of(yup.string())
    .required("Request ID is required & must be more than 1"),
  description: yup.string(),
});

export const reassignTaskSchema = yup.object({
  user_id: yup.string().required("User is required"),
  task_dates: yup.object().shape({
    from: yup
      .string()
      .required(
        "Start Date is required"
      ) /* .min(new Date(), "Start date cannot be in the past") */,
    to: yup.string().required("End Date is required"),
  }),
  task_id: yup
    .array()
    .of(yup.string())
    .required("Task ID is required & must be more than 1"),
  description: yup.string(),
});

export const updateFeeSettlementStatusSchema = yup.object({
  fee_settlement_status: yup
    .string()
    .required("Fee Settlement Status is required"),
  task_id: yup
    .array()
    .of(yup.string())
    .required("Task ID is required & must be more than 1"),
});

/***************************************** CHANGE REQUEST SCHEMAs *************************************/
export const approveChangeRequestSchema = yup.object({
  ogc_fid: yup.string().required("Request ID is required"),
  remarks: yup.string(),
});

export const rejectChangeRequestSchema = yup.object({
  ogc_fid: yup.string().required("Request ID is required"),
  remarks: yup.string(),
});
