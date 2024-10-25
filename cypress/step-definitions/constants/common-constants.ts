const commonConstants = {
  EMAIL_FIELD: '#form_item_email',
  LAST_NAME_FIELD: '#form_item_lastName',
  FIRST_NAME_FIELD: '#form_item_firstName',
  ABOUT_US_FIELD: '.ant-select-selection-item',
  SERVICES_PRINTING_FIELD: '.ant-checkbox-input[value="1"]',
  SERVICES_LOGISTICS_FIELD: '.ant-checkbox-input[value="2"]',
  SERVICES_ADVER_FIELD: '.ant-checkbox-input[value="3"]',
  ASSOCIATION_TYPE_PROSPECT_FIELD: '.ant-radio-input[value="1"]',
  ASSOCIATION_TYPE_PARTNER_FIELD: '.ant-radio-input[value="2"]',
  ASSOCIATION_TYPE_RESELLER_FIELD: '.ant-radio-input[value="3"]',
  ASSOCIATION_TYPE_VENDOR_FIELD: '.ant-radio-input[value="4"]',
  ASSOCIATION_TYPE_OTHER_FIELD: '.ant-radio-input[value="5"]',
  EXPLANATION_FIELD: '#form_item_explanation',
  SUBMIT_BUTTON: '[type="submit"]'
} as const;
export default commonConstants;
