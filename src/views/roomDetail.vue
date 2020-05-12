<template>
  <div class="roomDetail">
    <div class="leftWrap">
      <!-- 左方幻燈片區域 -->
      <el-carousel height="100vh" :interval="7000" arrow="never">
        <el-carousel-item v-for="(item,index) in roomPic" :key="index">
          <img :src="item.pic" alt />
        </el-carousel-item>
      </el-carousel>
      <!-- 房型價格及訂房 -->
      <div class="priceWrap">
        <div class="oneNight">
          <h2>${{price}}</h2>
          <p>{{$t('/')}}</p>
          <p>{{$t('1晚')}}</p>
        </div>
        <div class="booking" @click="dialogVisible = true">
          <p>Booking now</p>
        </div>
      </div>
    </div>
    <div class="rightWrap">
      <!-- 標題區域 -->
      <div class="title">
        <h1>{{name}}</h1>
        <p>{{`${titleDetail.GuestMax}人 ‧ ${titleDetail.bed} ‧ 衛浴${titleDetail.PrivateBath}間 ‧ ${titleDetail.Footage}平方公尺`}}</p>
      </div>
      <!-- 房間規則 -->
      <div class="roomRuleWrap">
        <p>{{$t('平日 (一 ~ 四) 價格 : ')}}{{normalDayPrice}}{{$t(' / 假日 (五 ~ 日) 價格 : ')}}{{holidayPrice}}</p>
        <p>{{$t('入住時間 : ')}}{{checkInAndOut.checkInEarly}}{{$t(' (最早) / ')}}{{checkInAndOut.checkInLate}}{{$t(' (最晚) ')}}</p>
        <p>{{$t('退房時間 : ')}}{{checkInAndOut.checkOut}}</p>
      </div>
      <!-- 房間描述 -->
      <div class="roomDescribe">
        <ul>
          <li v-for="(describe,index) in description" :key="index">‧{{$t(describe.describe)}}</li>
        </ul>
      </div>
      <!-- ICON -->
      <div class="amenities">
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Breakfast.png" v-if="amenities[`Breakfast`]" />
          <img src="../assets/img/falseIcon/Breakfast.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Mini-Bar.png" v-if="amenities[`Mini-Bar`]" />
          <img src="../assets/img/falseIcon/Mini-Bar.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Room-Service.png" v-if="amenities[`Room-Service`]" />
          <img src="../assets/img/falseIcon/Room-Service.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Wi-Fi.png" v-if="amenities[`Wi-Fi`]" />
          <img src="../assets/img/falseIcon/Wi-Fi.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Child-Friendly.png" v-if="amenities[`Child-Friendly`]" />
          <img src="../assets/img/falseIcon/Child-Friendly.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Television.png" v-if="amenities[`Television`]" />
          <img src="../assets/img/falseIcon/Television.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Great-View.png" v-if="amenities[`Great-View`]" />
          <img src="../assets/img/falseIcon/Great-View.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Refrigerator.png" v-if="amenities[`Refrigerator`]" />
          <img src="../assets/img/falseIcon/Refrigerator.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Sofa.png" v-if="amenities[`Sofa`]" />
          <img src="../assets/img/falseIcon/Sofa.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Pet-Friendly.png" v-if="amenities[`Pet-Friendly`]" />
          <img src="../assets/img/falseIcon/Pet-Friendly.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Smoke-Free.png" v-if="amenities[`Smoke-Free`]" />
          <img src="../assets/img/falseIcon/Smoke-Free.png" v-else />
        </div>
        <div class="iconItem">
          <img src="../assets/img/trueIcon/Air-Conditioner.png" v-if="amenities[`Air-Conditioner`]" />
          <img src="../assets/img/falseIcon/Air-Conditioner.png" v-else />
        </div>
      </div>
      <!-- 日曆 -->
      <div class="calendar">
        <p>{{$t('空房狀態查詢')}}</p>
        <el-calendar v-model="value" id="calendar">
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template slot="dateCell" slot-scope="{date, data}">
            <!--自定义内容-->
            <div>
              <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
              <div class="dateItem" v-for="(item,index) in calendarData" :key="index">
                <div v-if="(item.date).indexOf(data.day)!=-1">
                  <el-tooltip class="item" effect="dark" :content="`已預定`" placement="right">
                    <div class="is-selected">━━</div>
                  </el-tooltip>
                </div>
                <div v-else></div>
              </div>
            </div>
          </template>
        </el-calendar>
      </div>
    </div>
    <!-- 彈窗 -->
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <bookingVeiw></bookingVeiw>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pic from "../assets/img/trueIcon/Air-Conditioner.png";
import bookingVeiw from "../components/booking";

export default {
  components: {
    bookingVeiw
  },
  watch: {},
  computed: {
    ...mapGetters({})
  },
  mounted() {
    this.getROomDetail();
  },
  data() {
    return {
      dialogVisible: false, // 彈窗
      calendarData: [],
      value: new Date(),
      roomPic: [], // 幻燈片房間圖
      price: 0,
      name: "",
      titleDetail: { GuestMax: 0, bed: "", PrivateBath: 0, Footage: 0 },
      holidayPrice: 0,
      normalDayPrice: 0,
      checkInAndOut: { checkInEarly: "", checkInLate: "", checkOut: "" },
      description: [],
      amenities: {}
    };
  },
  methods: {
    ...mapActions({}),
    getROomDetail() {
      let roomID = window.localStorage.getItem("roomId");
      this.$api.roomDetail(roomID).then(res => {
        console.log("roomDetail", res);
        res.data.booking.forEach(element => {
          this.calendarData.push({ date: element.date });
        });
        window.localStorage.setItem(
          "roomDetail",
          JSON.stringify(res.data.room[0])
        );
        if (res.data.success === true) {
          // 判斷當日價錢
          let today = new Date().getDay();
          this.holidayPrice = res.data.room[0].holidayPrice;
          this.normalDayPrice = res.data.room[0].normalDayPrice;
          if (today === 0 || today === 6 || today === 5) {
            this.price = res.data.room[0].holidayPrice;
          } else {
            this.price = res.data.room[0].normalDayPrice;
          }
          // 幻燈片圖
          let roomPic = res.data.room[0].imageUrl;
          roomPic.forEach(roomPic => {
            this.roomPic.push({ pic: roomPic });
          });
          // 標題名稱
          this.name = res.data.room[0].name;
          // 標題詳細
          this.titleDetail.GuestMax =
            res.data.room[0].descriptionShort.GuestMax;
          this.titleDetail.bed = res.data.room[0].descriptionShort.Bed[0];
          this.titleDetail.PrivateBath =
            res.data.room[0].descriptionShort[`Private-Bath`];
          this.titleDetail.Footage = res.data.room[0].descriptionShort.Footage;
          console.log("this.titleDetail", this.titleDetail);
          // 入住時間
          this.checkInAndOut.checkInEarly =
            res.data.room[0].checkInAndOut.checkInEarly;
          this.checkInAndOut.checkInLate =
            res.data.room[0].checkInAndOut.checkInLate;
          this.checkInAndOut.checkOut = res.data.room[0].checkInAndOut.checkOut;
          // 房間描述
          let description = res.data.room[0].description.split(".");
          description.pop();
          description.forEach(element => {
            this.description.push({ describe: element });
          });
          // ICON
          this.amenities = res.data.room[0].amenities;
          console.log("this.amenities", this.amenities);
        }
      });
    },
    dayClick: function(date, dateStr) {
      console.log(date);
      console.log(dateStr);
      console.log(this.value);
    }
  }
};
</script>

<style lang="scss">
* {
  // outline: 2px solid red;
}

.roomDetail {
  .leftWrap {
    width: 35vw;
    position: fixed;
    top: 0;
    left: 0;
    .el-carousel.el-carousel--horizontal {
      width: 100%;
    }
    .el-carousel__item > img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .el-carousel__indicators--horizontal {
      bottom: 5%;
    }
    .el-carousel__button {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: #38470b;
    }
    .priceWrap {
      position: absolute;
      bottom: 15%;
      left: 0;
      z-index: 4000;
      width: 100%;
      text-align: center;
    }
    .oneNight > h2 {
      font-size: 32px;
      display: inline-block;
      color: #38470b;
    }
    .oneNight > p {
      display: inline-block;
      color: #38470b;
    }
    .oneNight > p:nth-child(2) {
      margin: 0 20px;
    }
    .booking {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
    .booking > p {
      color: #ffffff;
      background-color: #38470b;
      padding: 10px 50px;
      width: 100px;
    }
  }
  .rightWrap {
    margin: 100px 5vw 100px 40vw;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    h1 {
      font-size: 50px;
      font-weight: 800;
      color: #38470b;
    }
    .title > p {
      color: #38470b;
      font-weight: 600;
    }
    .roomRuleWrap {
      margin: 50px 0;
    }
    .roomRuleWrap > p {
      line-height: 2;
      color: #38470b;
    }
    .roomDescribe {
      ul > li {
        line-height: 1.5;
        color: #38470b;
      }
    }
    .amenities {
      display: flex;
      flex-wrap: wrap;
      margin: 40px 0;
      .iconItem {
        width: 14.2857%;
        box-sizing: border-box;
        padding: 0 30px;
        margin: 10px 0;
      }
      .iconItem > img {
        width: 100%;
      }
    }
    .calendar > p {
      color: #38470b;
      margin: 20px 0;
    }
    .is-selected {
      color: #38470b !important;
      font-size: 10px;
      margin-top: 5px;
    }
    .el-calendar-table thead th {
      color: #38470b7c;
    }
    .el-calendar {
      outline: 2px solid #38470b;
    }
    .el-calendar__header {
      border-bottom: 0px solid #ebeef5;
    }
    .el-calendar-table tr td:first-child {
      border-left: 0px solid #ebeef5;
    }
    .el-calendar-table td {
      border-bottom: 0px solid #ebeef5;
      border-right: 0px solid #ebeef5;
    }
    .el-tooltip.is-selected.item {
      color: #38470b !important;
    }
    .calendar-day:hover {
      background: #949c7c !important;
    }
    .calendar-day {
      text-align: center;
      line-height: 65px;
      font-size: 12px;
      height: 65px;
    }
    .dateItem {
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .el-calendar-table .el-calendar-day {
      padding: 0px;
      position: relative;
      height: 65px;
    }
    .el-calendar-table td.is-selected {
      background-color: #949c7c;
    }
    .el-backtop,
    .el-calendar-table td.is-today {
      color: #38470b !important;
      border: #38470b 2px solid !important;
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