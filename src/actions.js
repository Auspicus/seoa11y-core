import * as actionTypes from './actionTypes';

// users
export const userCreate = user => ({
  type: actionTypes.USER_CREATE,
  payload: { user },
  meta: {
    queue: true,
    succeed: (user, qid) => ({
      type: actionTypes.USER_CREATE_SUCCEED,
      payload: { user },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.USER_CREATE_FAIL,
      error,
      meta: { qid }
    })
  }
});

export const userLogin = user => ({
  type: actionTypes.USER_LOGIN,
  payload: { user },
  meta: {
    queue: true,
    succeed: (user, qid) => ({
      type: actionTypes.USER_LOGIN_SUCCEED,
      payload: { user },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.USER_LOGIN_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const userLogout = user => ({
  type: actionTypes.USER_LOGOUT,
  payload: { user },
  meta: {
    queue: true,
    succeed: (qid) => ({
      type: actionTypes.USER_LOGOUT_SUCCEED,
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.USER_LOGOUT_FAIL,
      error,
      meta: { qid }
    })
  }
})

// reports
export const reportCreateFromSitemap = (url, token) => ({
  type: actionTypes.REPORT_CREATE_FROM_SITEMAP,
  payload: { url, token },
  meta: {
    queue: true,
    succeed: (report, qid) => ({
      type: actionTypes.REPORT_CREATE_FROM_SITEMAP_SUCCEED,
      payload: { report },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.REPORT_CREATE_FROM_SITEMAP_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const reportCreateFromList = (urls, token) => ({
  type: actionTypes.REPORT_CREATE_FROM_LIST,
  payload: { urls, token },
  meta: {
    queue: true,
    succeed: (report, qid) => ({
      type: actionTypes.REPORT_CREATE_FROM_LIST_SUCCEED,
      payload: { report },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.REPORT_CREATE_FROM_LIST_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const reportRequest = (id, token) => ({
  type: actionTypes.REPORT_REQUEST,
  payload: { id, token },
  meta: {
    queue: true,
    succeed: (report, qid) => ({
      type: actionTypes.REPORT_REQUEST_SUCCEED,
      payload: { report },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.REPORT_REQUEST_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const reportList = (token) => ({
  type: actionTypes.REPORT_LIST,
  payload: { token },
  meta: {
    queue: true,
    succeed: (reports, qid) => ({
      type: actionTypes.REPORT_LIST_SUCCEED,
      payload: { reports },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.REPORT_LIST_FAIL,
      error,
      meta: { qid }
    })
  }
})

// urls
export const urlRequest = (id, token) => ({
  type: actionTypes.URL_REQUEST,
  payload: { id, token },
  meta: {
    queue: true,
    succeed: (url, qid) => ({
      type: actionTypes.URL_REQUEST_SUCCEED,
      payload: { url },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.URL_REQUEST_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const urlList = (filters, token) => ({
  type: actionTypes.URL_LIST,
  payload: { filters, token },
  meta: {
    queue: true,
    succeed: (urls, successFilters, qid) => ({
      type: actionTypes.URL_LIST_SUCCEED,
      payload: { urls, filters: successFilters },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.URL_LIST_FAIL,
      error,
      meta: { qid }
    })
  }
})

// issues
export const issueRequest = (id, token) => ({
  type: actionTypes.ISSUE_REQUEST,
  payload: { id, token },
  meta: {
    queue: true,
    succeed: (issue, qid) => ({
      type: actionTypes.ISSUE_REQUEST_SUCCEED,
      payload: { issue },
      meta: { qid }
    }),
    error: (error, qid) => ({
      type: actionTypes.ISSUE_REQUEST_FAIL,
      error,
      meta: { qid }
    })
  }
})
export const issueList = (filters, token) => ({
  type: actionTypes.ISSUE_LIST,
  payload: { filters, token },
  meta: {
    queue: true,
    succeed: (issues, successFilters, qid) => ({
      type: actionTypes.ISSUE_LIST_SUCCEED,
      payload: { issues, filters: successFilters },
      meta: { qid }
    }),
    fail: (error, qid) => ({
      type: actionTypes.ISSUE_LIST_FAIL,
      error,
      meta: { qid }
    })
  }
})

// queue
export const queueAdd = (action) => ({
  type: actionTypes.QUEUE_ADD,
  payload: { action }
})
export const queueRemove = (id) => ({
  type: actionTypes.QUEUE_REMOVE,
  payload: { id }
})

// errors
export const errorAdd = error => ({
  type: actionTypes.ERROR_ADD,
  payload: { error }
})
export const errorRemove = id => ({
  type: actionTypes.ERROR_REMOVE,
  payload: { id }
})
