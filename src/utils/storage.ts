/** @format */

import secureLocalStorage from "react-secure-storage";

const getUser = async () => {
  let userData = "";
  try {
    let user: any = "";
    user = await secureLocalStorage.getItem("LoggedInUserData");
    userData = JSON.parse(user);
  } catch (error) {}
  return userData;
};

const setUser = async (data: any) => {
  try {
    await secureLocalStorage.setItem("LoggedInUserData", JSON.stringify(data));
  } catch (error) {}
};

const getEvidence = async () => {
  let evidenceData = "";
  let data: any = "";
  try {
    data = await localStorage.getItem("evidence_data");
    evidenceData = JSON.parse(data);
  } catch (error) {}
  return evidenceData;
};

export { getUser, setUser, getEvidence };
