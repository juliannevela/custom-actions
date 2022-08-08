import { expect, it } from '@jest/globals'
import * as core from '@actions/core'
import useCreateUrl from '../src/hooks/useCreateUrl'

describe('TestProject API', () => {
    it('should return 200 when accessing the TestProject API given the correct access rights', () => {
        const projectId = core.getInput('projectId')
    })
})
