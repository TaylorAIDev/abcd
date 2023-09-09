REGION=us-east-1
NAME=learn-ai-api
PROFILE=damidev
TIMEOUT_SEC=8
MEMORY_SIZE=512
aws lambda update-function-configuration --function-name $NAME --profile $PROFILE --timeout $TIMEOUT_SEC --memory-size $MEMORY_SIZE --environment '{
  "Variables": {
    "OPENAI_API_KEY": "'$OPENAI_API_KEY'"
  }
}'