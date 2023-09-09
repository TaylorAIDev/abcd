#!/bin/bash
# Creates a new Container Registry for the Lambda function images.
REGION=us-east-2
LAMBDA=learn-ai-api
PROFILE=damidev
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $DAMI_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
aws ecr delete-repository --repository-name $LAMBDA --no-force --profile $PROFILE
var=`aws ecr create-repository --repository-name $LAMBDA --query 'repository.repositoryUri' --output text --profile $PROFILE`
docker build -t $LAMBDA .
docker tag $LAMBDA:latest $var:latest
docker push $var:latest