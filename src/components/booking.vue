<template>
  <div class="booking">
    <div class="bookAnRoom" v-if="showVeiw==='booking'">
      <!-- 左方表單 -->
      <div class="DleftWrap">
        <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手機號碼">
            <el-input v-model="form.tel" type="number"></el-input>
          </el-form-item>
          <el-form-item label="入住日期">
            <el-date-picker
              v-model="startTime"
              type="date"
              placeholder="選擇日期"
              format="yyyy - MM - dd"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="退房日期">
            <el-date-picker
              v-model="endTime"
              type="date"
              placeholder="選擇日期"
              format="yyyy - MM - dd"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item class="iDays">
            <span>{{iDays}}{{$t('天，')}}</span>
            <span>{{night}}{{$t('晚')}}</span>
          </el-form-item>
          <el-form-item class="total">
            <p>{{$t('總計')}}</p>
            <span class="dollor">{{`$${total}`}}</span>
            <span>{{$t('起')}}</span>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit" class="submit">{{$t('確認送出')}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 右方資訊 -->
      <div class="DrightWrap">
        <!-- 房型名稱 -->
        <div class="nameWrap">
          <p class="roomName">{{$t(roomDetail.name)}}</p>
        </div>
        <!-- 簡介 -->
        <div class="Introduction">
          <p>{{`${roomDetail.GuestMax}人 ‧ ${roomDetail.bed} ‧ 衛浴${roomDetail.PrivateBath}間 ‧ ${roomDetail.Footage}平方公尺`}}</p>
          <p>{{$t(`平日 (一~四) 價格 : ${roomDetail.normalDayPrice} / 假日 (五~日) 價格 : ${roomDetail.holidayPrice}`)}}</p>
        </div>
        <!-- ICON -->
        <div class="amenities">
          <div class="iconItem" v-if="amenities[`Breakfast`]">
            <img src="../assets/img/trueIcon/Breakfast.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Mini-Bar`]">
            <img src="../assets/img/trueIcon/Mini-Bar.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Room-Service`]">
            <img src="../assets/img/trueIcon/Room-Service.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Wi-Fi`]">
            <img src="../assets/img/trueIcon/Wi-Fi.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Child-Friendly`]">
            <img src="../assets/img/trueIcon/Child-Friendly.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Television`]">
            <img src="../assets/img/trueIcon/Television.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Great-View`]">
            <img src="../assets/img/trueIcon/Great-View.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Refrigerator`]">
            <img src="../assets/img/trueIcon/Refrigerator.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Sofa`]">
            <img src="../assets/img/trueIcon/Sofa.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Pet-Friendly`]">
            <img src="../assets/img/trueIcon/Pet-Friendly.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Smoke-Free`]">
            <img src="../assets/img/trueIcon/Smoke-Free.png" />
          </div>
          <div class="iconItem" v-if="amenities[`Air-Conditioner`]">
            <img src="../assets/img/trueIcon/Air-Conditioner.png" />
          </div>
        </div>
        <!-- 訂房資訊 -->
        <div class="roomDescribe">
          <p>{{$t('訂房資訊')}}</p>
          <ul>
            <li v-for="(describe,index) in description" :key="index">‧{{$t(describe.describe)}}</li>
          </ul>
        </div>
        <!-- 預約流程 -->
        <div class="process">
          <p>{{$t('預約流程')}}</p>
          <div class="blockWrap">
            <div class="blockItem" v-for="(block,index) in block" :key="index">
              <div class="picBG">
                <img :src="block.pic" alt />
              </div>
              <div class="textItem">
                <p>{{$t(block.text)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 失敗 -->
    <div class="fail" v-else-if="showVeiw==='bookingFail'">
      <div class="imgItem">
        <img src="../assets/img/icon/fail.png" alt />
      </div>
      <h3>{{$t('預約失敗')}}</h3>
      <p>{{$t(err)}}</p>
    </div>
    <!-- 成功 -->
    <div class="fail" v-else-if="showVeiw==='bookingSuccess'">
      <div class="imgItem">
        <img src="../assets/img/icon/success.png" alt />
      </div>
      <h3>{{$t('預約成功')}}</h3>
      <p>{{$t('請留意簡訊發送訂房通知，入住當日務必出示此訂房通')}}</p>
      <p>{{$t('若未收到簡訊請來電確認，謝謝您')}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({})
  },
  watch: {
    startTime: function(startTime) {
      let endTime = this.endTime;
      let aDate, oDate1, oDate2, iDays;
      aDate = startTime.split("/");
      oDate1 = new Date(aDate[1] + "/" + aDate[2] + "/" + aDate[0]); // 轉換為 06/18/2016 格式
      aDate = endTime.split("/");
      oDate2 = new Date(aDate[1] + "/" + aDate[2] + "/" + aDate[0]);
      iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
      if (isNaN(iDays)) {
        this.iDays = 0;
        this.nights = 0;
      } else {
        // 幾天
        this.iDays = iDays + 1;
        // 幾晚
        this.night = iDays;
        // 計算總價
        this.total = this.roomDetail.normalDayPrice * iDays;
      }
    },
    endTime: function(endTime) {
      let startTime = this.startTime;
      let aDate, oDate1, oDate2, iDays;
      aDate = startTime.split("/");
      oDate1 = new Date(aDate[1] + "/" + aDate[2] + "/" + aDate[0]); // 轉換為 06/18/2016 格式
      aDate = endTime.split("/");
      oDate2 = new Date(aDate[1] + "/" + aDate[2] + "/" + aDate[0]);
      iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
      if (isNaN(iDays)) {
        this.iDays = 0;
        this.nights = 0;
      } else {
        // 幾天
        this.iDays = iDays + 1;
        // 幾晚
        this.night = iDays;
        // 計算總價
        this.total = this.roomDetail.normalDayPrice * iDays;
      }
    },
    showVeiw: function(e) {
      console.log(e);
      if (e === "bookingFail") {
        setTimeout(() => {
          this.showVeiw = "booking";
        }, 2000);
      } else if (e === "bookingSuccess") {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  },
  mounted() {
    this.getRoomDetail();
  },
  data() {
    return {
      err: "",
      showVeiw: "booking",
      block: [
        {
          pic: require("../assets/img/icon/pen.png"),
          text: "查看房型以及最低房價並且送出線上預約單"
        },
        {
          pic: require("../assets/img/icon/searchChat.png"),
          text: "系統立即回覆是否預訂成功並以簡訊發送訂房通知"
        },
        {
          pic: require("../assets/img/icon/money.png"),
          text: "入住當日憑訂房通知以現金或刷卡付款即可"
        }
      ],
      roomDetail: {
        name: "",
        GuestMax: 0,
        bed: "",
        PrivateBath: 0,
        Footage: 0,
        normalDayPrice: 0,
        holidayPrice: 0
      },
      amenities: {},
      description: [],
      labelPosition: "top",
      startTime: "",
      endTime: "",
      total: 0, // 總額
      iDays: 0, // 天數
      night: 0, // 天數
      form: {
        name: "",
        tel: "",
        date: []
      }
    };
  },
  methods: {
    ...mapActions({}),
    //取得房型詳細資料
    getRoomDetail() {
      let roomDetailJosan = window.localStorage.getItem("roomDetail");
      let roomDetail = JSON.parse(roomDetailJosan);
      console.log("roomDetail", roomDetail);

      this.roomDetail.name = roomDetail.name;
      this.roomDetail.GuestMax = roomDetail.descriptionShort.GuestMax;
      this.roomDetail.bed = roomDetail.descriptionShort.Bed[0];
      this.roomDetail.PrivateBath = roomDetail.descriptionShort[`Private-Bath`];
      this.roomDetail.Footage = roomDetail.descriptionShort.Footage;
      this.roomDetail.normalDayPrice = roomDetail.normalDayPrice;
      this.roomDetail.holidayPrice = roomDetail.holidayPrice;
      // ICON
      this.amenities = roomDetail.amenities;
      // 房間描述
      let description = roomDetail.description.split(".");
      description.pop();
      description.forEach(element => {
        this.description.push({ describe: element });
      });
    },
    onSubmit() {
      this.getDays(this.startTime, this.endTime);
      let roomId = window.localStorage.getItem("roomId");
      let obj = {
        name: this.form.name,
        tel: this.form.tel,
        date: this.form.date
      };
      this.$api
        .booking(roomId, obj)
        .then(res => {
          console.log("ressss", res);
          if (res.status === 200) {
            this.showVeiw = "bookingSuccess";
          }
        })
        .catch(err => {
          console.log("CATCH", err);
          this.err = err.data.message;
          this.showVeiw = "bookingFail";
        });
    },
    // 計算日期
    getDays(startTime, endTime) {
      let that = this;
      const format = time => {
        let ymd = "";
        let mouth =
          time.getMonth() + 1 >= 10
            ? time.getMonth() + 1
            : "0" + (time.getMonth() + 1);
        let day = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
        ymd += time.getFullYear() + "-"; // 获取年份。
        ymd += mouth + "-"; // 获取月份。
        ymd += day; // 获取日。
        console.log("ymd", ymd);

        return ymd; // 返回日期。
      };

      const getAllDate = (start, end) => {
        let dateArr = [];
        console.log("dateArr", dateArr);

        let startArr = start.split("-");
        let endArr = end.split("-");
        let db = new Date();
        db.setUTCFullYear(startArr[0], startArr[1] - 1, startArr[2]);
        let de = new Date();
        de.setUTCFullYear(endArr[0], endArr[1] - 1, endArr[2]);
        let unixDb = db.getTime();
        console.log("unixDb", unixDb);

        let unixDe = de.getTime();
        console.log("unixDe", unixDe);
        let stamp = 0;
        const oneDay = 24 * 60 * 60 * 1000;
        for (stamp = unixDb; stamp <= unixDe; ) {
          dateArr.push(format(new Date(parseInt(stamp))));
          stamp = stamp + oneDay;
        }
        return dateArr;
      };

      // 使用
      console.log(getAllDate(startTime, endTime));
      // console.log(getAllDate("2018-12-12", "2019-3-3"));
      that.form.date = getAllDate(startTime, endTime);
      console.log("date", that.form.date);
    }
  }
};
</script>

<style lang="scss">
.booking {
  .el-dialog__body {
    padding: 0 !important;
  }
  .bookAnRoom {
    display: flex;
    .DleftWrap {
      width: 35%;
      background-color: #38470b;
      box-sizing: border-box;
      padding: 50px 80px;
      .el-form-item__label {
        color: #ffffff;
      }
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 100%;
      }
      .iDays {
        color: #949c7c;
        border-bottom: #949c7c 0.5px solid;
      }
      .total {
        display: flex;
        justify-content: flex-end;
        color: #ffffff;
        p {
          text-align: right;
        }
        .dollor {
          font-size: 28px;
          padding-right: 5px;
        }
      }
      .el-button {
        width: 100% !important;
        background-color: #ffffff00;
        color: #ffffff;
      }
    }
    .DrightWrap {
      width: 65%;
      box-sizing: border-box;
      padding: 5% 5% 5% 5%;
      .nameWrap {
        font-size: 32px;
        color: #38470b;
        font-weight: 800;
      }
      .roomName {
        display: flex;
        align-items: center;
      }
      .roomName::after {
        content: "";
        display: inline-block;
        width: 40%;
        height: 1px;
        background-color: #38470b;
        margin-left: 20px;
      }
      .Introduction {
        margin: 30px 0;
        p {
          line-height: 1.5;
        }
      }
      .amenities {
        display: flex;
        flex-wrap: wrap;
        .iconItem {
          width: 10%;
          margin: 0 10px;
        }
        .iconItem > img {
          width: 100%;
        }
      }
      .roomDescribe {
        margin: 30px 0;
        p {
          font-size: 24px;
          color: #38470b;
          font-weight: 800;
          margin-bottom: 20px;
        }
        li {
          line-height: 1.5;
        }
      }
      .process {
        p {
          font-size: 24px;
          color: #38470b;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .blockWrap {
          display: flex;
        }
        .blockItem {
          display: flex;
          flex-direction: column;
          width: 42%;
          margin: 0 3%;
        }
        .picBG {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #949c7c;
        }
        .picBG > img {
          width: 30%;
          padding: 10px 0;
        }
        .textItem {
          border: #949c7c 0.5px solid;
          border-radius: 0 0 10px 10px;
          box-sizing: border-box;
          padding: 10px;
        }
        .textItem > p {
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
        }
      }
    }
  }
  .fail {
    padding: 15vh 0;
    background-color: #38470b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .imgItem {
      width: 15%;
    }
    .imgItem > img {
      width: 100%;
    }
    h3 {
      font-size: 52px;
      margin: 20px 0;
      color: #ffffff;
    }
    p {
      font-size: 24px;
      color: #ffffff;
      line-height: 1.5;
    }
  }
}
// =========================== RWD =========================== //
// 平板
@media screen and (min-width: 768px) {
}
// 平板橫向
@media screen and (min-width: 992px) {
}
// 桌機
@media screen and (min-width: 1200px) {
}
</style>
