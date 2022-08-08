import { expect, it } from '@jest/globals'
import useCreateUrl from '../src/hooks/useCreateUrl'

describe('Create URL Hook', () => {
    it('should create a valid TestProject URL with the given params: Jobs Run', () => {
        const jobRunUrl = {
            endpoint: 'JOB_RUN',
            projectId: 'JobRunProjectId',
            jobId: 'JobRunJobId',
        }

        expect(useCreateUrl(jobRunUrl)).toBe(
            `https://api.testproject.io/v2/projects/${jobRunUrl.projectId}/jobs/${jobRunUrl.jobId}/run`
        )
    })
    it('should create a valid TestProject URL with the given params: Test Run', () => {
        const testRunUrl = {
            endpoint: 'TEST_RUN',
            projectId: 'TestRunProjectId',
            testId: 'TestRunTestId',
        }
        expect(useCreateUrl(testRunUrl)).toBe(
            `https://api.testproject.io/v2/projects/${testRunUrl.projectId}/tests/${testRunUrl.testId}/run`
        )
    })
    it('should create a valid TestProject URL with the given params: Test Execution State', () => {
        const testExecutionStateUrl = {
            endpoint: 'TEST_EXECUTION_STATE',
            projectId: 'TestExecutionStateProjectId',
            testId: 'TestExecutionStateTestId',
            executionId: 'TestExecutionStateExecutionId',
        }

        expect(useCreateUrl(testExecutionStateUrl)).toBe(
            `https://api.testproject.io/v2/projects/${testExecutionStateUrl.projectId}/tests/${testExecutionStateUrl.testId}/executions/${testExecutionStateUrl.executionId}/state`
        )
    })
})
