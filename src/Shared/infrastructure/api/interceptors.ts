// import i18next from "i18next";

import {
	AxiosInstance,
	AxiosError,
	AxiosResponse,
} from "axios";

export default function interceptors(axiosInstance: AxiosInstance) {
	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		(error: AxiosError) => {
			// const status = error.response?.status;
			// const code = error?.response?.data?.code;

			// if (status && status >= 400 && status < 500) {
			// 	const message = i18next.t([
			// 		`feedback-messages.errors.${code}`,
			// 		"feedback-messages.errors.fallback",
			// 	]);
			
			// }

			// if (status && status >= 500) {
			// 	const message = i18next.t("feedback-messages.statusCode.500");
			// }

			return Promise.reject(error);
		},
	);
}
