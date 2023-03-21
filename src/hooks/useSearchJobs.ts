import { useQuery } from '@tanstack/react-query';

import { jobApi } from '../api/jobApi';
import { Job, JobSearchResponse } from '../interfaces/job';

const loadJobs = async ( page: number, query: string ): Promise<Job[]> => {

	const { data } = await jobApi.get<JobSearchResponse>( 'search', {
		params: {
			page,
			num_pages: 1,
			query
		}
	} );

	return data.data;

};

interface Props {
	query: string;
	page: number;
}

export const useSearchJobs = ( { query, page }: Props ) => {

	const jobsQuery = useQuery(
		[ 'jobs', page, query ],
		() => loadJobs( page, query ),
	);

	return {
		jobsQuery
	};

};
