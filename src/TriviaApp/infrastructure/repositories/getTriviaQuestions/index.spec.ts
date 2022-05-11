// import * as MOCKS from "../../../../__mocks__/axiosResponses/employeeBenefitAssetsAxiosResponse.mock";
// import getEmployeeBenefitAssets from ".";
// import restoreEmployeeWithBenefitAssets from "../../builders/restoreEmployeeWithBenefitAssets";
// import Employee from "../../../../domain/employeeGroupMovements/entities/Employee";
// import { Money } from "../../../../domain/common/entities/Money";
// import { apiInstance } from "../../../common/api/apiClient";

// const postStub = jest.spyOn(apiInstance, "post");

// describe("getEmployeeBenefitAssets", () => {
//   it("fetches successfully data from an API", async () => {
//     postStub.mockImplementationOnce(async () =>
//       MOCKS.employeeBenefitAssetsAxiosResponseMock()
//     );

//     const response = await getEmployeeBenefitAssets({
//       companyId: "789",
//       payload: {
//         originGroupId: "234",
//         destinationGroupId: "432",
//         employees: [
//           new Employee({
//             id: "123",
//             name: "John",
//             surname: "Doe",
//             legalId: "321",
//             previousBag: {
//               id: "source-bag-id",
//               amount: new Money({ amountInCents: 2000, currency: "EUR" }),
//               toBeIgnored: false,
//               discarded: false,
//             },
//             destinationBag: {
//               amount: new Money({ amountInCents: 1000, currency: "EUR" }),
//             },
//           }),
//         ],
//       },
//     });

//     expect(response).toEqual(
//       MOCKS.employeeBenefitAssetsAxiosResponseMock().data.content.map(
//         restoreEmployeeWithBenefitAssets
//       )
//     );
//   });
// });
