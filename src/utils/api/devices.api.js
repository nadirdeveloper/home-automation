import axios from "./axios";
import Axios from 'axios';
export const getRoomDevicesApi = roomId => {
  return axios.get(`/rooms/${roomId}/devices.json`);
};

export const toggleDeviceSwitchApi = async ({ deviceData, deviceId }) => {
  // This would be a PATCH request for an actual server
  const metaData = await Axios.post("http://localhost:2000/appliance_switch", {
    message: deviceData.switch ? "OFF" : "ON",
    device_id: deviceId,
    up_by: "ID KHAN"
  })
  console.log({ deviceData, deviceId, metaData })
  // const response = await Axios.post('http://localhost:2000/destro/');
  const response = {
    data: {
      deviceId
    }
  };
  return new Promise((resolve, reject) => resolve(response));
};

export const updateDeviceControlValueApi = payload => {
  // This would be a PATCH request for an actual server
  const response = {
    data: {
      control: payload
    }
  };
  return new Promise((resolve, reject) => resolve(response));
};
