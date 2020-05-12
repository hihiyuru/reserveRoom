import Axios from "axios";
// 預設headers token+account
Axios.defaults.headers.common['Authorization'] = String(`Bearer`+' '+ '8O1hqEAx81KB4P7zAkOBZ6zoNEsgK6njLPXcM7J2QZsAOIlBtSiA9xzecMh5');

// 攔截status
Axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error.response)
})

// 取得房間清單
export const getRoom = params => {
  return Axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`, params);
};
// 單一房型細節
export const roomDetail = params => {
  return Axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${params}`);
};
// 預約訂房
export const booking = (roomId,params) => {
  return Axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`,params);
};
