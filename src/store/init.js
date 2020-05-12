import * as api from "@/http";

export default (store) => {
  //載入完畢
  let roomID = window.localStorage.getItem("roomId") == null || window.localStorage.getItem("roomId") == undefined ? '111' : window.localStorage.getItem("roomId");
  api.roomDetail(roomID).then(res => {
    console.log('roomID', roomID);

    if (res.data.success === true) {
      console.log('====================取得房間清單=========================');
      store.dispatch("personal/roomInfo", res.data.room[0]);
      console.log("personal/roomInfo", res.data.room[0]);
    } else {
      console.log('====================失敗=========================');
    }
    console.log('====================finish=========================');
  })

};
