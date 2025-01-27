// Generated by https://quicktype.io

export interface JobDetailsResponse {
	status: string;
	request_id: string;
	parameters: DetailParameters;
	data: JobDetail[];
}

export interface JobDetail {
	employer_name: string;
	employer_logo: string;
	employer_website: string;
	employer_company_type: string;
	job_publisher: string;
	job_id: string;
	job_employment_type: string;
	job_title: string;
	job_apply_link: string;
	job_description: string;
	job_is_remote: boolean;
	job_posted_at_timestamp: number;
	job_posted_at_datetime_utc: string;
	job_city: string;
	job_state: string;
	job_country: string;
	job_latitude: number;
	job_longitude: number;
	job_benefits: null;
	job_google_link: string;
	job_offer_expiration_datetime_utc: string;
	job_offer_expiration_timestamp: number;
	job_required_experience: JobDetailRequiredExperience;
	job_required_skills: null;
	job_required_education: JobDetailRequiredEducation;
	job_experience_in_place_of_education: boolean;
	job_min_salary: null;
	job_max_salary: null;
	job_salary_currency: null;
	job_salary_period: null;
	job_highlights: JobDetailHighlights;
	job_job_title: string;
	estimated_salaries: EstimatedSalary[];
	apply_options: ApplyOption[];
	employer_reviews: EmployerReview[];
}

export interface ApplyOption {
	publisher: string;
	apply_link: string;
	is_direct: boolean;
}

export interface EmployerReview {
	publisher: string;
	employer_name: string;
	score: number;
	num_stars: number;
	review_count: number;
	max_score: number;
	reviews_link: string;
}

export interface EstimatedSalary {
	location: string;
	job_title: string;
	publisher_name: string;
	publisher_link: string;
	min_salary: number;
	max_salary: number;
	median_salary: number;
	salary_period: string;
	salary_currency: string;
}

export interface JobDetailHighlights {
	Qualifications?: string[];
	Responsibilities?: string[];
	Benefits?: string[];
}

export interface JobDetailRequiredEducation {
	postgraduate_degree: boolean;
	professional_certification: boolean;
	high_school: boolean;
	associates_degree: boolean;
	bachelors_degree: boolean;
	degree_mentioned: boolean;
	degree_preferred: boolean;
	professional_certification_mentioned: boolean;
}

export interface JobDetailRequiredExperience {
	no_experience_required: boolean;
	required_experience_in_months: number;
	experience_mentioned: boolean;
	experience_preferred: boolean;
}

export interface DetailParameters {
	job_id: string;
	extended_publisher_details: boolean;
}
