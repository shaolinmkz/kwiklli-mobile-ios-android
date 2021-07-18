import { IBank } from '../Interfaces';

const loginCredentials = {
  username: "oluwole.s@softcom.ng",
  password: "123456",
};

export const registeredBanks: Array<IBank> = [
  {
    appName: "Select a bank",
    appIcon: "https://res.cloudinary.com/shaolinmkz/image/upload/v1605358954/softcom/kwiklli/npay-logo.svg",
    apiKey: "",
    bankCode: "",
    label: "Select a bank",
    value: "",
    username: "",
    password: "",
  },
  {
    appName: "Zenith Bank",
    appIcon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Zenith-Bank-logo.png",
    apiKey: "MWW-iuTrA.c619fc23-3d57-49cf-a048-6fe07d7c93e0",
    bankCode: "000015",
    label: "Zenith Bank",
    value: "000015",
    ...loginCredentials,
  },
];
