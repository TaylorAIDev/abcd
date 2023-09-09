#!/bin/bash
# Updates contents in bucket and invalidates cloudfront cache.
# The bucket can only be accessed via IAM or CloudFront.
BUCKET=learn-ai-web-1
CLOUDFRONT=E6NA524BT4EOZ
PROFILE=damidev
npm run build && aws s3 sync ./dist/ s3://$BUCKET/ --profile $PROFILE
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT --paths "/" --profile $PROFILE