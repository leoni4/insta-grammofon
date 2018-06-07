<template>
  <div class="login-page-contaner">
    <h1 class="welcome-title">
      Weclome to Insta Grammofon!
    </h1>
    <el-row type="flex" justify="center">
      <el-col :span="50">
        <el-input placeholder="Login"  class="input-with-select" v-model="login" clearable>
          <el-select v-if="accounts.length" class="el-select" slot="append" value="Select">
            <el-option v-for="item in accounts"
                       :label="item.name"
                       :value="item.name">

            </el-option>
          </el-select>
        </el-input>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-col :span="50" >
        <el-input type="password" placeholder="Password" v-model="password" clearable>
          <el-button v-if="accounts.length" slot="append">Login</el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-button v-if="!accounts.length">Login</el-button>
    </el-row>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          login: '',
          select: '',
          password: '',
          accounts: [
            {
              name: 'insta_grammofon'
            }
          ]
        }
      }
    }
</script>

<style scoped>
.login-page-contaner{
  margin: 200px 0 0;
}

.input-with-select .el-select,
.el-input .el-button{
  width: 90px;
}

.el-row {
  margin-bottom: 20px;
}

.welcome-title{
  font-weight: 100;
  font-size: 50px;
  text-align: center;
}
</style>
