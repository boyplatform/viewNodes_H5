 <template>
    <div class="side">
      <el-row class="tac">
        <el-col>
          <el-menu
            style="width: 320px"
            :default-active="defaultAction"
            :router="true"
            background-color="#777777"
            text-color="#ffffff"
            active-text-color="#40ffba"
            :unique-opened="true">
            <el-submenu :index="item.index" :key="item.index" v-for="item in Subs">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.text}}</span>
              </template>
              <el-menu-item-group v-for="ite in item.sub" :key="ite.index">
                <el-menu-item :index="ite.index">{{ite.content}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      defaultAction: '',
      Subs: [
        {
          index: '1',
          icon: 'el-icon-location',
          text: '导航一',
          sub: [
            {
              index: 'boy_userManagement_backEnd',
              content: '用户管理'
            },
            {
              index: 'daily-show',
              content: '选项2'
            }
          ]
        },
        {
          index: '2',
          icon: 'el-icon-menu',
          text: '导航二',
          sub: [
            {
              index: 'daily-line',
              content: '选项3'
            }
          ]
        },
        {
          index: '3',
          icon: 'el-icon-message',
          text: '导航三',
          sub: [
            {
              index: 'daily-form',
              content: '选项4'
            }
          ]
        },
        {
          index: '4',
          icon: 'el-icon-tickets',
          text: '导航四',
          sub: [
            {
              index: 'daily-table',
              content: '选项5'
            },
            {
              index: 'daily-upload',
              content: '选项6'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side{
      display: block;
      position: absolute;
      width: 220px;
      top: 90px;
      left: 0;
      bottom: 0;
      background: #777777;
  }
  .tac{
    margin-left: -100px;
  }
  .tac .el-menu-item-group .el-menu-item{
    margin-left: 50px;
  }
</style>
 