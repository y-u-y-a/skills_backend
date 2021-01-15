import User from '@/entity/user'

const userQuery = {
  // 全件取得
  async all(_: any) {
    const users = await User.find()
    console.log('発火')
    return users
  },
  // 1件取得
  async find(_: any, req: any) {
    const user = await User.findOne(req.id)
    return user
  },
}

export default userQuery
