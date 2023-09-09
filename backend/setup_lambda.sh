#!/bin/bash
# Creates Lambda function with empty role and image. NOTE: Change the role permissions manually.
REGION=us-east-2
LAMBDA=learn-ai-api
PROFILE=damidev
aws iam create-role --role-name lambda-$LAMBDA-role --assume-role-policy-document file://roles/trust-policy.json --profile $PROFILE
sleep 20
var=`aws ecr describe-repositories --repository-names $LAMBDA --query 'repositories[0].repositoryUri' --output text --profile $PROFILE`
aws lambda create-function --function-name $LAMBDA --package-type Image --code ImageUri=$var:latest --role arn:aws:iam::$DAMI_ACCOUNT_ID:role/lambda-$LAMBDA-role --profile $PROFILE