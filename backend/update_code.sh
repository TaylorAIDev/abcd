#!/bin/bash
# Update the code of the lambda function by uploading a new image.
REGION=us-east-2
LAMBDA=learn-ai-api
PROFILE=damidev
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $DAMI_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
var=`aws ecr describe-repositories  --profile $PROFILE --repository-names $LAMBDA --query 'repositories[0].repositoryUri' --output text`
docker build -t $LAMBDA .
docker tag $LAMBDA:latest $var:latest
docker push $var:latest
aws lambda update-function-code --function-name $LAMBDA --image-uri $var:latest --profile $PROFILE