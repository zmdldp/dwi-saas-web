<template>
  <div class="main">
    <el-row :gutter="10">
      <el-col :sm="24" :xs="24">
        <div class="app-container user-container">
          <el-row :gutter="10">
            <el-col :sm="12" :xs="24">
              <div class="user-wrapper">
                <div class="user-header">
                  <el-avatar :size="60" :src="avatar" fit="fill">
                    <el-avatar :size="60">{{
                      user.name | userAvatarFilter
                    }}</el-avatar>
                  </el-avatar>
                </div>
                <div class="user-info">
                  <div class="random-message">
                    {{ welcomeMessage }}
                  </div>
                  <div class="user-dept">
                    <span>{{
                      user.workDescribe
                        ? user.workDescribe
                        : $t("common.noWorkDescribe")
                    }}</span>
                  </div>
                  <div class="user-login-info">
                    {{ $t("common.lastLoginTime") }}：
                    <span id="last-login-time">{{
                      user.lastLoginTime
                        ? user.lastLoginTime
                        : $t("common.firstLogin")
                    }}</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :sm="12" :xs="24">
              <div class="user-visits">
                <el-row style="margin-bottom: .7rem">
                  <el-col :offset="4" :span="4">{{
                    $t("common.todayIp")
                  }}</el-col>
                  <el-col :offset="4" :span="4">{{
                    $t("common.todayVisit")
                  }}</el-col>
                  <el-col :offset="4" :span="4">{{
                    $t("common.TotalVisit")
                  }}</el-col>
                </el-row>
                <el-row>
                  <el-col :offset="4" :span="4" class="num">
                    <el-link type="primary">
                      <countTo
                        :duration="3000"
                        :end-val="todayIp"
                        :start-val="0"
                      />
                    </el-link>
                  </el-col>
                  <el-col :offset="4" :span="4" class="num">
                    <el-link type="primary">
                      <countTo
                        :duration="3000"
                        :end-val="todayVisit"
                        :start-val="0"
                      />
                    </el-link>
                  </el-col>
                  <el-col :offset="4" :span="4" class="num">
                    <el-link type="primary">
                      <countTo
                        :duration="3000"
                        :end-val="totalVisit"
                        :start-val="0"
                      />
                    </el-link>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="12" :xs="24">
        <div class="app-container">
          <div id="visit-count-chart" style="width: 100%;height: 20rem" />
        </div>
      </el-col>
      <el-col :sm="12" :xs="24">
        <div class="app-container project-wrapper">
          <el-tabs v-model="activeName">
            <el-tab-pane label="项目介绍" name="first">
              <div class="basic-container">
                <el-card>
                  <div class="el-font-size">
                    <span>产品名称</span>
                    <el-divider direction="vertical" />
                    <span
                      ><el-tag
                        >saas快速开发平台</el-tag
                      ></span
                    >
                    <el-divider content-position="right"
                      ><i class="el-icon-star-off"
                    /></el-divider>

                    <span>内置账号</span>
                    <el-divider direction="vertical" />
                    <el-tag
                      effect="plain"
                      style="cursor: pointer"
                      @click="handleClipboard('saas_pt', $event)"
                    >
                      多租户平台管理员(saas_pt)
                    </el-tag>
                    <el-divider direction="vertical" />
                    <el-tag
                      effect="plain"
                      style="cursor: pointer"
                      type="success"
                      @click="handleClipboard('saas', $event)"
                    >
                      多租户内置管理员(saasAdmin)
                    </el-tag>
                    <el-divider direction="vertical" />
                    <el-tag
                      effect="plain"
                      style="cursor: pointer"
                      type="success"
                      @click="handleClipboard('saas', $event)"
                    >
                      租户超级管理员(saas)
                    </el-tag>           
                    <br/><br/>
                   <el-divider direction="vertical" />
                    <el-tag
                      effect="plain"
                      style="cursor: pointer"
                      type="success"
                      @click="handleClipboard('saas', $event)"
                    >
                      租户普通管理员(general)
                    </el-tag>
                    <el-divider direction="vertical" />
                    <el-tag
                      effect="plain"
                      style="cursor: pointer"
                      @click="handleClipboard('normal', $event)"
                      type="info"
                      >普通用户(normal)
                    </el-tag>
                    <el-divider content-position="right"
                      ><i class="el-icon-star-off"
                    /></el-divider>

                    <span>密码    </span>
                    <el-divider direction="vertical" />
                    <span>
                      <el-tag>123456</el-tag>
                    </span>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane label="技术栈" name="second">
              <table>
                <template v-for="(project, index) in projects">
                  <tr :key="index" v-if="index % 2 == 0">
                    <td>
                      <div class="project-avatar-wrapper">
                        <el-avatar class="project-avatar">{{
                          projects[index].avatar
                        }}</el-avatar>
                      </div>
                      <div class="project-detail">
                        <div class="project-name">
                          {{ projects[index].name }}
                        </div>
                        <div class="project-desc">
                          <p>{{ projects[index].des }}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="project-avatar-wrapper">
                        <el-avatar class="project-avatar">{{
                          projects[index + 1].avatar
                        }}</el-avatar>
                      </div>
                      <div class="project-detail">
                        <div class="project-name">
                          {{ projects[index + 1].name }}
                        </div>
                        <div class="project-desc">
                          <p>{{ projects[index + 1].des }}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="12" :xs="24">
        <div class="app-container">
          <div id="browser-count-chart" style="width: 100%;height: 20rem" />
        </div>
      </el-col>
      <el-col :sm="12" :xs="24">
        <div class="app-container">
          <div
            id="operating-system-count-chart"
            style="width: 100%;height: 20rem"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from "echarts";
import { parseTime } from "@/utils";
import countTo from "vue-count-to";
import resize from "@/components/Charts/mixins/resize";
import clipboard from "@/utils/clipboard";
import { simplePie, simpleBar } from "@/utils/chartsOption";
import dashboardApi from "@/api/Dashboard.js";

export default {
  name: "Dashboard",
  components: { countTo },
  filters: {
    userAvatarFilter(name) {
      return name.charAt(0);
    }
  },
  mixins: [resize],
  data() {
    return {
      activeName: "first",
      welcomeMessage: "",
      todayIp: 0,
      todayVisit: 0,
      totalVisit: 0,
      chart: null,
      chartOption: simpleBar(this.$t("common.visitTitle") + "\n"),
      browserCountOption: simplePie("访问用户浏览器"),
      operatingSystemCountOption: simplePie("访问用户操作系统"),
      browserCountChart: null,
      operatingSystemCountChart: null,
      projects: [
        {
          name: "Spring全家桶",
          des: "Spring Boot & SpringCloud & SpringCloudAlibaba",
          avatar: "SB"
        },
        {
          name: "Mybatis-Plus",
          des: "Mybatis-plus：Mybatis 增强组件",
          avatar: "MP"
        },
        {
          name: "灰度发布",
          des: "修改ribbon的负载均衡策略来实现来灰度发布与本地协同开发",
          avatar: "灰"
        },
        {
          name: "J2cache",
          des: "二级缓存框架",
          avatar: "J"
        },
        {
          name: "文件存储API",
          des: "封装文件接口，实现本地存储、阿里云、FastDFS存储的配置化",
          avatar: "F"
        },
        {
          name: "XXL-JOB",
          des: "基于xxl-jobs增强的，分布式定时任务调度器",
          avatar: "JOB"
        },
        {
          name: "监控",
          des:
            "集成SpringBootAdmin、Zipkin、Redis、Mysql、定时任务等监控，对系统进行全方位监控护航",
          avatar: "M"
        },
        {
          name: "容器技术",
          des: "基于Docker虚拟化容器技术，让迁移、部署更加方便快捷",
          avatar: "C"
        }
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.account.user;
    },
    avatar() {
      if (!this.user["avatar"]) {
        return require(`@/assets/avatar/default.jpg`);
      } else {
        if (
          this.user["avatar"].startsWith("http://") ||
          this.user["avatar"].startsWith("https://")
        ) {
          return this.user["avatar"];
        } else {
          return require(`@/assets/avatar/${this.user.avatar}`);
        }
      }
    }
  },
  mounted() {
    this.welcomeMessage = this.welcome();
    this.initIndexData();
  },
  methods: {
    handleClipboard(text, event) {
      clipboard(text, event);
    },
    welcome() {
      const date = new Date();
      const hour = date.getHours();
      const time =
        hour < 6
          ? this.$t("common.goodMorning")
          : hour <= 11
          ? this.$t("common.goodMorning")
          : hour <= 13
          ? this.$t("common.goodAfternoon")
          : hour <= 18
          ? this.$t("common.goodAfternoon")
          : this.$t("common.goodEvening");

      const welcomeArr = Array.from({ length: 10 }, (v, i) =>
        this.$t("common.randomMessage." + i)
      );
      const index = Math.floor(Math.random() * welcomeArr.length);
      return `${time}, ${this.user.name}, ${welcomeArr[index]}`;
    },
    initIndexData: function() {
      dashboardApi.getItem({}).then(response => {
        const res = response.data;
        const data = res.data;

        this.todayIp = Number(data.todayLoginIv);
        this.totalVisit = Number(data.totalLoginPv);
        this.todayVisit = Number(data.todayLoginPv);
      });

      dashboardApi.getChart({}).then(response => {
        const res = response.data;
        const data = res.data;

        this.tenDaysData(data);
        this.browserCount(data.browserCount);
        this.operatingSystemCount(data.operatingSystemCount);
      });
    },
    tenDaysData(data) {
      const tenVisitCount = [];
      const dateArr = [];
      const tenUserVisitCount = [];

      for (let i = 9; i >= 0; i--) {
        const time = parseTime(
          new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * i),
          "{y}-{m}-{d}"
        );
        let contain = false;
        for (const o of data.lastTenVisitCount) {
          if (o.login_date === time) {
            contain = true;
            tenVisitCount.push(o.count);
            break;
          }
        }
        if (!contain) {
          tenVisitCount.push(0);
        }

        let userContain = false;
        for (const o of data.lastTenUserVisitCount) {
          if (o.login_date === time) {
            userContain = true;
            tenUserVisitCount.push(o.count);
            break;
          }
        }
        if (!userContain) {
          tenUserVisitCount.push(0);
        }
        dateArr.push(time);
      }

      this.chart = echarts.init(document.getElementById("visit-count-chart"));
      this.chartOption.legend.data = [
        this.$t("common.you"),
        this.$t("common.total")
      ];
      this.chartOption.xAxis.data = dateArr;
      this.chartOption.series.push({
        name: this.$t("common.you"),
        type: "bar",
        barWidth: "25%",
        color: "rgb(0, 227, 150)",
        data: tenUserVisitCount
      });
      this.chartOption.series.push({
        name: this.$t("common.total"),
        type: "bar",
        barWidth: "25%",
        color: "rgb(0, 143, 251)",
        data: tenVisitCount
      });
      this.chart.setOption(this.chartOption);
    },
    browserCount(data) {
      if (!data) {
        return;
      }
      const legend_data = [];
      const series_data = [];
      data.forEach(item => {
        const browser = item.browser || "未知";
        series_data.push({ value: item.count, name: browser });
        legend_data.push(browser);
      });

      this.browserCountOption.series[0].data = series_data;
      this.browserCountOption.legend.data = legend_data;

      this.browserCountChart = echarts.init(
        document.getElementById("browser-count-chart"),
        "westeros"
      );
      this.browserCountChart.setOption(this.browserCountOption);
    },
    operatingSystemCount(data) {
      if (!data) {
        return;
      }
      const legend_data = [];
      const series_data = [];
      data.forEach(item => {
        const browser = item.operating_system || "未知";
        series_data.push({ value: item.count, name: browser });
        legend_data.push(browser);
      });

      this.operatingSystemCountOption.series[0].data = series_data;
      this.operatingSystemCountOption.legend.data = legend_data;

      this.browserCountChart = echarts.init(
        document.getElementById("operating-system-count-chart"),
        "westeros"
      );
      this.browserCountChart.setOption(this.operatingSystemCountOption);
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 10px;

  .app-container {
    margin: 0 0 10px 0;
  }

  .user-container {
    padding: 15px;
  }

  .user-wrapper {
    width: 100%;
    display: inline-block;

    .user-header {
      display: inline-block;
      vertical-align: middle;
    }

    .user-info {
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;

      .random-message {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }

      .user-dept,
      .user-login-info {
        color: rgba(0, 0, 0, 0.45);
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        line-height: 1.1rem;
      }
    }
  }

  .user-visits {
    text-align: center;
    padding-right: 2rem;
    margin-top: 1rem;
    vertical-align: middle;

    .num {
      font-weight: 600;
    }
  }

  .project-wrapper {
    padding: 0px 10px;

    .project-header {
      padding: 18px;
      margin-bottom: 16px;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      td {
        width: 50%;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        padding: 0.6rem;

        .project-avatar-wrapper {
          display: inline-block;
          float: left;
          margin-right: 0.7rem;

          .project-avatar {
            color: #42b983;
            background-color: #d6f8b8;
          }
        }

        &:nth-child(odd) {
          border-right: 1px solid #f1f1f1;
        }
      }
    }

    .project-detail {
      display: inline-block;
      float: left;
      text-align: left;
      width: 75%;

      .project-name {
        font-size: 0.9rem;
        margin-top: -2px;
        font-weight: 600;
      }

      .project-desc {
        color: rgba(0, 0, 0, 0.45);

        p {
          margin: 5px 0 0 0;
          font-size: 0.7rem;
          line-height: 1.3rem;
          white-space: normal;
        }
      }
    }
  }

  @media screen and (max-width: 1366px) {
    .user-info {
      max-width: 25rem;
    }
  }
  @media screen and (max-width: 1300px) {
    .user-info {
      max-width: 19rem;
    }
  }

  @media screen and (max-width: 1120px) {
    .user-info {
      max-width: 17rem;
    }
  }
}

.el-font-size {
  font-size: 14px;
}

.basic-container {
  padding: 10px 6px;
  border-radius: 10px;
  box-sizing: border-box;

  .el-card {
    width: 100%;
  }

  &:first-child {
    padding-top: 0;
  }
}

.el-card.is-always-shadow {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none !important;
}
</style>
