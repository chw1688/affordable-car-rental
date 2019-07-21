
<template>
  <div class="car-manage">
    <div class="car-M">
      <form class="search">
        <input type="search" placeholder="请输入要查询的车辆品牌" v-model='searchmas'>
        <button @click="btnClick">查询车辆</button>
      </form>
      <div class="massage">
        <nav>
          <ul>
            <li v-for="(item,index) in list1.car_nav_list" :key="index">{{item}}</li>
          </ul>
        </nav>
         <div v-show="aa_show" class="kong">你输入的车辆品牌不存在</div>
        <ul class="car_massage">
          <li
            v-for="(item,index) in list"
            :key="index"
            @click="fn(index)"
            :class="{active:isactive==index}"
          >
            <p>
              <img :src="item.photo_url" alt />
            </p>
            <p>{{item.name}}</p>
            <p>{{item.tel}}</p>
            <p>{{item.foul_play}}</p>
          </li>
        </ul>
      </div>
      <div class="num-list">
        <!-- <span class="demonstration">10</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="5"
          background
          layout="prev, pager, next"
          :total="50"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "",
      list1: "",
      list2: "",
      isactive: "",
      currentPage: 1,
      pagesize: 5,
      searchmas:"",
      car_name:["宝马","奥迪","雪佛兰","凯迪拉克","大众"],
       ad:"",
       bm:"",
       kdlk:"",
       dz:"",
       xfl:"",
       aa_show:false,
    };
  },
  mounted() {
    this.axios
      .get("./../../../../static/js/car-manage.json")
      .then(res => {
        console.log(res.data);
        this.list = res.data.car_massage_list;
        this.list1 = res.data;
        this.list2 = res.data.all_car_massage_list;
        this.bm=res.data.all_car_massage_list.slice(5, 12);
        this.ad=res.data.all_car_massage_list.slice(12, 21);
        this.kdlk=res.data.all_car_massage_list.slice(21, 26);
        this.xfl=res.data.all_car_massage_list.slice(26, 33);
        this.dz=res.data.all_car_massage_list.slice(33, 41);
        console.log(this.kdlk)
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed:{
      

      },
  methods: {
    fn(index) {
      this.isactive = index;
      this.$router.push("/car-use")
    },
    btnClick() {
      if(this.car_name[1]==this.searchmas){
        this.list=this.ad;
        this.aa_show=false
      }else if(this.car_name[0]==this.searchmas){
        console.log(this.car_name[0])
         this.list=this.bm;
         this.aa_show=false
      }else if(this.car_name[2]==this.searchmas){
         this.list=this.xfl;
         this.aa_show=false
      }else if(this.car_name[3]==this.searchmas){
         this.list=this.kdlk;
         this.aa_show=false
      }else if(this.car_name[4]==this.searchmas){
         this.list=this.dz;
         this.aa_show=false
      }else{
        this.aa_show=true
      }

    },

    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      // console.log(currentPage);
      this.list = this.list2.slice(
        (currentPage - 1) * 4,
        (currentPage - 1) * 4 + 4
      );
    }

  },

  components: {}
};
</script>

<style scoped lang=less>
.car-manage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .car-M {
      width:1135px;
      margin-left:48px;
    .search {
      width: 100%;
      input {
        width: 682px;
        height: 62px;
        margin: 30px 0;
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
        background-color: #ffc600;
        font-size: 24px;
        color: #fff;
        outline: none;
      }
    }
    .massage {
      height:444px;
      overflow: hidden;
      position:relative;
      nav {
        width: 100%;
        height: 54px;
        background-color: #ccc;
        /* border: 1px solid #999; */
        ul {
          display: flex;
          list-style: none;
          li {
            flex: 1;
            text-align: center;
            line-height: 54px;
            font-size: 18px;
          }
        }
      }
      .kong{
        width:1135px;
        height:390px;
        /* border:1px solid #ccc; */
        background-color: #fff;
        position:absolute;
        text-align: center;
        line-height: 400px;
        font-size:30px;
        bottom:0;
      }
      .car_massage {
        list-style: none;
        width: 1135px;
        li {
          height: 100px;
          font-size: 15px;
          display: flex;
          text-align: center;
          align-items: center;
          border: 2px solod #fff;
          p {
            flex: 1;
            img {
              width: 171px;
              height: 95px;
              margin: 0 auto;
            }
          }
        }
        .active {
          background-color: rgb(248, 248, 245);
        }
      }
    }
    .num-list {
      display: flex;
      justify-content: center;
      /* margin-top: 40px; */
    }
  }
}
</style>
