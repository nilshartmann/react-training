export function apiRequestStart(description: string) {
  return {
    type: "API_REQUEST_START",
    payload: {
      description,
    },
  } as const;
}

export type ApiRequestStartAction = ReturnType<typeof apiRequestStart>;

export function apiRequestSuccess() {
  return {
    type: "API_REQUEST_SUCCESS",
  } as const;
}

export type ApiRequestSuccessAction = ReturnType<typeof apiRequestSuccess>;

export function apiRequestFailure(error: string) {
  return {
    type: "API_REQUEST_FAILURE",
    payload: {
      error,
    },
  } as const;
}

export type ApiRequestFailureAction = ReturnType<typeof apiRequestFailure>;

export type ApiAction = ApiRequestStartAction | ApiRequestSuccessAction | ApiRequestFailureAction;
