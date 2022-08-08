/**
 * Important API Endpoints to reference:
 * Base URL: https://api.testproject.io/v2/
 * Documentation: https://api.testproject.io/docs/v2/
 *
 * Projects:
 * 1. projects/{projectId} -- Returns the project with the given ID.
 *
 * Tests:
 * 1. GET projects/{projectId}/tests/{testId} -- Returns the test with the given ID.
 * 2. GET projects/{projectId}/tests/{testId}/run -- Runs the test with the given ID.
 * 3. GET projects/{projectId}/tests/{testId}/executions/{executionId}/state -- Returns the state of the execution with the given ID.
 *
 * Jobs:
 * 1. POST projects/{projectId}/jobs/{jobId}/run -- Runs the job with the given ID.
 *
 */

export const BASE_URL = 'https://api.testproject.io/v2/'
export const API_KEY = '${{ secrets.TP_API_KEY }}'

export const enum TP_API_ENDPOINTS {
    PROJECTS = 'projects/$1',
    TESTS = 'projects/$1/tests',
    TEST_RUN = 'projects/$1/tests/$2/run',
    TEST_EXECUTION_STATE = 'projects/$1/tests/$2/executions/$3/state',
    JOBS = 'projects/$1/jobs',
    JOB_RUN = 'projects/$1/jobs/$2/run',
    JOB_EXECUTION_STATE = 'projects/$1/jobs/$2/executions/$3/state',
}
