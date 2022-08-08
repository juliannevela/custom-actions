import * as core from '@actions/core'
import { API_KEY } from './config/tpio.config'
import useCreateUrl from './hooks/useCreateUrl'

const API_HEADERS = {
    Authorization: API_KEY,
}
const jobStatus = []

async function run(): Promise<void> {
    try {
        core.info(`Initializing job execution for Project ${core.getInput('projectId')}`)
        const jobData = await getJobInfo(core.getInput('jobId'))
        core.info(`Found job ${jobData.id} ready to execute.`)
        const jobExecution = await executeSingleJob(jobData.id)

        core.info(`Job ${jobExecution.id} execution started.`)
        jobStatus.push({
            ...jobExecution,
            status: 'Pending',
            executionId: jobExecution.id,
        })
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message)
    }
}

async function getAllJobs() {
    const jobs = await fetch(
        useCreateUrl({
            endpoint: core.getInput('endpoint'),
            projectId: core.getInput('projectId'),
        }),
        {
            method: 'GET',
            headers: API_HEADERS,
        }
    )
    const jobsData = await jobs.json()
    core.info(`Found ${jobsData.length} jobs ready to execute.`)
    return jobsData
}
async function getJobInfo(jobId: string) {
    const job = await fetch(
        useCreateUrl({
            endpoint: core.getInput('endpoint'),
            projectId: core.getInput('projectId'),
            jobId: jobId,
        }),
        {
            method: 'GET',
            headers: API_HEADERS,
        }
    )
    const jobData = await job.json()
    return jobData
}
async function executeSingleJob(jobId: string) {
    const job = await fetch(
        useCreateUrl({
            endpoint: core.getInput('endpoint'),
            projectId: core.getInput('projectId'),
            jobId: jobId,
        }),
        {
            method: 'POST',
            headers: API_HEADERS,
        }
    )
    const jobData = await job.json()
    core.info(`Executing job ${jobData.id}`)
    return jobData
}

run()
