export const kycSelector = state => state.kyc;
export const kycTokenSelector = state => state.kyc?.token?.accessToken?.token;
export const kycTokenUrlSelector = state => state.kyc?.token?.apiUrl;
