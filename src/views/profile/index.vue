<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col :span="8" :xs="24">
          <user-card :user="user"/>
        </el-col>
        <el-col :span="16" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane :label="$t('common.timeline')" name="timeline">
                <timeline :user="user"/>
              </el-tab-pane>
              <el-tab-pane :label="$t('common.account')" name="account">
                <account :user="user"/>
              </el-tab-pane>
              <el-tab-pane :label="$t('common.password')" name="password">
                <password :user="user"/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import UserCard from './components/UserCard'
  import Password from './components/Password'
  import Timeline from './components/Timeline'
  import Account from './components/Account'
  import userApi from "@/api/User.js";

  export default {
    name: 'Profile',
    components: {UserCard, Password, Timeline, Account},
    data() {
      return {
        activeTab: '',
        user: {
          ...this.$store.state.account.user, ...{sex: {code: 'M'}}
        }
      }
    },
    computed: {
      // user () {
      //   return this.$store.state.account.user
      // }
    },
    created() {
      this.activeTab = 'timeline'
    },
    mounted() {
      this.initUser();
    },
    methods: {
      initUser() {
        userApi.get(this.$store.state.account.user.id).then(response => {
          const res = response.data
          if (res.success) {
            this.user = res.data;
          }
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  .el-card.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .el-card {
    border: none;
    border-radius: 0;
  }
</style>
