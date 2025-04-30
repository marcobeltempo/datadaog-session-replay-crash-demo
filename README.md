# datadaog-session-replay-crash-demo


## Setup

1. Add the Datadog application credentials inside [Datadog.tsx](./src/Datadog.tsx#L5-L7)
2. Install dependencies and build the app
```
yarn install
yarn prebuild
yarn ios
```

## Steps to reproduce 

1.  Interact with the date picker. Scroll past the valid dates until the UI locks up and a crashes crash occurs.
    - This might take multiple attempts, but it will eventually crash. 

