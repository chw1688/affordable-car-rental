
<template>
  <div class="car-use">
    <form action class="search">
      <input type="search" placeholder="请输入需要查询的车辆车牌号" v-model="searchmas" />
      <button @click="goto">查询车辆</button>
    </form>
    <div class="use-manage">
      <div>
        <UseNav>
          <p slot="txt1">车辆基本信息</p>
        </UseNav>
        <div class="car-txt">
          <div class="txt1">
            <p>未使用</p>
            <img :src="list.car_url" alt />

            <p class="asd">{{list.car_name}}</p>
            <p class="asd">
              <span class="money">{{list.use_money}}</span>/月
            </p>
          </div>
          <div class="txt2">
            <p>车牌号:{{list.car_num}}</p>
            <p>车型：{{list.car_type}}</p>
            <p>生产厂家：{{list.car_manufacture}}</p>
            <p>保险公司：{{list.insurance_company}}</p>
            <p>路桥费缴纳时间：{{list.road_bridge_paytime}}</p>
          </div>
          <div class="txt2">
            <p>注册日期：{{list.register_time}}</p>
            <p>发动机号码：{{list.engine_number}}</p>
            <p>发动机号：{{list.engine_num}}</p>
            <p>底盘号码：{{list.chassis_num}}</p>
            <p>二保时间：{{list.two_warranty}}</p>
            <p>注册时间：{{list.issue_time}}</p>
          </div>
        </div>
      </div>
      <div class="mas-1 mas">
        <UseNav>
          <p
            :slot="item.slot"
            @click="aaa(index)"
            v-for="(item,index) in p_list"
            :class="{p_active:index==isShow}"
            :key="index"
          >{{item.txt}}</p>
          <span
            :slot="item.slot"
            @click="bbb(index)"
            v-for="(item,index) in span_list"
            :class="{span_active:index==toShow}"
            :key="index"
          >{{item.txt}}</span>
        </UseNav>
        <el-table
          :data="list2"
          style="width: 100% ,display:flex,justify-content:center"
          height="250"
          v-show="bool"
        >
          <el-table-column prop="customer" label="客户" width="140"></el-table-column>
          <el-table-column prop="contact" label="联系方式" width="140"></el-table-column>
          <el-table-column prop="lease" label="租赁方式" width="140"></el-table-column>
          <el-table-column prop="id_number" label="证件号码" width="190"></el-table-column>
          <el-table-column prop="take_time" label="取车时间" width="190"></el-table-column>
          <el-table-column prop="return_time" label="还车时间" width="180"></el-table-column>
          <el-table-column prop="charge" label="收取费用（元）" flex="1"></el-table-column>
        </el-table>
        <el-table
          :data="list2"
          style="width: 100%,display:flex, justify-content:center"
          height="250"
          v-show="!bool"
        >
          <el-table-column prop="err_people" label="违规客户" width="140"></el-table-column>
          <el-table-column prop="err_tel" label="联系方式" width="140"></el-table-column>
          <el-table-column prop="err_event" label="违规事件" width="140"></el-table-column>
          <el-table-column prop="err_time" label="违规时间" width="190"></el-table-column>
          <el-table-column prop="err_location" label="违规地点" width="190"></el-table-column>
          <el-table-column prop="err_damages" label="违规惩罚" width="180"></el-table-column>
          <el-table-column prop="err_damage_people" label="违规处理人员" flex="1"></el-table-column>
        </el-table>
      </div>
    </div>
    <div v-show="aa_show" class="kong">你输入的车辆品牌不存在</div>
  </div>
</template>

<script>
import UseNav from "./use-nav";

export default {
  data() {
    return {
      p_list: [
        {
          txt: "使用记录",
          slot: "txt1-1"
        },
        {
          txt: "违章记录",
          slot: "txt1-2"
        }
      ],
      span_list: [
        {
          txt: "近一个月",
          slot: "txt2"
        },
        {
          txt: "近三个月",
          slot: "txt3"
        },
        {
          txt: "近六个月",
          slot: "txt4"
        }
      ],
      searchmas: "",
      toShow: 0,
      isShow: 0,
      bool: true,
      list: [],
      list2: [],
      list2_1: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      ggg: "",
      result: "",
      aa_show: false,
      car_tel: ["豫A-xfl01", "豫A-bm001", "豫A-ad001", "豫A-kdlk1", "豫A-dz001"]
    };
  },
  mounted() {
    this.axios
      .get("./../../../../static/js/car-use-err-massage.json")
      .then(res => {
        this.ggg = res.data;
        this.result = this.ggg[0];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        // console.log(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goto() {
      console.log(this.result);
      if (this.car_tel[0] == this.searchmas) {
        this.result = this.ggg[0];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        this.aa_show = false;
        console.log(this.result);
      } else if (this.car_tel[1] == this.searchmas) {
        this.result = this.ggg[1];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        this.aa_show = false;
      } else if (this.car_tel[2] == this.searchmas) {
        this.result = this.ggg[2];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        this.aa_show = false;
      } else if (this.car_tel[3] == this.searchmas) {
        this.result = this.ggg[3];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        this.aa_show = false;
      } else if (this.car_tel[4] == this.searchmas) {
        this.result = this.ggg[4];
        this.list = this.result.car_massage;
        this.list2 = this.result.use_record_1;
        this.list2_1 = this.result.use_record_1;
        this.list3 = this.result.use_record_2;
        this.list4 = this.result.use_record_3;
        this.list5 = this.result.err_record_1;
        this.list6 = this.result.err_record_2;
        this.list7 = this.result.err_record_3;
        this.aa_show = false;
      } else if (this.searchmas == "") {
         this.aa_show = true;
        document.getElementsByClassName('kong')[0].innerHTML="输入不能为空"
      } else {
        this.aa_show = true;
          document.getElementsByClassName('kong')[0].innerHTML="你输入的车辆品牌不存在"
      }
    },
    aaa(index) {
      this.isShow = index;
      // console.log(this.isShow);
      if (this.isShow == 1) {
        this.bool = false;
        this.list2 = this.list5;
        this.toShow = 0;
      } else {
        this.bool = true;
        this.list2 = this.list2_1;
        this.toShow = 0;
      }
    },
    bbb(index) {
      this.toShow = index;
      // console.log(this.toShow)
      if (this.toShow == 0) {
        if (this.isShow == 0) {
          this.list2 = this.list2_1;
        } else {
          this.list2 = this.list5;
        }
      } else if (this.toShow == 1) {
        if (this.isShow == 0) {
          this.list2 = this.list3;
        } else {
          this.list2 = this.list6;
        }
      } else {
        if (this.isShow == 0) {
          this.list2 = this.list4;
        } else {
          this.list2 = this.list7;
        }
      }
    }
  },
  components: {
    UseNav
  }
};
</script>

<style scoped lang=less>
.car-use {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .search {
    width: 100%;
    input {
      width: 50%;
      height: 62px;
      margin: 30px 48px;
      margin-right: 30px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 17px;
      padding: 0 10px;
      outline: none;
    }
    button {
      width: 157px;
      height: 62px;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
      background-color: #ffc600;
      font-size: 24px;
      color: #fff;
    }
  }
  .kong {
    width: 85%;
    height: 530px;
    /* border: 1px solid #ccc; */
    background-color: #fff;
    position: absolute;
    text-align: center;
    line-height: 400px;
    font-size:30px;
    bottom: 0;
  }
  .use-manage {
    margin: 0 49px;
    div {
      .car-txt {
        display: flex;
        div {
          padding: 0 30px;
        }
        .txt2 {
          font-size: 14px;
          line-height: 30px;
        }
        .txt1 {
          display: flex;
          flex-direction: column;
          position: relative;
          p:first-of-type {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 12px;
            border: 1px solid #ffc600;
            padding: 0 5px;
            border-radius: 5px;
            color: #ffc600;
          }
          img {
            width: 261px;
            height: 126px;
          }
          /* p:nth-of-type(2) {
            text-align: center;
            font-size: 15px;
          } */
          p {
            text-align: center;
            font-size: 15px;
            span {
              color: #ffc600;
              font-size: 22px;
            }
          }
        }
      }
    }
    .mas {
      width: 100%;
      /* border:1px solid #ccc; */
      /deep/.el-table {
        border: 1px solid #ccc;
      }
      /deep/.el-table th {
        text-align: center;
        background-color: #ccc;
        color: rgb(61, 60, 60);
        font-size: 17px;
      }
      /deep/.el-table td {
        text-align: center;
        color: rgb(20, 19, 19);
        font-size: 17px;
      }
    }
  }
}
</style>
