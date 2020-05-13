<template>
  <div class="lobby">
    <!-- 下方幻燈片區域 -->
    <el-carousel height="100vh" :interval="7000" arrow="never">
      <el-carousel-item v-for="(item,index) in carousel" :key="index">
        <img :src="item.pic" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 上方區域 -->
    <div class="houseWrap">
      <!-- 左方區塊 -->
      <div class="leftItem">
        <h1>
          <img src="../assets/img/house/logo01.png" alt />
        </h1>
        <div class="HouseInfo">
          <h2>{{$t('好室旅店。HOUSE HOTEL')}}</h2>
          <p>{{$t('花蓮縣花蓮市國聯路1號')}}</p>
          <p>03-3258202</p>
          <p>HOUSE@HOTEL.COM</p>
        </div>
      </div>
      <!-- 右方區塊 -->
      <div class="rightItem" v-loading.fullscreen="fullscreenLoading">
        <div class="smallRoom">
          <div class="roomPic" v-for="(room,index) in roomDetail.slice(0,3)" :key="index">
            <img :src="room.pic" alt="房間照片" />
            <div href class="mask" @click="goRoom(room.id)">
              <p>{{room.name}}</p>
            </div>
          </div>
        </div>
        <div class="smallRoom">
          <div class="roomPic" v-for="(room,index) in roomDetail.slice(3,6)" :key="index">
            <img :src="room.pic" alt="房間照片" />
            <div href class="mask" @click="goRoom(room.id)">
              <p>{{room.name}}</p>
            </div>
          </div>
        </div>
      </div>
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
  mounted() {
    this.getRoom();
  },
  data() {
    return {
      fullscreenLoading: true,
      carousel: [
        { pic: require("../assets/img/house/house01.jpeg") },
        { pic: require("../assets/img/house/house02.jpeg") },
        { pic: require("../assets/img/house/house03.jpeg") },
        { pic: require("../assets/img/house/house04.jpeg") }
      ],
      roomDetail: []
    };
  },
  methods: {
    ...mapActions({}),
    getRoom() {
      this.$api.getRoom({}).then(res => {
        if (res.data.success === true) {
          res.data.items.forEach(element => {
            this.roomDetail.push({
              pic: element.imageUrl,
              name: element.name,
              id: element.id
            });
          });
          this.fullscreenLoading = false;
        }
        console.log("this.roomDetail", this.roomDetail);
      });
    },
    goRoom(id) {
      window.localStorage.setItem("roomId", id);
      this.$router.push({ path: "/roomDetail" }).catch(err => {
        // 因當前router.path == 要push去的位置 會爆錯 所以為了不讓控制台報錯誤 印個console.log
        console.log("err", err);
      });
    }
  }
};
</script>

<style lang="scss">
* {
  // outline: 2px solid red;
}
.lobby {
  position: relative;
  .el-carousel__indicators--horizontal {
    bottom: 41px;
    left: 14vw;
    transform: translateX(-50%);
  }
  .el-carousel__button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
  }
  .el-carousel__item > img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: grayscale(90%);
  }
  .houseWrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85vw;
    height: 85vh;
    z-index: 4000;
    display: flex;
    justify-content: space-between;
  }
  .leftItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1,
    h1 > img {
      width: 100%;
    }
    .HouseInfo {
      color: #ffffff;
      margin-bottom: 10px;
      font-size: 14px;
      padding: 0px 50px;
      h2,
      p {
        margin: 15px 0;
      }
    }
  }
  .rightItem {
    .smallRoom {
      display: flex;
    }
    .roomPic,
    .mask {
      width: 41vh;
      height: 41vh;
    }
    .roomPic {
      position: relative;
      cursor: pointer;
    }
    .roomPic > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mask {
      position: absolute;
      background-color: #38470b9c;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.7s ease-in-out;
      text-decoration: none;
    }
    .mask > p {
      line-height: 41vh;
      text-align: center;
      font-size: 20px;
      color: #ffffff;
    }
    .roomPic:hover .mask {
      opacity: 1;
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