import { CognitoIdentityCredentials } from 'aws-sdk';
import AWS from 'aws-sdk/global';

const awsConfig = {
  region: 'your_aws_region', // e.g., 'us-east-1'
  identityPoolId: 'your_identity_pool_id',
  userPoolId: 'your_user_pool_id',
  userPoolWebClientId: 'your_user_pool_web_client_id',
};

AWS.config.update({
  region: awsConfig.region,
  credentials: new CognitoIdentityCredentials({
    IdentityPoolId: awsConfig.identityPoolId,
  }),
});

export default AWS;
