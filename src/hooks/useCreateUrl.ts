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
    let endpoint = ''

    if (!APIProps.projectId) throw new Error('Project ID is required')

    switch (APIProps.endpoint) {
        case 'PROJECTS':
            endpoint = TP_API_ENDPOINTS.PROJECTS
            const parsedEndpoint = endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedEndpoint}`
            break
        case 'TESTS':
            endpoint = TP_API_ENDPOINTS.TESTS
            const parsedTestEndpoint = endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedTestEndpoint}`
            break
        case 'TEST_RUN':
            endpoint = TP_API_ENDPOINTS.TEST_RUN
            if (!APIProps.testId) throw new Error('Test ID is required')
            const parsedTestRunEndpoint = endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.testId)
            url = `${BASE_URL}${parsedTestRunEndpoint}`
            break
        case 'TEST_EXECUTION_STATE':
            endpoint = TP_API_ENDPOINTS.TEST_EXECUTION_STATE
            if (!APIProps.executionId || !APIProps.testId)
                throw new Error(`${!APIProps.testId ? 'Test ID' : 'Execution ID'} is required`)
            const parsedTestExecutionStateEndpoint = endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.testId)
                .replace('$3', APIProps.executionId)
            url = `${BASE_URL}${parsedTestExecutionStateEndpoint}`
            break
        case 'JOBS':
            endpoint = TP_API_ENDPOINTS.JOBS
            const parsedJobsEndpoint = endpoint.replace('$1', APIProps.projectId)
            url = `${BASE_URL}${parsedJobsEndpoint}`
            break
        case 'JOB_RUN':
            endpoint = TP_API_ENDPOINTS.JOB_RUN
            if (!APIProps.jobId) throw new Error('Job ID is required')
            const parsedJobRunEndpoint = endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.jobId)
            url = `${BASE_URL}${parsedJobRunEndpoint}`
            break
        case 'JOB_EXECUTION_STATE':
            endpoint = TP_API_ENDPOINTS.JOB_EXECUTION_STATE
            if (!APIProps.executionId || !APIProps.jobId)
                throw new Error(`${!APIProps.jobId ? 'Job ID' : 'Execution ID'} is required`)
            const parsedJobExecutionStateEndpoint = endpoint
                .replace('$1', APIProps.projectId)
                .replace('$2', APIProps.jobId)
                .replace('$3', APIProps.executionId)
            url = `${BASE_URL}${parsedJobExecutionStateEndpoint}`
            break
        default:
            throw new Error('Invalid endpoint')
    }
    return url
}

export default useCreateUrl
