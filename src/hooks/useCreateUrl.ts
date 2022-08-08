import { TP_API_ENDPOINTS, BASE_URL } from '../config/tpio.config'

interface IApiProps {
    endpoint: string
    projectId: string
    jobId?: string | null
    testId?: string | null
    executionId?: string | null
}

const useCreateUrl = (APIProps: IApiProps) => {
    let url = ''
    if (!APIProps.projectId) throw new Error('Project ID is required')
    switch (APIProps.endpoint) {
        case TP_API_ENDPOINTS.PROJECTS:
            const parsedEndpoint = APIProps.endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedEndpoint}`
        case TP_API_ENDPOINTS.TESTS:
            const parsedTestEndpoint = APIProps.endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedTestEndpoint}`
        case TP_API_ENDPOINTS.TEST_RUN:
            if (!APIProps.testId) throw new Error('Test ID is required')
            const parsedTestRunEndpoint = APIProps.endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.testId)
            url = `${BASE_URL}${parsedTestRunEndpoint}`
        case TP_API_ENDPOINTS.TEST_EXECUTION_STATE:
            if (!APIProps.executionId || !APIProps.testId)
                throw new Error(`${!APIProps.testId ? 'Test ID' : 'Execution ID'} is required`)
            const parsedTestExecutionStateEndpoint = APIProps.endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.testId)
                .replace('$3', APIProps.executionId)
            url = `${BASE_URL}${parsedTestExecutionStateEndpoint}`
        case TP_API_ENDPOINTS.JOBS:
            const parsedJobsEndpoint = APIProps.endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedJobsEndpoint}`
        case TP_API_ENDPOINTS.JOB_RUN:
            if (!APIProps.jobId) throw new Error('Job ID is required')
            const parsedJobRunEndpoint = APIProps.endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.jobId)
            url = `${BASE_URL}${parsedJobRunEndpoint}`
        case TP_API_ENDPOINTS.JOB_EXECUTION_STATE:
            if (!APIProps.executionId || !APIProps.jobId)
                throw new Error(`${!APIProps.jobId ? 'Job ID' : 'Execution ID'} is required`)
            const parsedJobExecutionStateEndpoint = APIProps.endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.jobId)
                .replace('$3', APIProps.executionId)
            url = `${BASE_URL}${parsedJobExecutionStateEndpoint}`
        default:
            throw new Error('Invalid endpoint')
    }
    return url
}

export default useCreateUrl
