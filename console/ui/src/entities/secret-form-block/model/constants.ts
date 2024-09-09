export const SECRET_MODAL_CONTENT_CLOUD_PROVIDERS_FORM_FIELD_NAMES = Object.freeze({
  // changing names or keys might break 'secrets' POST request
  AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
  AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
  GCP_SERVICE_ACCOUNT_CONTENTS: 'GCP_SERVICE_ACCOUNT_CONTENTS',
  DO_API_TOKEN: 'DO_API_TOKEN',
  AZURE_SUBSCRIPTION_ID: 'AZURE_SUBSCRIPTION_ID',
  AZURE_CLIENT_ID: 'AZURE_CLIENT_ID',
  AZURE_SECRET: 'AZURE_SECRET',
  AZURE_TENANT: 'AZURE_TENANT',
  HCLOUD_API_TOKEN: 'HCLOUD_API_TOKEN',
});

export const SECRET_MODAL_CONTENT_LOCAL_FORM_FIELDS = Object.freeze({
  SSH_PRIVATE_KEY: 'SSH_PRIVATE_KEY',
  USERNAME: 'USERNAME',
  PASSWORD: 'PASSWORD',
});

export const SECRET_MODAL_CONTENT_BODY_FORM_FIELDS = Object.freeze({
  ...SECRET_MODAL_CONTENT_CLOUD_PROVIDERS_FORM_FIELD_NAMES,
  ...SECRET_MODAL_CONTENT_LOCAL_FORM_FIELDS,
});

export const SECRET_MODAL_CONTENT_FORM_FIELD_NAMES = Object.freeze({
  // changing names might break 'secrets' POST request
  SECRET_TYPE: 'type',
  SECRET_NAME: 'name',
  ...SECRET_MODAL_CONTENT_BODY_FORM_FIELDS,
});