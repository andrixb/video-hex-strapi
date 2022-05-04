import i18next from "i18next";

import {
	AxiosInstance,
	AxiosError,
	AxiosResponse,
	AxiosRequestConfig,
} from "axios";
// import auth0Client from "../auth0";

export default function interceptors(axiosInstance: AxiosInstance) {
	// axiosInstance.interceptors.request.use(
	//   async (config: AxiosRequestConfig<any>) => {
	//     if (!auth0Client.isAuthenticated() && auth0Client.getAccessToken()) {
	//       await auth0Client.refreshSession();
	//     }
	//     if (config.headers) {
	//       config.headers.Authorization = `Bearer ${auth0Client.getAccessToken()}`;
	//     }
	//     return config;
	//   },
	// );

	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		(error: AxiosError) => {
			const status = error.response?.status;
			const code = error.response?.data?.code;

			if (status && status >= 400 && status < 500) {
				const message = i18next.t([
					`v2.feedback-messages.errors.${code}`,
					"v2.feedback-messages.errors.fallback",
				]);
				// toast.show(message, { type: "error" });
			}

			if (status && status >= 500) {
				const message = i18next.t("v2.feedback-messages.statusCode.500");
				// toast.show(message, { type: "error" });
			}

			return Promise.reject(error);
		},
	);
}
