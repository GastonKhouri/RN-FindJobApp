import { useQuery } from '@tanstack/react-query';

import { jobApi } from '../api';
import { JobDetail, JobDetailsResponse } from '../interfaces';

const loadJob = async ( jobId: string ): Promise<JobDetail[]> => {

	const { data } = await jobApi.get<JobDetailsResponse>( 'job-details', {
		params: {
			job_id: jobId,
		}
	} );

	return data.data;

};

export const useJobDetails = ( jobId: string ) => {

	const jobQuery = useQuery(
		[ 'job', jobId ],
		() => loadJob( jobId ),
	);

	return {
		jobQuery
	};

};
